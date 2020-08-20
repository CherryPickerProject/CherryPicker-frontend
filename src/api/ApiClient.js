import axios from 'axios';

//TODO: Set Authorisation to endpoint...
function getApiClient(baseURL) {
    const ApiClient = axios.create({
        baseURL: baseURL,
    })

    ApiClient.interceptors.response.use(
        res => res,
        err => {
            console.log(err)
            console.log('Axios error');
            throw err;
        },
    );

    return ApiClient;

}

const BACKEND_ENDPOINT = 'https://1xvwcs2af5.execute-api.us-east-1.amazonaws.com/dev/api/0.1/'

export const CherryPickerApiClient = getApiClient(BACKEND_ENDPOINT);