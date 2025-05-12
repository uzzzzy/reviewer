// import { GoogleGenAI } from '@google/genai';
const { GoogleGenAI } = require('@google/genai');
const config = require('../config');

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function createChat({ history }) {
  return ai.chats.create({
    model: config.aiModel,
    history,
  });
}

async function chatting({ history = [], message }) {
  const chat = createChat({
    history,
  });
  const response = await chat.sendMessage({ message });
  return response;
}

async function streamChat({ history = [], message }) {
  const chat = createChat({
    history,
  });
  const stream = await chat.sendStreamMessage({ message });
  return stream;
}

module.exports = {
  chatting,
  streamChat,
};
