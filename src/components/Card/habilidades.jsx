import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

function CardHabilidades({ image, texto }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Box
            id="cardHabilidades"
            className={`displayColumn ${isHovered ? 'hovered' : ''}`}
            sx={{
                width: { xs: '9rem', md: '10rem' },
                height: { xs: '9rem', md: '12rem' },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} width="70%" height="50%" alt="Imagem" />
            <Typography variant="h6" color="#ffff" className="p">
                {texto}
            </Typography>
        </Box>
    );
}

export default CardHabilidades;
