import React from "react";
import {Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import "../../config/style.css"
import {ButtonsFooter} from './buttons'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer(){

    const theme = useTheme();

    return(
        <Grid container sx={{
            width: "100%",
            paddingTop:'3rem',
            paddingBottom:'4rem',
            background: theme.palette.secondary.main
        }}>
            <Grid item xs={12}>
                <Typography 
                variant="h4" 
                component="h4" 
                color={theme.letter.primary.main} 
                className='title' 
                id="Contatos">
                    Contatos
                </Typography>
            </Grid>

            <Grid item xs={6} md={2.5}>
                <ButtonsFooter icon={<WhatsAppIcon/>} 
                    url={"https://wa.me/5551998897624"} 
                    title={"WhatsApp"} 
                    content={"(51) 998897624"}/>
            </Grid>

            <Grid item xs={6} md={2.5}>
                <ButtonsFooter icon={<EmailIcon/>} 
                    url={"mailto:leticiarutsatz099@gmail.com"} 
                    title={"E-mail"} 
                    content={"leticiarutsatz099@gmail.com"}/>
            </Grid>

            <Grid item xs={6} md={2.5}>
                <ButtonsFooter icon={<LinkedInIcon/>} 
                    url={"https://www.linkedin.com/in/leticia-rutsatz-21ab801b1/"} 
                    title={"LinkedIn"} 
                    content={"Leticia Rutsatz"}/>
            </Grid>

            <Grid item xs={6} md={2.5}>
                <ButtonsFooter icon={<GitHubIcon/>} 
                    url={"https://github.com/LeticiaRutsatz"} 
                    title={"GitHub"} 
                    content={"LeticiaRutsatz"}/>
            </Grid>
        </Grid>
    )
}

export {Footer};