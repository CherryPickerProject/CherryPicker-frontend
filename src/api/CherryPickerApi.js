import { CherryPickerApiClient } from './ApiClient';

async function getCategories() {
    const res = await CherryPickerApiClient.get('/categories');
    return res.data;
}

// Return venues for search query
// TODO: include params to the api call
// Currently, we do not feed in filters here except the current activePage
async function getVenues(params) {
    const res = await CherryPickerApiClient.get('/venues', { params: { activePage: params.activePage } });
    return res.data
}

export default {
    getCategories,
    getVenues
}