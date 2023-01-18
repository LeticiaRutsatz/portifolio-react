import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css"



function About(){

    const theme = useTheme();

    return(
            <Box sx={{
                display: "block",
                alignItems: "start",
                justifyContent: "start",
                width: "100%",
                paddingTop:'4rem',
                paddingBottom:'4rem',
                height: {xs: '100%', sm:'100%'},
                background: theme.palette.secondary.main,
            }}>
                <Typography variant="h4" component="h4" color={theme.letter.primary.main} className='title' id="About">
                    Sobre mim
                </Typography>

                <Typography variant="h6" component="h6" color={theme.letter.primary.main} className='p' sx={{fontSize:'1.2rem', paddingTop:'2rem'}}>
                    Me chamo Letícia, tenho 19 anos e no ano de 2022 iniciei no ramo da Tecnologia. <br />
                    Comecei meus estudos através de cursos livres na internet como Lógica de Programação. <br />
                    Em Julho de 2022 ingressei no Programa Starter Full Stack Developer GrowDev, <br />
                    e em Janeiro de 2023 na Graduação em Sistemas de Informação. <br />
                    Me considero uma pessoa proativa, persistente, dedicada e que gosta de desafios. <br />
                </Typography>
            </Box>
            


    )
}

export {About};