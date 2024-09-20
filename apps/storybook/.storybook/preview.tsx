import type { Preview } from '@storybook/react';

import '@tripie-pyotato/design-system/global';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <>
          <div className="background-container">
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
          <div className="layout-wrap">
            <Story />
          </div>
        </>
      );
    },
  ],

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
