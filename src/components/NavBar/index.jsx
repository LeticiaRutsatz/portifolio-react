import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import "../../config/style.css"

 
const navItems = ['Home', 'Sobre', 'Projetos', 'Contato'];
 
function MyNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 
  const drawer = (
    <Box sx={{ textAlign: 'center', marginTop: '1rem'}}>
      <List sx={{
        '& .MuiListItemButton-root:hover': {
        bgcolor: '#3c0a62'
      },
  }}>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center', padding:'1.7rem'}} >
              <ListItemText primary={item} className='list-Item'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton aria-label="delete" onClick={handleDrawerToggle}>
        <ClearIcon sx={{color:'#ffff'}}/>
      </IconButton>
    </Box>
  );
 
  const container = window !== undefined ? () => window().document.body : undefined;
 
  return (
    <Box sx={{ display: 'flex', width:'100vw' }}>
      <AppBar component="nav" position='fixed' color='secondary' sx={{boxShadow: 'none'}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block', fontFamily: 'Baumans', marginLeft:'2rem',marginTop:{xs:'2rem'}, fontWeight: 'bold'}}
          >
            L
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: {md: 'none' }, justifyContent: 'end', alignItems: 'end', marginTop: '2rem' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' }}}>
            {navItems.map((item) => (
              <Button key={item} className='list-Item' sx={{textTransform:'none', marginLeft: '2rem'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor='top'
          hideBackdrop='true'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {width: '100vw', backgroundColor: '#290743', height:'100vh', marginTop:'5rem', boxShadow: 'none'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
 
export {MyNavBar};
