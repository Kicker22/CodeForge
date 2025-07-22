const fetch = require('node-fetch');

// this function will fetch the data from the API and return it to index.js
// we have this in a different file for better code organization and reusability
const fetchData = async (url) => {
    // this will return the data to index.js so we can use it there for further processing.
    // you could include this code as part of index.js if you want
    //  I prefer to keep it here for better organization for this specific project
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched successfully' + JSON.stringify(data));
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

module.exports = fetchData;