import { lighten, styled } from "@mui/material";
import React from "react";
import theme from "../../theme";

interface SliderItemProps {
    img: string;
    title: string;
    deploy: string;
    code: string;
    t1?: string;
    t2?: string;
    t3?: string;

}

const SliderItem: React.FC<SliderItemProps> = ({ img, title, deploy, code, t1, t2, t3 }) => {
    const StyledContainer = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "320px",
        height: "300px",
        backgroundColor: theme.palette.primary.contrastText,
        padding: " 5px",
    }));

    const StyledContainer2 = styled("div")(() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
        padding: "10px 0",
    }));

    const StyledImg = styled("img")(({ src }) => ({
        width: "100%",
        height: "100%",
        backgroundImage: `url${src}`,
        backgroundSize: "cover",
    }));
    const StyledContainerButton = styled("div")(() => ({
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "10px",
    }))

    const StyledButton = styled("button")(() => ({
        backgroundColor: lighten(theme.palette.primary.main, 0.3),
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "35%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "0.8rem",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }))

    const StyledTech = styled("div")(() => ({
        display: "flex",
        justifyContent: "initial",
        width: "100%",
        color: theme.palette.primary.main,
        fontSize: "0.8rem",
    }))

    const StyledTitle = styled("h1")(() => ({
        fontSize: "16px",
        color: theme.palette.primary.main,
        width: "100%",
        margin: "5px 0",
    }))

    const handleButtonClick = (string: string) => {
        window.open(string, '_blank');
    };

    return (
        <>
            <StyledContainer>
                <StyledImg src={img} />
                <StyledContainer2>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledTech>Tecnologias: {t1} {t2} {t3}</StyledTech>
                    <StyledContainerButton>
                        <StyledButton onClick={() => handleButtonClick(deploy)}>Acessar Projeto</StyledButton>
                        <StyledButton onClick={() => handleButtonClick(code)}>Repositório</StyledButton>
                    </StyledContainerButton>
                </StyledContainer2>
            </StyledContainer>
        </>
    )
}

export default SliderItem