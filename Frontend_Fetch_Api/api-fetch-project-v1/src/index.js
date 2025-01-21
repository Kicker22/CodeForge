const fetchData = require('./api');

// This connection string can be put in an env file for security along with other sensitive data like API keys
// it can be imported from config.js file.
// this will be explored in v2 of the project
const API_URL = 'https://opentdb.com/api.php?amount=10';



//this function will fetch the data from the API and return it to server.js
// its seperated into a different file for better code organization
const main = async () => {
    try {
        // This will return the data to server.js
        const data = await fetchData(API_URL);
        return data
    } catch (error) {
        console.error('Error in main function:', error);
    }
};

// Export the main function for use in server.js
module.exports = main;
