const axios = require('axios');

export async function execGet (endpoint) {
    try {
        const tkn = sessionStorage.getItem('jwtToken');
        const url = `http://ec2-3-139-101-93.us-east-2.compute.amazonaws.com:4444/${endpoint}`;
        const response = await axios.get(url, {
            headers: {
                'Token': tkn
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function execPost (endpoint, data) {
    try {
        const url = `http://ec2-3-139-101-93.us-east-2.compute.amazonaws.com:4444/${endpoint}`;
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
              }
        });
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}