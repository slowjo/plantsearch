import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { plantlist } from '../../data/plantlist';

const SearchField = ({ inputRef }) => {
    const { searchFieldValue, handleSearchFieldValueChange, setSearchTerm } = useContext(AppContext);

    const handleChange = (e, newValue) => {
        setSearchTerm(newValue);
        inputRef.current.querySelector('input').blur();
    };

    const [showButton, setShowButton] = useState(true);

    return (
        <div style={{ flex: 1 }}>
            <Autocomplete
                inputValue={searchFieldValue} 
                onInputChange={handleSearchFieldValueChange}
                onChange={handleChange}
                onFocus={() => {setShowButton(false)}}
                onBlur={() => {setShowButton(true)}}
                id="species-name-search"
                freeSolo
                options={plantlist.map((option) => option)}
                renderInput={(params) => <TextField {...params} label="Species name" 
                ref={inputRef}
                InputProps={{
                    ...params.InputProps,
                    endAdornment:
                    <>
                    {params.InputProps.endAdornment}
                    {showButton && (
                        <InputAdornment position='end'>
                            <Button variant='contained' type='submit' sx={{ borderRadius: '200px', boxShadow: 'none', '&:hover': { boxShadow: 'none' }, '&:focus' : { boxShadow: 'none' } }}>
                                Search
                            </Button>
                        </InputAdornment>
                    )}
                    </>,
                    style: { borderRadius: '200px', paddingLeft: '20px', paddingTop: '5px', paddingRight: '7px', paddingBottom: '5px',
                    '::placeholder': { marginLeft: '50px' } },
                }}
                />}
            />
        </div>
    );
};

export default SearchField;