import {getAccountsListURL, getTransactionsListURL} from './service-url';
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

const postTransactionsList = (transactions) => {
    return axios.post(getTransactionsListURL, transactions)
}

export {
    getAccountsList,
    postAccountsList,
    postMerchantsList,
    postTransactionsList
}