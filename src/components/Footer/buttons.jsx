import { Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import React from "react";

function ButtonsFooter({icon, url, title, content}){
    const theme = useTheme();

    return(
        <Box sx={{marginTop:'3rem'}} className="displayColumn">
            <Button 
            target="_blank" 
            href={url} 
            color="inherit" 
            className="buttons-Footer">
                {icon}
            </Button>
            <Typography 
            color={theme.letter.primary.main} sx={{
                    fontSize:{xs:'15px', sm:'20px'}, 
                    fontWeight:'600', 
                    paddingTop:'1rem'
                }}>
                {title}
            </Typography>
            <Typography
            color={theme.letter.primary.main} sx={{
                    fontSize:{xs:'10px', sm:'15px'}
                }}>
                {content}
            </Typography>
        </Box>
    )
}

export {ButtonsFooter}