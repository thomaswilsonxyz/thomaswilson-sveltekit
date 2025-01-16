import { writable } from 'svelte/store';

type ColourSchemeName = 'light' | 'dark';

interface ColourScheme {
    name: ColourSchemeName;
    background: string;
    backgroundAccent: string;
    text: string;
    textAccent: string;
}

export const lightColourScheme: ColourScheme = {
    name: 'light',
    background: 'white',
    backgroundAccent: '#f8f9fa',
    text: '#212529',
    textAccent: '#495057',
};

export const darkColourScheme: ColourScheme = {
    name: 'dark',
    background: '#212529',
    backgroundAccent: '#343a40',
    text: '#f8f9fa',
    textAccent: '#ced4da',
};

export const colourSchemes: Record<ColourSchemeName, ColourScheme> = {
    light: lightColourScheme,
    dark: darkColourScheme,
};

export const colourSchemeStore = writable<ColourScheme>(lightColourScheme);
