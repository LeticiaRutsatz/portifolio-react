import { Box, Typography } from "@mui/material";
import React from "react";



function CardHabilidades({image, texto}){
    return(
        <Box className="cardHabilidades">
            <img src={image} width="70%" height="50%"/>
            <Typography variant="h6" color="#ffff" className="p">{texto}</Typography>
        </Box>
    )
}

export {CardHabilidades};