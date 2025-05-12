/**
 * Array of file objects containing file information.
 * @typedef {Object} FileObject
 * @property {string} name - The name of the file (e.g., 'debug.html')
 * @property {string} path - The relative or absolute path to the file (e.g., './tmp/requirements/debug.html')
 */

/**
 * An array containing file objects with their names and paths.
 * Each object follows the {@link FileObject} structure.
 *
 * @example
 * // Example structure:
 * [
 *   {
 *     name: 'debug.html',
 *     message: 'This is a debug file.'
 *     path: './tmp/requirements/debug.html'
 *   },
 *   {
 *     name: 'app.js',
 *     message: 'This is the main application file.'
 *     path: './src/app.js'
 *   }
 * ]
 *
 * @type {Array<FileObject>}
 */
const filePaths = [
  {
    name: 'testdebug.html',
    message:
      'ini adalah file html testdebug.html untuk diperbaiki dari soal nomor 8',
    path: './tmp/testdebug.html',
  },
];

/**
 * Module exports an array of file objects.
 * @module filePaths
 * @type {Array<FileObject>}
 */
module.exports = filePaths;
