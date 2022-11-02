import Grid from '@mui/material/Grid';
import SearchResultsItem from './SearchResultsItem';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useQuery } from 'react-query';
import { getPowo } from '../../app/api/my-api';
import Container from '@mui/material/Container';


const SearchResultsList = () => {
    const { handleIndividualClick, searchTerm } = useContext(AppContext);

    const { isLoading, error, data } = useQuery(['searchResults', searchTerm], () => getPowo(searchTerm));

    return (
        <section id="search-results" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Container>
            {!isLoading && !error && data && (
                <h2>{data?.results?.filter((result) => result.rank === 'Species').length || '0'} Results</h2>
            )}
            {isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {error && '...error'}
            {data && (
                <Grid container spacing={2}>
                    {data.results?.map((result) => {
                        if (result.rank === 'Species') {
                            return <SearchResultsItem key={result.fqId} result={result} handleClick={handleIndividualClick} />
                        } else {
                            return null;
                        }
                    })}
                </Grid>
            )}
            </Container>
        </section>        
    );
};

export default SearchResultsList;