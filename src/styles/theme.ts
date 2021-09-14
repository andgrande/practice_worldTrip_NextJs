import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    gray: {
        50: "#F5F8FA",
        100: "#e8ebed",
        200: "#cccecf",
        300: '#DADADA',
        400: '#919191',
        500: "#b0b0b0",
        600: "#8a8a8a",
        700: "#696969",
        800: "#525252",
        900: "#383838",
    },
    orange: {
        500: "#f5cc64",
        900: "#FFBA08",
    },
    blue: {
        900: "#00162d",
    }
};

const breakpoints = createBreakpoints({
  sm: "768px",
  md: "1000px",
  lg: "1440px",
  xl: "1920px",
})

export const theme = extendTheme({
    colors,
    breakpoints,
    fonts: {
        body: 'Poppins',
        heading: 'Poppins',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('gray.50', 'blue.900')(props),
                color: mode('gray.900', 'gray.50')(props),
                // bg: props.colorMode === 'dark' ? 'gray.900' : 'white';
                // color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900';
            }
        })
    },
    config,
});