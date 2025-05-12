# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1-development] - Unreleased

### Added

- Initial project setup and core functionality.
- AI-powered code review using Google's Gemini AI model.
- Project structure analysis using `tree-cli`.
- Interactive chat interface for communicating with the AI.
- Configuration via environment variables and `config/default.js`.
- Ability to exclude specific paths from the review process.
- Basic `README.md` file with installation and usage instructions.
- Chat history saved to `tmp/chats/chat_<id>/history.json`.
- Markdown output of chat history (optional).
- Integration of project requirements from `requirements/main.md` and files listed in `requirements/paths.js`.
- Implemented `index.js` for orchestrating the code review process.
- Created `chatPlugin.js` to manage chat sessions and history.
- Added `ai.js` for interacting with the Gemini AI model.
- Created file reading and writing utilities in `file.js`.

### Dependencies

- `@google/genai`: ^0.13.0
- `dotenv`: ^16.5.0
- `glob`: ^11.0.2
- `lodash`: ^4.17.21
- `tree-cli`: ^0.6.7

### Known Issues

- The AI may occasionally provide inaccurate or irrelevant feedback. This is due to limitations in the AI model itself.
- The code review process can be slow for very large projects.

### Changed

- The project is currently under active development. (Consider removing if no specific evolving decisions)

### Removed

- No features have been removed yet.

### Fixed

- No bugs have been fixed yet.

### Security

- Initial security considerations. **Important:** Ensure the Gemini API key is stored securely in the `.env` file and not committed to the repository.
