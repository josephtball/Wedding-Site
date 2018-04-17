import axios from 'axios';

const helpers = {
    getEvents: () => {
        return axios.get('./api/events').then((response) => {
            return response.data;
        }).catch((error) => {
            return error;
        });
    },
}

export default helpers;