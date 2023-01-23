import React from "react";
import GlobalStyle from "../../config/GlobalStyle/global"
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { theme } from "../../config/Theme";
import { MyNavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Habilidades } from "../../components/Habilidades";
import { Projetos } from "../../components/Projetos";
import { Footer } from "../../components/Footer";

function Home(){

    return(
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MyNavBar />
                <Header />
                <About />
                <Habilidades />
                <Projetos />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export {Home};