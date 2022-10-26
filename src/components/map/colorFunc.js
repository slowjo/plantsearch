const colorFunc = (countryCode, countries) => {
    if (countries.includes(countryCode.toString())) {
        return 'green';
    } else if ((countries.includes('PAL') && countryCode === 'ISR') || 
                (countries.includes('PAL') && countryCode === 'PSE')) {
        return 'green';
    } else {
        return 'gray';
    }
};

export const styleByCountry = (feature, countries) => {
    return {
        fillColor: colorFunc(feature.properties.ISO_A3, countries),
        weight: 0.5,
    };
};