const IPNI_URL = 'http://beta.ipni.org/api/1'
const POWO_URL = 'http://www.plantsoftheworldonline.org/api/2'
const KPL_URL = 'http://kewplantlist.org/api/v1'

export const getPowo = (searchTerm) => {
    console.log(searchTerm);
    let parsedQuery = '';
    if (searchTerm) {
        parsedQuery = searchTerm.replace(' ', '+');
    }
    const urlPowo = `https://powo.science.kew.org/api/2/search?perPage=20&cursor=%2A&q=${parsedQuery}&f=None`;
    if (!searchTerm || searchTerm.trim() === '') {
        return null;
    }
    return fetch(urlPowo).then((res) => res.json());
};

export const getPowoIndividual = (id) => {
    if (!id) {
        return null;
    }
    console.log(`https://powo.science.kew.org/api/2/taxon/${id}?fields=distribution`);
    return fetch(`https://powo.science.kew.org/api/2/taxon/${id}?fields=distribution`).then((res) => res.json());
};