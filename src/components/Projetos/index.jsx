import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css"
import Cardprojetos  from "../Card/projetos";



function Projetos(){

    const theme = useTheme();

    return(
            <Box sx={{
                paddingTop:'4rem',
                paddingBottom:'4rem',
                height: {xs: '100%', sm:'100%'},
                backgroundImage: 'url(./Assets/images/habilidades-background.jpg)',
            }}>
                <Typography 
                variant="h4" 
                component="h4" 
                color={theme.letter.primary.main} 
                className='title' 
                id="Projetos">
                    Projetos
                </Typography>

                <Grid container sx={{display:'flex', justifyContent: 'center'}}>

                    <Grid item xs={12} sm={6} md={4} className='gridCards'>
                        <Cardprojetos 
                            imagem={"/Assets/images/projetos/sistema-recados.png"} 
                            alt={'Projeto de sistema de recados'}  
                            title={'Sistema de Recados'} 
                            description={'Typescript, React, Redux Toolkit, MUI'}
                            hrefGit={'https://github.com/LeticiaRutsatz/projeto-login-signup'}
                            hrefDep={'https://projeto-recados-react.vercel.app/'}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='gridCards'>
                        <Cardprojetos
                            imagem={"/Assets/images/projetos/api-starwars.jpg"} 
                            alt={'API Star Wars'}  
                            title={'API Star Wars'} 
                            description={'Typescript, React, Redux Toolkit, Node'}
                            hrefGit={'https://github.com/LeticiaRutsatz/starwars-api'}
                            hrefDep={'https://starwars-api-three-orpin.vercel.app/'}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='gridCards'>
                        <Cardprojetos
                            imagem={"/Assets/images/projetos/recados-js.jpg"} 
                            alt={'Projeto de sistema de recados JS'}  
                            title={'Sistema de Recados em JS'} 
                            description={'HTML, CSS, Javascript, Bootstrap'}
                            hrefGit={'https://github.com/LeticiaRutsatz/sistema-recados'}
                            hrefDep={'https://leticiarutsatz.github.io/sistema-recados/'}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='gridCards' sx={{marginTop:{md:'4rem'}}}>
                        <Cardprojetos
                            imagem={"/Assets/images/projetos/batman.jpg"} 
                            alt={'Animação do Batman'}  
                            title={'Animação do Batman'} 
                            description={'HTML, CSS'}
                            hrefGit={'https://github.com/LeticiaRutsatz/batman-animation'}
                            hrefDep={'https://leticiarutsatz.github.io/batman-animation/'}
                            />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='gridCards' sx={{marginTop:{md:'4rem'}}}>
                        <Cardprojetos
                            imagem={"/Assets/images/projetos/conversor-de-moedas.jpg"} 
                            alt={'Conversor de Moedas Alura'}  
                            title={'Conversor de Moedas'} 
                            description={'HTML, CSS, Javascript'}
                            hrefGit={'https://github.com/LeticiaRutsatz/Conversor-de-Moedas'}
                            hrefDep={'https://leticiarutsatz.github.io/Conversor-de-Moedas/'}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='gridCards' sx={{marginTop:{md:'4rem'}}}>
                        <Cardprojetos
                            imagem={"/Assets/images/projetos/nikel.jpg"} 
                            alt={'Nikel'}  
                            title={'Nikel'} 
                            description={'HTML, CSS, Javascript, Bootstrap'}
                            hrefGit={'https://github.com/LeticiaRutsatz/Nikel-Financas'}
                            hrefDep={'https://leticiarutsatz.github.io/Nikel-Financas/'}/>
                    </Grid>
                </Grid>
            </Box>
    )
}

export {Projetos};