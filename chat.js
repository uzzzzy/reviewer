const args = process.argv.slice(2);

require('./config');

const readline = require('readline');

const chatPlugin = require('./plugin/chatPlugin');
const { readFile } = require('./utils/file');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You > ',
});

function chat() {
  if (!args[0]) {
    console.log('Usage: node chat.js <id>');
    process.exit(1);
  }

  const chat = chatPlugin({
    id: args[0],
    markdown: true,
  });

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

chat();
