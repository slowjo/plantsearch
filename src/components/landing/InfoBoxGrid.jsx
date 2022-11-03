import Grid from '@mui/material/Grid';
import InfoBox from './InfoBox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { infoBoxData } from '../../data/infoBoxData';

const InfoBoxGrid = () => {
    const infos = [1, 2, 3];

    const theme = useTheme();

    return (
        <Container>
            <Typography variant='h4' component='h2' sx={{ textAlign: 'center', my: '1em', color: theme.palette.primary.dark }}>
        	    This is how it works:
            </Typography>
            <Grid container spacing={5}>
                {infoBoxData.map((info) => (
                    <InfoBox key={info.id} id={info.id} text={info.text} />
                ))}
            </Grid>
        </Container>
    );
};

export default InfoBoxGrid;