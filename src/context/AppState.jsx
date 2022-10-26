import { useState } from 'react';
import AppContext from "./AppContext";

const AppState = ({ children }) => {
    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [pickedPlantId, setPickedPlantId] = useState(null);
    const [pickedPlantImages, setPickedPlantImages] = useState([]);

    const handleSearchFieldValueChange = (e, newValue) => {
        setSearchFieldValue(newValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchFieldValue);
    };

    const handleIndividualClick = (id, images) => {
        setPickedPlantId(id);
        setPickedPlantImages(images);
    };

    return (
        <AppContext.Provider value={{
            searchFieldValue,
            searchTerm,
            pickedPlantId,
            pickedPlantImages,
            handleSearchFieldValueChange,
            handleSubmit,
            handleIndividualClick,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppState;