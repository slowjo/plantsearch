import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import GrassIcon from '@mui/icons-material/Grass';

const MyAppBar = () => {
    const theme = useTheme();

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} sx={{ backgroundColor: theme.palette.background.default }}>
          <Toolbar sx={{ backgroundColor: theme.palette.background.default }}>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Link to='/' style={{ flexGrow: 1, color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <GrassIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.main }}>
                InfoPlant
              </Typography>
            </Link>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default MyAppBar;