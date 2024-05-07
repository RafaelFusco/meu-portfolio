import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyleButton";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "transparent",
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero id="start">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} display="flex" justifyContent="center">
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={7} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Rafael Machado</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Desenvolvedor Front-end </Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} width="80%" marginTop={0.5}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => window.open("https://drive.google.com/file/d/1UeZRzVuHAGXRX0VsMOtTdMDE6yQHmT8J/view?usp=drive_link", "_blank", "noopener")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Meu Currículo
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => window.open("mailto:rafaelfusco2000@gmail.com?subject=Contato%20do%20Portf%C3%B3lio", '_blank', "noopener" )}>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contate-me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>

            </StyledHero >
        </>
    )
}

export default Hero