import { useContext } from 'react';
import AppContext from '../context/AppContext';
import SearchField from '../components/search/SearchField';
import SearchResultsList from '../components/searchresults/SearchResultsList';
// import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const SearchPage = () => {
    const { handleSubmit } = useContext(AppContext);

    return (
        <section>
            <Typography variant='h1' component='h1' sx={{ textAlign: 'center', mt: '0.5em', lineHeight: 1.7 }}>InfoPlant</Typography>
            <Typography variant='h4' component='h2' sx={{ textAlign: 'center', mb: '1em' }} color="text.secondary">Search a plant!</Typography>
            <form onSubmit={handleSubmit}>
                <div style={{ position: 'relative' }}>
                {/* <div style={{ display: 'flex', width: '100%' }}> */}
                    <SearchField />
                    {/* <Button type={'submit'} variant='contained'>Search</Button> */}
                    {/* <IconButton sx={{ position: 'absolute', top: 0, right: '2rem', height: '100%' }} type={'submit'} aria-label='start search'><SearchIcon /></IconButton> */}
                </div>
            </form>
            <SearchResultsList />
        </section>
    );
};

export default SearchPage;