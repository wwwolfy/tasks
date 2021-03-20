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

export const getTask = id => {
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.TASKS}/${id}`,
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

export const updateTask = params => {
    const {id, title, status, group} = params;
    return fetch(
        `${config.API_URL}${config.ENDPOINTS.TASKS}/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({title, group, status})
        },
    )
        .then(response => handleResponse(response));
};

export const newTaskSendNotification = message => {
    return fetch(
        `${config.SLACK_NEW_TASK_API_URL}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: JSON.stringify({text: message}),
        },
    )
        .then(response => handleResponse(response));
};

export const completedTaskSendNotifications = message => {
    return fetch(
        `${config.SLACK_COMPLETED_API_URL}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: JSON.stringify({text: message}),
        },
    )
        .then(response => handleResponse(response));
}


