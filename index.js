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
  rl.prompt();

  rl.on('line', async (line) => {
    await chat.sendMessage(line);
  }).on('close', () => {
    console.log('Chat ditutup.');
    process.exit(0);
  });
}

main();
