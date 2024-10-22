import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        primary: {
            main: '#A0AEC0',
            orange: '#FF7500',
            orangeLight: '#FFF9EC',
        }
    },
    fonts: {
        heading: 'var(--fonts-poppins)',
        body: 'var(--fonts-poppins)'
    },
});
