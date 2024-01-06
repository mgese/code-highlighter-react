import { Meta, StoryFn } from '@storybook/react';
import CodeHighlighter from '../src/components/code-highlighter/CodeHighlighter';
import React from 'react';

export default {
    title: 'CodeHighlighter',
    component: CodeHighlighter,
    args: {
        shouldShowLineNumbers: true,
        language: 'tsx',
    },
} as Meta<typeof CodeHighlighter>;

const Template: StoryFn<typeof CodeHighlighter> = ({ ...args }) => <CodeHighlighter {...args} />;

export const General = Template.bind({});

export const HighlightedLines = Template.bind({});

General.args = {
    code: `import React, { useState } from 'react';

const ExampleComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;`,
};

HighlightedLines.args = {
    highlightedLines: {
        added: [18],
        removed: [14],
        marked: [3],
    },
    code: `import React, { useState } from 'react';

const ExampleComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  
  console.log("Counter: ", counter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;`,
};
