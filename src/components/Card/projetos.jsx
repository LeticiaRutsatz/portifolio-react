import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button} from '@mui/material';
import "../../config/style.css"


export default function Cardprojetos({imagem, alt, title, description, hrefGit, hrefDep}) {
  
  return (
    <Card className='cardprojetos'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagem}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>

          <Button 
          variant="outlined" 
          target="_blank" 
          href={hrefGit} 
          className="button-home" 
          id="projetos">
            Code GitHub
          </Button>

          <Button 
          variant="outlined" 
          target="_blank" 
          href={hrefDep} 
          className="button-home" 
          id="curriculo">
            Deploy
          </Button>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}