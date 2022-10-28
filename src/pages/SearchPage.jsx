import { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';
import SearchField from '../components/search/SearchField';
import SearchResultsList from '../components/searchresults/SearchResultsList';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const SearchPage = () => {
    const { handleSubmit } = useContext(AppContext);

    const inputRef = useRef();

    const handleSubmitAndBlur = (e) => {
        handleSubmit(e);
        // inputRef.current.firstChild.blur();
        inputRef.current.querySelector('input').blur();
    };

    return (
        <section>
            <Typography variant='h1' component='h1' sx={{ textAlign: 'center', mt: '0.5em', lineHeight: 1.7, fontSize: 'calc(5vw + 3rem)' }}>InfoPlant</Typography>
            <Typography variant='h4' component='h2' sx={{ textAlign: 'center', mb: '1em' }} color="text.secondary">Search a plant!</Typography>
            <form onSubmit={handleSubmitAndBlur}>
                <div style={{ position: 'relative' }}>
                {/* <div style={{ display: 'flex', width: '100%' }}> */}
                    <SearchField inputRef={inputRef} />
                    {/* <Button type={'submit'} variant='contained'>Search</Button> */}
                    {/* <IconButton sx={{ position: 'absolute', top: 0, right: '2rem', height: '100%' }} type={'submit'} aria-label='start search'><SearchIcon /></IconButton> */}
                </div>
            </form>
            <SearchResultsList />
        </section>
    );
};

export default SearchPage;