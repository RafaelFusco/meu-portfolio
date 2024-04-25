import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import theme from "../../theme"
import { Style } from "@mui/icons-material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)((theme) => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Habilidades</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar