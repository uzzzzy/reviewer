# README_NOTES.md - Prompt Development for Code Reviewer

## Goal

The goal of this document is to outline the plan and track progress for developing a collection of specialized prompts for the Code Reviewer project. These prompts will be designed to provide more targeted and effective code reviews and skill assessments for different areas, roles, and question types.

## Why Specialized Prompts?

- **More Relevant Feedback/Assessments:** General prompts are too broad. Targeted prompts focus on specific domains and skills.
- **Improved Accuracy:** Targeted prompts guide the AI to focus on key aspects, leading to more accurate feedback and scoring.
- **Role-Specific Insights/Evaluation:** Different roles and question types require different perspectives.
- **Scalability and Maintainability:** A collection of prompts is easier to manage than a single monolithic prompt.
- **Diverse Use Cases:** Supports both code review and skill assessment scenarios.

## Prompt Categories

We will create prompts for the following categories:

- **Frontend Main (FE Main):**
- **Frontend Pseudo (FE Pseudo):**
- **Backend CMS (BE CMS):**
- **Backend Code (BE Code):**
- **Application - Short Answer (App Short Answer):**
- **Application - Programming (App Programming):**
- **True or False (True/False):**
- **Multiple Choice (Multiple Choice):**
- **Programming (Programming):**
- **Library (Library):**
- **Test Programming Skill (Test Programming Skill):**

## Prompt Development Process

1.  **Define Scope:** Clearly define the scope and goals for each prompt category. What are the key aspects to focus on? Consider use cases for both code review and skill assessment.
2.  **Create Initial Prompts:** Develop initial prompts based on the defined scope. Be specific and provide context to the AI. Include clear instructions for scoring (if applicable).
3.  **Testing and Evaluation:** Test the prompts with different code examples and evaluate the quality of the feedback/assessment. Use diverse examples to ensure robustness.
4.  **Iteration and Refinement:** Iterate on the prompts based on the evaluation results. Refine the language, add more context, and adjust the focus.
5.  **Documentation:** Document each prompt category, including its scope, goals, example prompts, evaluation results, and scoring guidelines.

## Example Prompts (Draft)

- **FE Main (React Component Review):**

  ```
  You are a senior frontend developer specializing in React. Review the following React component code for:
  - Adherence to React best practices (Hooks, JSX syntax)
  - Performance bottlenecks (e.g., unnecessary re-renders, memoization)
  - Accessibility issues (e.g., ARIA attributes, semantic HTML)
  - Potential security vulnerabilities (e.g., XSS, injection flaws)
  - Code clarity and maintainability (SOLID principles, coding style)
  Provide specific suggestions for improvement. Grade the code from 1-5 (1 = poor, 5 = excellent) with a justification for the score.

  ```

- **True/False:**

  ```
  You are an expert computer science professor. Evaluate the following statement as true or false and provide a brief justification:

  Statement: In Javascript, the 'let' keyword allows you to declare variables with global scope.
  ```

## Integration with Code Reviewer

- **Configuration:** Add a configuration option to allow users to select the appropriate prompt category.
- **Prompt Selection:** Implement logic to automatically select the prompt based on file extensions, code characteristics, or question type.
- **User Interface:** Provide a user-friendly interface for prompt selection and customization.

## Future Considerations

- **Prompt Engineering Techniques:** Experiment with techniques like few-shot learning, chain-of-thought prompting, and prompt chaining.
- **Prompt Optimization:** Optimize prompts for speed, cost, and accuracy.
- **Community Prompts:** Allow users to contribute prompts.
- **Automated Prompt Generation:** Explore automatic prompt creation based on code or assessment needs.
- **Scoring Rubrics:** Develop more detailed scoring rubrics for assessment-focused prompts.
- **Hallucination Mitigation:** Implement strategies to minimize AI hallucinations and ensure accurate results.

## Progress Tracking

| Prompt Category             | Status      | Last Updated | Notes    |
| --------------------------- | ----------- | ------------ | -------- |
| Frontend Main (FE Main)     | In Progress | 2025-05-12   | recreate |
| Frontend Pseudo (FE Pseudo) | In Progress | 2025-05-12   | recreate |
| Backend CMS (BE CMS)        | To Do       |              |          |
| Backend Code (BE Code)      | To Do       |              |          |
| App - Short Answer          | To Do       |              |          |
| App - Programming           | To Do       |              |          |
| True or False               | To Do       |              |          |
| Multiple Choice             | To Do       |              |          |
| Programming                 | To Do       |              |          |
| Library                     | In Progress | 2025-05-12   | recreate |
| Test Programming Skill      | To Do       |              |          |
