const handleResponse = response => {

    if (response.ok) {
        return response.json();
    }

    return response.json().then(() => {
        throw new Error('Error');
    });
};

export default handleResponse;