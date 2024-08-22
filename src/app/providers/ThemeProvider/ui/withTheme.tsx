import React from 'react';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  return () => {
    // const { theme: defaultTheme } = ...;
    return (
      <ThemeProvider
        // initialTheme={defaultTheme}
      >
        <Component />
      </ThemeProvider>
    );
  };
};
