import { useContext, useRef } from 'react';
import AppContext from '../context/AppContext';
import SearchField from '../components/search/SearchField';
// import SearchResultsList from '../components/searchresults/SearchResultsList';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import plantImage from './plant1.jpg';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const { handleSubmit } = useContext(AppContext);

    const inputRef = useRef();

    const navigate = useNavigate();

    const handleSubmitAndBlur = (e) => {
        console.log('submit');
        navigate('/searchresults');
        handleSubmit(e);
        // inputRef.current.firstChild.blur();
        inputRef.current.querySelector('input').blur();
    };

    // const theme = useTheme();

    return (
        <>
        <section className='plantbackground' 
            style={{ 
                paddingBottom: '1em',
                display: 'grid',
                gridTemplateRows: 'auto auto',
                gridTemplateColumn: '1fr',
                position: 'relative',
            }}
        >
            <Box sx={{ gridRow: '1 / 2', gridColumn: '1', maxHeight: '75vh', overflow: 'hidden', marginTop: { xs: '7em', sm: '0px' } }}>
                <img src={plantImage} alt="a green leafy plant" />
            </Box>
            <Container sx={{ paddingTop: { xs: '0px', md: '3em' }}} style={{ gridRow: '1', gridColumn: '1', zIndex: 10 }}>
                <Typography variant='h1' component='h1' sx={{ textAlign: 'center', lineHeight: 1.7, fontSize: 'calc(5vw + 3rem)', color: 'white' }}>InfoPlant</Typography>
                <Typography variant='h4' component='h2' sx={{ textAlign: 'center', mb: '1em', color: 'white' }} color="text.secondary">Search a plant!</Typography>
                <form onSubmit={handleSubmitAndBlur}>
                    <div style={{ position: 'relative' }}>
                    {/* <div style={{ display: 'flex', width: '100%' }}> */}
                        <SearchField inputRef={inputRef} />
                        {/* <Button type={'submit'} variant='contained'>Search</Button> */}
                        {/* <IconButton sx={{ position: 'absolute', top: 0, right: '2rem', height: '100%' }} type={'submit'} aria-label='start search'><SearchIcon /></IconButton> */}
                    </div>
                </form>
            </Container>
        </section>
        {/* <SearchResultsList /> */}
        </>
    );
};

export default SearchPage;