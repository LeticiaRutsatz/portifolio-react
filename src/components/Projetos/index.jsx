import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css"
import { Cardprojetos } from "../Card/projetos";



function Projetos(){

    const theme = useTheme();

    return(
            <Box sx={{
                paddingTop:'4rem',
                paddingBottom:'4rem',
                height: {xs: '100%', sm:'100%'},
                backgroundImage: 'url(./Assets/images/habilidades-background.jpg)'
            }}>
                <Typography variant="h4" component="h4" color={theme.letter.primary.main} className='title' id="projetosCard">
                    Projetos de Estudos
                </Typography>

                <Grid container>
                    <Grid item xs={6} md={4}>
                        <Cardprojetos url={'url(./Assets/images/habilidades-background.jpg)'} alt={'projeto'} titulo={'Nikel'} tecnologias={'teste'}/>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Cardprojetos/>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Cardprojetos/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Cardprojetos/>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Cardprojetos/>
                    </Grid>
                </Grid>
            </Box>
    )
}

export {Projetos};