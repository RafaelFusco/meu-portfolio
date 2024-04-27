import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyleButton";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "50px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
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
                                    <StyledButton onClick={() => console.log("download")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("contatado")}>
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