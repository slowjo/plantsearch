import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SearchResultsItem = ({ result, handleClick }) => {
    const imageUrl = result.images ? result.images[0].thumbnail : '';

    return (
        <Grid item xs={12} sm={6} md={4} onClick={() => handleClick(result.fqId, result.images)} sx={{ cursor: 'pointer' }}>
            <Link to={`/species/${result.fqId}`} style={{ textDecoration: 'none', }}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageUrl}
                        alt={result.name}
                        sx={{ background: 'lightgreen', color: 'white' }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {result.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Family: {result.family}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Author: {result.author}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </Grid>
    );
};

export default SearchResultsItem;