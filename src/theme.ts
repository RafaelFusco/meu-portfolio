import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#232323",
        },
        secondary: {
            main: "#4f8e3e",
        },
    },
    typography: {
        fontFamily: "Segoe UI",
        h2: {
            fontSize: '3.5rem', // Tamanho padrão para telas maiores
            '@media (max-width:600px)': {
                fontSize: '1.5rem', // Tamanho para telas menores
            },
        }
    }

});



theme = responsiveFontSizes(theme);

export default theme;