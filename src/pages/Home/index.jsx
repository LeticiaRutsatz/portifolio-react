import React from "react";
import GlobalStyle from "../../config/GlobalStyle/global"
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { theme } from "../../config/Theme";
import { MyNavBar } from "../../components/NavBar";
import { SectionHome } from "../../components/SectionHome";
import { About } from "../../components/About";
import { Habilidades } from "../../components/Habilidades";
import { Projetos } from "../../components/Projetos";

function Home(){

    return(
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MyNavBar />
                <SectionHome />
                <About />
                <Habilidades />
                <Projetos />
            </ThemeProvider>
        </>
    )
}

export {Home};