const dotenv = require('dotenv');
const defaultConfig = require('./default');
const _ = require('lodash');

function getConfig() {
  dotenv.config();

  const projectPath = process.env.PROJECT_PATH;
  const geminiApiKey = process.env.GEMINI_API_KEY;

  const mergedConfig = _.merge(defaultConfig, {
    projectPath,
    geminiApiKey,
  });

  return mergedConfig;
}

module.exports = getConfig();
