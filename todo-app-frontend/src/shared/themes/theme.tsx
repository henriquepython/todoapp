import React from 'react';
import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

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

interface IProvider {
  children: React.ReactNode;
}

export const Theme = ( props: IProvider ) => {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}> {children} </ThemeProvider>
    );
};
