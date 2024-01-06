# Code Highlighter React

## Overview

This is a React code highlighter package designed to make it easy to implement code highlighting in your React applications. 
The package is written in TypeScript and utilizes Styled Components for flexible and customizable styling.
The core highlighting is based on the [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter "Visit react-syntax-highlighter on GitHub") package.


## Features

- **Switch themes**: Switch between a dark and a light theme.
- **Highlight lines**: Highlight specific lines (added, removed, marked).
- **Formatting specific languages**: Formats the following languages with prettier:
  - JSX
  - TSX
  - TypeScript 
  - JavaScript 
  - CSs
  - HTML
  - Markdown 
  - Yaml
  - Graph QL
- **Copy code**: Copy the code with a dedicated button.

## Installation

```bash
npm install code-highlighter-react
```

## Usage
### Basic example

```tsx
import React from 'react';
import { CodeHighlighter, CodeHighlighterTheme } from 'code-highlighter-react';

const code = `const greeting = 'Hello, World!';`;

const MyComponent = () => {
  return (
      <CodeHighlighter
          code={code}
          language="tsx"
          shouldShowLineNumbers
          theme={CodeHighlighterTheme.Dark} 
      />
  );
};

export default MyComponent;
```

### Highlighted lines

```tsx
import React from 'react';
import { CodeHighlighter, CodeHighlighterTheme } from 'code-highlighter-react';

const code = `const greeting = 'Hello, World!';`;

const highlightedLines = {
    added: [2,3,4],
    removed: [5,6],
    marked: [10]
}

const MyComponent = () => {
  return (
      <CodeHighlighter
          code={code}
          highlightedLines={highlightedLines}
          language="tsx"
          shouldShowLineNumbers
          theme={CodeHighlighterTheme.Dark} 
      />
  );
};

export default MyComponent;
```

### Props

| Prop                    | Type                      | Description                                                 | Default Value               |
|-------------------------|---------------------------|-------------------------------------------------------------|-----------------------------|
| `code`                  | `string`                  | The code that should be displayed.                          | -                           |
| `copyButtonText`        | `string`                  | Text displayed after the copy button.                       | -                           |
| `highlightedLines`      | `HighlightedLines`        | The lines of code that should be highlighted.               | -                           |
| `language`              | `CodeHighlighterLanguage` | The language of the displayed code.                         | -                           |
| `shouldFormatCode`          | `boolean`                 | Whether the Code should be formatted.                | false                       | 
| `shouldShowLineNumbers` | `boolean`                 | Whether the line numbers should be displayed.               | `false`                     |
| `theme`                 | `CodeHighlighterTheme`    | The theme of the code block. Decide between dark and light. | `CodeHighlighterTheme.Dark` |
