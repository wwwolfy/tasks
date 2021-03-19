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

export const getGroups = () => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.GROUPS}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'GET',
        },
    )
        .then(response => handleResponse(response));
};

export const createTask = params => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.TASKS}`,
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

export const getTasks = () => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.TASKS}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'GET',
        },
    )
        .then(response => handleResponse(response));
};

export const deleteTask = id => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.TASKS}/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'DELETE',
        },
    )
        .then(response => handleResponse(response));
};
