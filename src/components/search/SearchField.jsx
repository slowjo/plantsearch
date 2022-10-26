import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
                renderInput={(params) => <TextField {...params} label="Species name"
                />}
            />
        </div>
    );
};

export default SearchField;