import { styled } from "@mui/material";
import theme from "../../../../theme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    const StyledFooter = styled("div")(() => ({
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: theme.palette.primary.contrastText,
        height: "50px",
        padding: "10px",
    }));

    const StyledLinks = styled("a")(() => ({
        color: "inherit"
    }));

    const StyledGridIcons = styled("div")(() => ({
        display: "flex",
        justifyContent: "space-around",
        width: "40%",
        height: "min-content",
    }));

    return (
        <>
            <StyledFooter>
                <StyledGridIcons>
                <StyledLinks href="https://www.linkedin.com/in/rafael-fusco-594a30224/" target="_blank"><LinkedInIcon /></StyledLinks>
                <StyledLinks href="https://github.com/RafaelFusco" target="_blank"><GitHubIcon /></StyledLinks>
                <StyledLinks href="mailto:rafaelfusco2000@gmail.com?subject=Contato%20do%20Portf%C3%B3lio" target="_blank"><EmailIcon /></StyledLinks>
                </StyledGridIcons>
            </StyledFooter>
        </>
    )
}

export default Footer