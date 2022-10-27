const colorFunc = (countryCode, countryNameFromFeature, countries, countryNames) => {
    if (countries.includes(countryCode.toString())) {
        return 'green';
    } else if ((countries.includes('PAL') && countryCode === 'ISR') || 
                (countries.includes('PAL') && countryCode === 'PSE')) {
        return 'green';
    } else if (countryNames.includes(countryNameFromFeature.toString())) {
        return 'green';
    } else {
        return 'gray';
    }
};

export const styleByCountry = (feature, countries, countryNames) => {
    return {
        fillColor: colorFunc(feature.properties.ISO_A3, feature.properties.NAME, countries, countryNames),
        // fillColor: colorFunc(feature.properties.ISO_A3, countries),
        weight: 0.5,
    };
};