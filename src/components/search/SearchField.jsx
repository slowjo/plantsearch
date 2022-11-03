import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { plantlist } from '../../data/plantlist';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const SearchField = ({ inputRef }) => {
    const { searchFieldValue, handleSearchFieldValueChange, setSearchTerm } = useContext(AppContext);

    const navigate = useNavigate();

    const handleChange = (e, newValue) => {
        navigate('/searchresults');
        setSearchTerm(newValue);
        inputRef.current.querySelector('input').blur();
    };

    const handleClick = (e) => {
        if (searchFieldValue.trim() === '') return;
        navigate('/searchresults');
        setSearchTerm(searchFieldValue);
        inputRef.current.querySelector('input').blur();
    }

    const [showButton, setShowButton] = useState(true);

    const theme = useTheme();

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
                            <Button variant='contained' onClick={handleClick} type='submit' sx={{ color: 'white', borderRadius: '200px', boxShadow: 'none', '&:hover': { boxShadow: 'none' }, '&:focus' : { boxShadow: 'none' } }}>
                                Search
                            </Button>
                        </InputAdornment>
                    )}
                    </>,
                    style: { borderRadius: '200px', paddingLeft: '20px', paddingTop: '5px', paddingRight: '7px', paddingBottom: '5px', background: theme.palette.background.default,
                    }
                }}
                />}
            />
        </div>
    );
};

export default SearchField;