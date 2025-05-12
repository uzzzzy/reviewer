const fs = require('fs');

const { chatting } = require('../utils/ai');
const { writeFile, readFile, addContentToFile } = require('../utils/file');

function chatPlugin({ id = null, markdown = false } = {}) {
  id = id || new Date().getTime();

  const dir = 'tmp/chats/chat_' + id + '/';

  if (!fs.existsSync(dir) && id !== null) {
    console.log('Error: Chat directory not found');
    process.exit(1);
  }

  const history = [];
  try {
    const retrievedHistory = readFile(dir + 'history.json', '[]');
    history.push(...JSON.parse(retrievedHistory));
  } catch (error) {
    console.log('error', error);
  }

  const writeToMarkdown = async (message) => {
    console.log('writeToMarkdown', message);
    return await addContentToFile(dir + 'chats.md', message);
  };

  const writeHistory = async () => {
    await writeFile(dir + 'history.json', JSON.stringify(history, null, 2));
  };

  const sendMessage = async (message, saveToHistory = true) => {
    if (markdown) {
      await writeToMarkdown(message);
    }
    const response = await chatting({ history, message });
    if (saveToHistory) {
      await writeHistory();
    }
    if (markdown) {
      await writeToMarkdown(response.text);
    }
    return response;
  };

  const addHistory = async (
    message,
    response,
    saveHistory = true,
    saveMarkdown = false
  ) => {
    console.log('addHistory', message, response);
    history.push({
      role: 'user',
      parts: [
        {
          text: message,
        },
      ],
    });
    history.push({
      role: 'model',
      parts: [
        {
          text: response,
        },
      ],
    });
    if (saveHistory) {
      await writeHistory();
    }
    if (saveMarkdown) {
      await writeToMarkdown(response);
    }
    return;
  };

  return {
    id,
    sendMessage,
    addHistory,
    writeToMarkdown,
  };
}

module.exports = chatPlugin;
