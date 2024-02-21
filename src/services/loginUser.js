import axios from "axios";

const API_URL_AUTH = import.meta.env.VITE_AUTH_API_URL;

export const loginUser = async ({ username, password }) => {
    try {
        const response = await axios.post(`${API_URL_AUTH}/login`, { username, password });
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Server error:', error.response.data);
            return { error: 'Invalid credentials. Please try again.' };
        } else if (error.request) {
            console.error('No response from the server');
            return { error: 'No response from the server. Please try again later.' };
        } else {
            console.error('Request setup error:', error.message);
            return { error: 'Request setup error. Please try again later.' };
        }
    }
}