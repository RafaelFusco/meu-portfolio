import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        height: "64px",
    }))

    const handleScrollToAbout = (id: string) => {
        const aboutSection = document.getElementById(id);
        if (aboutSection) {
            if (id === "projects") {
                window.scrollTo({
                    top: aboutSection.offsetTop,
                    behavior: 'smooth', // Animação de scroll suave
                });
            } if (id === "about") {
                window.scrollTo({
                    top: aboutSection.offsetTop - 64,
                    behavior: 'smooth', // Animação de scroll suave
                });
            } else {
                window.scrollTo({
                    top: aboutSection.offsetTop - 64,
                    behavior: 'smooth', // Animação de scroll suave
                });
            }
        }
    };

    return (
        <>
            <AppBar position="fixed">
                <StyledToolbar>
                    <MenuItem onClick={() => { handleScrollToAbout("start") }}>Inicio</MenuItem>
                    <MenuItem onClick={() => { handleScrollToAbout("about") }}>Sobre</MenuItem>
                    <MenuItem onClick={() => { handleScrollToAbout("projects") }}>Projetos</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar