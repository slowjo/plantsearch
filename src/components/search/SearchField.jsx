import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { plantlist } from '../../data/plantlist';

const SearchField = () => {
    const { searchFieldValue, handleSearchFieldValueChange } = useContext(AppContext);

    return (
        <div style={{ flex: 1 }}>
            <Autocomplete
                inputValue={searchFieldValue} 
                onInputChange={handleSearchFieldValueChange}
                id="species-name-search"
                freeSolo
                options={plantlist.map((option) => option)}
                renderInput={(params) => <TextField {...params} label="Species name" InputProps={{
                    ...params.InputProps,
                    endAdornment:
                    <>
                    {params.InputProps.endAdornment}
                    <InputAdornment position='end'>
                    	<Button variant='contained' type='submit' sx={{ borderRadius: '200px', boxShadow: 'none' }}>
                            Search
                        </Button>
                    </InputAdornment>
                    </>,
                    style: { borderRadius: '200px', paddingLeft: '20px' } 
                }}
                />}
            />
        </div>
    );
};

export default SearchField;