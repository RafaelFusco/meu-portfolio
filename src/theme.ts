import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: "#2980b9",
        },
        secondary: {
            main: "#2980b9",
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