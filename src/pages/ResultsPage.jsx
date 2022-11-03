import { useRef } from 'react';
import SearchResultsList from "../components/searchresults/SearchResultsList";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import SearchField from "../components/search/SearchField";

const ResultsPage = () => {
    const theme = useTheme();

    const inputRef = useRef();

    return (
        <div>
            <Box sx={{ width: '100%', background: theme.palette.primary.light, py: '1em' }}>
                <Container>
                    <SearchField inputRef={inputRef} />
                </Container>
            </Box>
            <SearchResultsList />
        </div>
    );
};

export default ResultsPage;