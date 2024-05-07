import { Container, Grid, darken, lighten, styled } from "@mui/material";
import theme from "../../../../theme";

const About = () => {

  const StyledAbout = styled("div")(() => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",
  }));

  const StyledTitle = styled("div")(() => ({
    color: darken(theme.palette.primary.main, 0.2),
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "400",
    margin: "10px 0",
    [theme.breakpoints.down('sm')]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "2.7rem",
    }
  }));

  const StyledXpDesc = styled("div")(() => ({
    color:  darken(theme.palette.primary.main, 0.4),
    fontSize: "1rem",
    fontWeight: "450",
    textAlign: "center",
    width: "60%",
    height: "100%",
    flexWrap: "wrap",
    marginTop: "10px",
    overflow: "auto",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
      height: "300px",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: "100px",
    }
  }));

  const StyledGridSkills = styled(Grid)(() => ({
    display: "flex",
    justifyContent: "center",
    width: "70%",
    flexWrap: "wrap",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: "80%",
    }
  }));

  const StyledSkills = styled("div")(() => ({
    color: darken(theme.palette.primary.main, 0.4),
    fontSize: "1rem",
    textAlign: "center",
    borderBottom: `1px solid ${lighten(theme.palette.primary.light, 0.7)}`,
    width: "110px",
    height: "max-content",
    margin: "5px 15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "0.9rem",
      width: "75px",
    }
  }));

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth="lg">
          <Grid container display="flex">
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
              <StyledTitle>Sobre mim</StyledTitle>
              <StyledXpDesc>
                Olá! Sou um desenvolvedor front-end com uma base sólida em HTML, CSS e JavaScript.<br /> Atualmente, estou me aprofundando em React.<br /> Possuo habilidades de comunicação em equipe, consigo colaborar efetivamente, compartilhar ideias de forma clara e ouvir as contribuições dos outros.<br /> Estou em busca do meu primeiro estágio na área de desenvolvimento, ansioso para aplicar o que aprendi e dedicado a contribuir com meu melhor esforço para a equipe. <br /> Estou dedicado a contribuir com meu melhor esforço para a equipe e estou confiante de que essa experiência será fundamental para o meu desenvolvimento profissional como desenvolvedor front-end.
              </StyledXpDesc>
            </Grid>
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
              <StyledTitle>Habilidades</StyledTitle>
              <StyledGridSkills>
                <StyledSkills>Javascript</StyledSkills>
                <StyledSkills>Typescript</StyledSkills>
                <StyledSkills>React</StyledSkills>
                <StyledSkills>Git</StyledSkills>
                <StyledSkills>Html</StyledSkills>
                <StyledSkills>Css</StyledSkills>
                <StyledSkills>Sass</StyledSkills>
                <StyledSkills>Material UI</StyledSkills>
                <StyledSkills>Tailwind</StyledSkills>
              </StyledGridSkills>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  )
}

export default About