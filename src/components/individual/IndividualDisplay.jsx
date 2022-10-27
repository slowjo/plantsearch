import { useState, useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useQuery } from 'react-query';
import { getPowoIndividual } from '../../app/api/my-api';
import ReactLeafletMap from '../map/ReactLeafletMap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

const IndividualDisplay = () => {
    const { pickedPlantId, pickedPlantImages } = useContext(AppContext);

    // const { isLoading, error, data } = useQuery(['individualRecord', pickedPlantId], () => getPowoIndividual(pickedPlantId));
    const { data } = useQuery(['individualRecord', pickedPlantId], () => getPowoIndividual(pickedPlantId));

    const [countries, setCountries] = useState([]);
    const [countryNames, setCountryNames] = useState([]);

    console.log(data);

    useEffect(() => {
        if (data) {
            const countriesArray = data.distribution?.natives?.map((item) => item.tdwgCode) || [];
            // console.log(countriesArray);
            setCountries(countriesArray);
            const countryNamesArray = data.distribution?.natives?.map((item) => item.name) || [];
            setCountryNames(countryNamesArray);
        }
    }, [data]);

    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to='/'>
                <Button sx={{ mt: '1rem' }} variant="outlined" startIcon={<ArrowBackIcon />}>
                    Back
                </Button>
            </Link>
            <h1>{data && data.name}</h1>
            {pickedPlantImages && pickedPlantImages.length > 0 && (
                <img src={pickedPlantImages[0].thumbnail} alt={data && data.name} />
            )}
            <section id="description">
                {data && (
                    <p>{data.name} is a {data.lifeform} plant species from the {data.family} family. It grows in areas with {data.climate} climate</p>
                )}
            </section>
            <h2>Native Distribution</h2>
            {data && data.distribution ? (
                <Paper>
                    <ReactLeafletMap countries={countries} countryNames={countryNames} />
                </Paper>
            ) : (
                <h3>No distrubution data available</h3>
            )}
        </div>
    );
};

export default IndividualDisplay;