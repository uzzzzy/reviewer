# Code Reviewer

A Node.js-based tool that leverages Google's Gemini AI to review code. It takes a project directory, parses its file structure and contents, and feeds this information to the AI to provide suggestions and feedback.

## Features

- **AI-Powered Code Review:** Uses the Google Gemini AI model to analyze code and provide feedback.
- **Project Structure Analysis:** Automatically generates a file tree of the project to give the AI context.
- **Customizable:** Allows specifying project paths and excluded directories.
- **Interactive Chat:** Provides a command-line interface for interacting with the AI.
- **History Tracking:** Saves chat history for later review.
- **Markdown Output:** Optionally generates markdown files containing the chat history.
- **Requirement integration:** Integrates specific project requirements provided in markdown files.

## Prerequisites

- Node.js (version >= 18.0.0)
- An API key for Google's Gemini AI model (configured in your environment).

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <your_repository_url>
    cd code-reviewer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```
    PROJECT_PATH=./path/to/your/project  # Path to the project you want to review (defaults to ./tmp/project)
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY     # Your Google Gemini API key (required)
    ```

    **Important:** Replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key.

## Usage

### Reviewing a Project

To initiate the code review process, run the following command:

```bash
npm run review
```

This script will:

1.  Read the project's file structure using `tree-cli`.
2.  Read the content of all files in the project (excluding images and specified ignored files).
3.  Feed the file structure and file contents to the Gemini AI.
4.  Start an interactive chat session where you can ask questions and receive feedback from the AI.

### Interactive Chat

Once the `npm run review` command is executed, you'll enter an interactive chat session. You can then ask the AI specific questions about the code or request general feedback.

- **Send a message:** Type your message and press Enter.
- **View a file:** Type `lihat file <path/to/file>` to have the AI review a specific file again.
- **Exit the chat:** Type `quit` to end the session.

### Running the chat only

To use the chat functionality without project data add, run the following command:

```bash
npm run chat <id>
```

Where id is chat session id.

## Configuration

The project's behavior can be configured using the following:

- **`.env` file:** Used to set the `PROJECT_PATH` and `GEMINI_API_KEY` environment variables.
- **`config/default.js`:** Contains default configuration values, including the `aiModel` and `excludedPaths`.

  - `projectPath`: The default path to the project being reviewed.
  - `geminiApiKey`: The default Gemini API key. **Important:** It's best to set this in the `.env` file instead of hardcoding it here.
  - `aiModel`: The Gemini AI model to use (defaults to `gemini-2.0-flash`).
  - `excludedPaths`: An array of directories and files to exclude from the review (e.g., `node_modules`, `.git`).

## Project Structure

```
A:\Personal\docker\reviewer
├── chat.js                 # Script to run the chat interface
├── config                  # Configuration files
│   ├── default.js        # Default configuration settings
│   └── index.js          # Loads configuration from environment variables and defaults
├── index.js                # Main script for running the code review process
├── package-lock.json       # npm package lock file
├── package.json            # Project dependencies and scripts
├── plugin                  # Custom plugins
│   └── chatPlugin.js       # Manages the chat session and history
├── requirements            # Project requirements
│   ├── main.md           # Main project requirements in Markdown
│   └── paths.js          # List of specific files with requirements
└── utils                   # Utility functions
    ├── ai.js               # Handles communication with the Gemini AI
    └── file.js             # Utility functions for reading and writing files
```

- **`chat.js`:** Script to initiate and manage the chat interface with the AI, allowing for interactive conversations about the code.
- **`config/`:** Contains configuration files to manage the project settings.
  - `default.js`: Defines the default configuration options, such as the project path, API key, AI model, and excluded paths.
  - `index.js`: Loads the configuration by merging default settings with environment variables.
- **`index.js`:** The main entry point of the code review process. It orchestrates reading project files, interacting with the AI, and providing the interactive chat interface.
- **`plugin/chatPlugin.js`:** Manages the chat session with the AI, including saving and loading chat history.
- **`requirements/`:** Contains files defining specific project requirements.
  - `main.md`: A Markdown file containing the overall project requirements.
  - `paths.js`: A JavaScript file that exports an array of file paths, allowing you to associate specific requirements or descriptions with individual files.
- **`utils/`:** Contains utility functions used throughout the project.
  - `ai.js`: Handles communication with the Gemini AI model, including sending messages and receiving responses.
  - `file.js`: Provides utility functions for reading and writing files.

## Contributing

Contributions are welcome! Please submit pull requests with clear descriptions of the changes.

## License

This project is licensed under the MIT License.
