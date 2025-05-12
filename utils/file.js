const fs = require('fs');
const path = require('path');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
}

function addContentToFile(filePath, content) {
  const fileContent = readFile(filePath);
  writeFile(filePath, fileContent + '\n\n' + content);
}

function readFile(filePath, fallbackContent = '') {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    writeFile(filePath, fallbackContent);
    return fallbackContent;
  }
}

module.exports = { writeFile, addContentToFile, readFile };
