import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useTheme } from '@mui/material/styles';

const InfoBox = ({ id, text }) => {
    const theme = useTheme();

    const icons = [
        <KeyboardIcon sx={{ fontSize: '5rem', color: theme.palette.primary.main, mb: '0.5em' }} />,
        <TouchAppIcon sx={{ fontSize: '5rem', color: theme.palette.primary.main, mb: '0.5em' }} />,
        <TravelExploreIcon sx={{ fontSize: '5rem', color: theme.palette.primary.main, mb: '0.5em' }} />
    ]

    return (
        <Grid item xs={12} sm={4}>
            <Card elevation={0}>
                <CardContent sx={{ textAlign: 'center' }}>
                    {icons[id - 1]}
                    <Typography variant='h5' component='p'>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default InfoBox;