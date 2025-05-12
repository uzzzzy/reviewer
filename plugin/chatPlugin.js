const fs = require('fs');
const path = require('path');
const { chatting } = require('../utils/ai');
const { writeFile, readFile, addContentToFile } = require('../utils/file');

function chatPlugin(options = {}) {
  let { id = Date.now(), markdown = false } = options;
  const dir = path.join('tmp', 'chats', `chat_${id}`);
  const historyFile = path.join(dir, 'history.json');
  const markdownFile = path.join(dir, 'chats.md');

  // Ensure chat directory exists
  if (!fs.existsSync(dir)) {
    if (options.id !== undefined) {
      throw new Error(`Chat directory not found: ${dir}`);
    }
    fs.mkdirSync(dir, { recursive: true });
  }

  // Load history
  const history = [];
  try {
    const rawHistory = readFile(historyFile, '[]');
    history.push(...JSON.parse(rawHistory));
  } catch (error) {
    console.error('Failed to load history:', error);
  }

  const writeMarkdown = async (content) => {
    if (!markdown) return;
    try {
      await addContentToFile(markdownFile, content);
    } catch (err) {
      console.error('Failed to write markdown:', err);
    }
  };

  const writeHistory = async () => {
    try {
      await writeFile(historyFile, JSON.stringify(history, null, 2));
    } catch (err) {
      console.error('Failed to write history:', err);
    }
  };

  const sendMessage = async (message, saveToHistory = true) => {
    await writeMarkdown(`# ${message}`);
    const response = await chatting({ history, message });

    history.push({ role: 'user', parts: [{ text: message }] });
    history.push({ role: 'model', parts: [{ text: response.text }] });

    if (saveToHistory) await writeHistory();
    await writeMarkdown(response.text);

    return response;
  };

  const addHistory = async (
    message,
    responseText,
    saveHistory = true,
    saveMarkdown = false
  ) => {
    history.push({ role: 'user', parts: [{ text: message }] });
    history.push({ role: 'model', parts: [{ text: responseText }] });

    if (saveHistory) await writeHistory();
    if (saveMarkdown) {
      await writeMarkdown(`# ${message}`);
      await writeMarkdown(responseText);
    }
  };

  return {
    id,
    sendMessage,
    addHistory,
    writeMarkdown,
  };
}

module.exports = chatPlugin;
