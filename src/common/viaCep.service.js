import axios from "axios";

function defineService(url = 'https://viacep.com.br/ws/') {
    return {
        async get(resource) {
            try {
                const response = await axios.get(url + resource);
                return response.data;
            } catch (error) {
                throw error.response ? error.response.data : error;
            }
        },
    };
}

export default defineService();
