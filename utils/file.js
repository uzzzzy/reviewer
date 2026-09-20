const fs = require('fs');
const path = require('path');

function isThisFile(filePath) {
  const stat = fs.statSync(filePath);
  return stat.isFile();
}

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, content);
}

function addContentToFile(filePath, content) {
  let fileContent = readFile(filePath);

  fileContent += '\n\n';
  // separator with '===' to make it easier to find the end of the file
  fileContent += '-'.repeat(80) + '\n\n';
  fileContent += content;

  writeFile(filePath, fileContent);
}

function readFile(filePath, fallbackContent = '') {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    writeFile(filePath, fallbackContent);
    return fallbackContent;
  }
}

module.exports = { writeFile, addContentToFile, readFile, isThisFile };
