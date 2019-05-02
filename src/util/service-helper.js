import {getAccountsListURL} from './service-url';
import {getMerchantsListURL} from './service-url';
import axios from 'axios';

const getAccountsList = () => {
    return axios.get(getAccountsListURL);
}

const postAccountsList = (accounts) => {
    return axios.post(getAccountsListURL, accounts )
}

const postMerchantsList = (merchants) => {
    return axios.post(getMerchantsListURL, merchants )
}

export {
    getAccountsList,
    postAccountsList,
    postMerchantsList
}