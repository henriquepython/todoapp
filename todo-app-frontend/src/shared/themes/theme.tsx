import React from 'react';
import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = '#2567B4';
const secondary = '#F9B531';
const theme = {
    fontSizes,
    colors: {
        primary,
        secondary,
    }

};

export type ThemeType = typeof theme

interface provider {
  children: React.ReactNode;
}

export const Theme = ( props: provider ) => {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}> {children} </ThemeProvider>
    );
};
