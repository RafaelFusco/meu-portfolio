import { Container, Grid, lighten, styled } from "@mui/material";
import theme from "../../../../theme";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {

  const StyledAbout = styled("div")(() => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "calc(100vh - 64px)",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down('sm')]: {
      height: "calc(100vh - 56px)",
    },
    [theme.breakpoints.up('md')]: {
      height: "calc(100vh - 64px)",
    },
    [theme.breakpoints.up('lg')]: {
      height: "calc(100vh - 64px)",
    },
  }));

  const StyledTitle = styled("div")(() => ({
    color: "primary.main",
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

  const StyledGridXp = styled("div")(() => ({
    display: "flex",
    gap: "50px",
    [theme.breakpoints.down('sm')]: {
      gap: "0px"
    }
  }));

  const StyledXpTitle = styled("div")(() => ({
    color: theme.palette.primary.main,
    fontSize: "1.1rem",
    textAlign: "center",
    fontWeight: "400",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "1rem",
      fontWeight: "500",
    }
  }));

  const StyledXpSubtitle = styled("div")(() => ({
    color: theme.palette.primary.main,
    fontSize: "0.7rem",
    textAlign: "center",
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      fontSize: "0.8rem",
    }
  }));

  const StyledXpDesc = styled("div")(() => ({
    color: theme.palette.primary.main,
    fontSize: "1rem",
    fontWeight: "450",
    textAlign: "center",
    width: "85%",
    height: "40%",
    flexWrap: "wrap",
    marginTop: "10px",
    overflow: "auto",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
      height: "180px",
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
    color: theme.palette.primary.main,
    fontSize: "1rem",
    textAlign: "center",
    border: `1px solid ${lighten(theme.palette.primary.light, 0.8)}`,
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
      <StyledAbout>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
              <StyledTitle>Sobre mim</StyledTitle>
              <StyledGridXp>
                <Grid item display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
                  <WorkspacePremiumIcon fontSize="small" />
                  <StyledXpTitle>Experiencia</StyledXpTitle>
                  <StyledXpSubtitle>2+ Anos</StyledXpSubtitle>
                  <StyledXpSubtitle>Desenvolvedor Frontend</StyledXpSubtitle>
                </Grid>
                <Grid item display="flex" flexDirection="column" alignItems="center">
                  <SchoolIcon fontSize="small" />
                  <StyledXpTitle>Educação</StyledXpTitle>
                  <StyledXpSubtitle>Cursando Sistemas de Informação</StyledXpSubtitle>
                  <StyledXpSubtitle>7 Cursos de Frontend</StyledXpSubtitle>
                </Grid>
              </StyledGridXp>
              <StyledXpDesc>
                Olá! Sou um desenvolvedor front-end apaixonado pela criação de experiências web. Com uma base sólida em HTML, CSS e JavaScript, estou atualmente descobrindo mais sobre React. Tenho habilidades de comunicação em equipe. Consigo colaborar efetivamente, compartilhar ideias de forma clara e ouvir as contribuições dos outrosEstou buscando meu primeiro estágio na área de desenvolvimento, ansioso para aplicar o que aprendi. Estou comprometido em contribuir com meu melhor esforço para a equipe. Estou confiante de que esta experiência será fundamental para meu desenvolvimento profissional como desenvolvedor front-end.
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