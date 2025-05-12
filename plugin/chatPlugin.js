const fs = require('fs');
const path = require('path');

const { chatting } = require('../utils/ai');
const { writeFile, readFile, addContentToFile } = require('../utils/file');

function chatPlugin(options = {}) {
  let { id = null, markdown = false } = options;
  let dir;

  if (id !== null) {
    dir = path.join('tmp', 'chats', `chat_${id}`);
    if (!fs.existsSync(dir)) {
      throw new Error(`Chat directory not found: ${dir}`);
    }
    dir += path.sep; // tambahkan trailing slash
  } else {
    id = Date.now();
    dir = path.join('tmp', 'chats', `chat_${id}`, path.sep);
    fs.mkdirSync(dir, { recursive: true });
  }

  id = id || new Date().getTime();

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
      await writeToMarkdown('# ' + message);
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
      await writeToMarkdown('#' + message);
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
