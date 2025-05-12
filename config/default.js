module.exports = {
  projectPath: process.env.PROJECT_PATH || './tmp/project',
  geminiApiKey: process.env.GEMINI_API_KEY || 'YOUR_DEFAULT_API_KEY', // API key harus selalu ada, berikan fallback
  aiModel: 'gemini-2.0-flash',
  excludedPaths: [
    'node_modules',
    '.git',
    '.github',
    '.vscode',
    'tmp',
    'cache',
    'resources/static',
  ],
};
