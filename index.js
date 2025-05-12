require('./config');

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
  await chat.sendMessage(readFile('question/task.md'));

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

  await chat.addHistory(
    `
ini adalah requirement dari project:
${readFile('question/requirement.md')}
dan ini adalah testdebug.html
'''
${readFile('question/testdebug.html')}
'''
    `,
    'ya',
    true,
    true
  );

  const paths = require('./question/paths');
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
bagaimana menurutmu?
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
