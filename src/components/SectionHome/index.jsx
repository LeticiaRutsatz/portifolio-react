import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css"


function SectionHome(){

    const theme = useTheme();

    return(
        <Grid container maxWidth={'100vw'} sx={{display:'flex'}}>
            <Grid item xs={12} md={7} sx={{height: {xs: '80vh', md:'90vh'}, backgroundColor:'#290743'}}>
                <Typography variant="h6" component="h6" color={theme.palette.primary.main} sx={{paddingTop: {xs: '12rem' , sm: '12rem'}}} className='p'>
                    Olá, meu nome é
                </Typography>

                <Typography variant="h3" component="h3" color={theme.letter.primary.main} className='title' sx={{fontSize:{xs:'3rem', md:'3rem'}}}>
                    Letícia Rutsatz
                </Typography>

                <Typography variant="h5" component="h5" color={theme.letter.primary.main} className='title' id='animation-h5' 
                    sx={{
                        fontSize:{xs:'2rem', sm:'2rem', md:'3rem'}
                    }}>
                    Desenvolvedora Front End
                </Typography>

                <Typography variant="h6" component="h6" color={theme.palette.primary.main} className='p'>
                    Estudante de Desenvolvimento Full Stack na Growdev
                </Typography>


                <Button variant="contained" href="" className="button-home" id="projetos">
                    Projetos
                </Button>

                <Button variant="outlined" href="" className="button-home" id="curriculo">
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

export {SectionHome};