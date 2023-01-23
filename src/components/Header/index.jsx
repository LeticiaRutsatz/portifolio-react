import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css";


function Header(){

    const theme = useTheme();

    return(
        <Grid container maxWidth={'100vw'} sx={{display:'flex'}}>
            <Grid item xs={12} md={7} sx={{
                    height: {xs: '80vh', md:'90vh'}, 
                    backgroundColor:'#290743'
                    }}>

                <Typography 
                variant="h6" 
                component="h6" 
                color={theme.palette.primary.main} 
                className='p' 
                id="Header"
                sx={{
                    paddingTop: {xs: '12rem' , sm: '12rem'}
                }}>
                    Olá, meu nome é
                </Typography>

                <Typography variant="h3" component="h3" 
                    color={theme.letter.primary.main} 
                    className='title' 
                    sx={{fontSize:{xs:'3rem', md:'3rem'}}}>
                    Letícia Rutsatz
                </Typography>

                <Typography variant="h5" component="h5" 
                    color={theme.letter.primary.main} 
                    className='title' 
                    sx={{
                        fontSize:{xs:'2rem', sm:'2rem', md:'3rem'},
                    }}>
                    Desenvolvedora Front End
                </Typography>

                <Typography 
                variant="h6" 
                component="h6" 
                color={theme.palette.primary.main} 
                className='p'>
                    Estudante de Desenvolvimento Full Stack na Growdev
                </Typography>


                <Button 
                variant="contained" 
                className="button-home" 
                id="projetos" 
                sx={{marginLeft:'3rem'}}>
                    <a href="#projetosCard">Projetos</a>
                </Button>

                <Button 
                variant="outlined" 
                target="_blank"
                href="https://drive.google.com/uc?export=download&id=1HELaFc0fHmRT86PTcl15FARdeclYQGDc" 
                className="button-home" 
                id="curriculo">
                    Download CV
                </Button>
            </Grid>   


            <Grid item xs={0} md={5} sx={{
                height: {md:'90vh'}, 
                backgroundColor:'#290743',  
                display:{xs: 'none', md:'flex'}, 
                justifyContent:'center', 
                alignItems:'center', 
                paddingTop:'8rem'
                }}>
                <Box className="image-tag"></Box>
            </Grid>  
        </Grid>


    )
}

export {Header};