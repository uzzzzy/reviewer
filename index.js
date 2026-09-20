const config = require('./config');

const { glob } = require('glob');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You > ',
});

const chatPlugin = require('./plugin/chatPlugin');
const { readFile, isThisFile } = require('./utils/file');
const strip = require('strip-comments');

const chat = chatPlugin({
  markdown: true,
});

async function main() {
  await chat.addHistory(
    `
  ini adalah requirement dari project:
  ${readFile('requirements/main.md')}

  '''
      `,
    'ya',
    true,
    true
  );

  const tree = await require('tree-cli')({
    base: config.projectPath,
    ignore: [
      ...config.excludedPaths,
      '.svg',
      'images/',
      'scss/',
      'fonts/',
      'vendor/',
    ],
    l: 5,
  });

  await chat.addHistory(
    `
ini adalah file tree dari project
${tree.report}
    `,
    'ya'
  );
  const requirementFiles = require('./requirements/paths');

  if (requirementFiles.length > 0) {
    for (const requirementFile of requirementFiles) {
      const fileContent = readFile(requirementFile.path);
      await chat.addHistory(
        `
ini adalah file: ${requirementFile.path}
${requirementFile?.message || ''}
${fileContent}
        `,
        'ya'
      );
    }
  }

  let paths = await glob(config.projectPath + '/**/*.*');

  const imageExtensions = [
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.svg',
    '.webp',
    '.ico',
  ];
  const ignoredFiles = ['yarn.lock', 'package-lock.json'];

  paths = paths.filter(
    (path) =>
      !imageExtensions.includes(path.split('.').pop()) &&
      !ignoredFiles.includes(path.split('/').pop())
  );

  const excludedPaths = config.excludedPaths;
  paths = paths.filter((path) => {
    for (const excludedPath of excludedPaths) {
      if (path.replaceAll('\\', '/').includes(excludedPath)) {
        return false;
      }
    }
    return true;
  });

  for (const path of paths) {
    if (!isThisFile(path)) {
      continue;
    }
    const content = strip(readFile(path));
    await chat.addHistory(
      `
ini file ${path}
'''
${content}
'''
`,
      'ya'
    );
  }

  rl.prompt();

  rl.on('line', async (line) => {
    if (line === 'quit') {
      console.log('Chat dihentikan.');
      process.exit(0);
    } else if (line.startsWith('lihat file')) {
      const path = line.replace('lihat file ', '');
      const content = readFile(path);
      await chat.addHistory(
        `
  ini file ${path}
  '''
  ${content}
  '''
          `,
        'ya'
      );
      rl.prompt();
    } else {
      await chat.sendMessage(line);
      rl.prompt();
    }
  }).on('close', () => {
    console.log('Chat ditutup.');
    process.exit(0);
  });
  return true;
}

main();
