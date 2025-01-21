const fetchData = require('./utils/api');

const API_URL = 'https://api.example.com/data';

const main = async () => {
    try {
        const data = await fetchData(API_URL);
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

main();