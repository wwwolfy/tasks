import config from '../../config';
import handleResponse from './handleResponse';


export const createGroup = params => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.GROUPS}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params)
        },
    )
        .then(response => handleResponse(response));
};