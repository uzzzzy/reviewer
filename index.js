require('./config');

const { glob } = require('glob');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You > ',
});

const chatPlugin = require('./plugin/chatPlugin');
const { readFile } = require('./utils/file');

const chat = chatPlugin({
  markdown: true,
});

async function main() {
  await chat.addHistory(
    `
ini adalah requirement dari project:
${readFile('question/requirement.md')}
setelah ini aku akan memberikan data project untuk review
'''
    `,
    'ya',
    true,
    true
  );

  const tree = await require('tree-cli')({
    base: './tmp/project', // or any path you want to inspect.
    l: 5,
  });

  await chat.addHistory(
    `
ini adalah file tree dari project
${tree.report}
    `,
    'ya'
  );

  const requirementFiles = require('./question/paths');

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

  let paths = await glob('./tmp/project/**/*.*');

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

  for (const path of paths) {
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
  }

  await chat.sendMessage(`
Buatlah penilaian secara terperinci untuk setiap poin requirement yang diberikan,
berdasarkan standar kemampuan programmer pada level Junior.
dengan nilai range 1-100
    `);
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
