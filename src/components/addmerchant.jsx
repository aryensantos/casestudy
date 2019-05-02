import React, { Component } from 'react';
import '../css/addform.css';
import { AddMerchantForm } from './addmerchantform';
import { postMerchantsList } from '../util/service-helper.js'


class AddMerchant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            merchant: {
                merName: '',
                merDesc: ''
            }
        }
    }

    handleChangeInfo = e => {
        const { name, value } = e.target;

        this.setState((prevState) => ({
            merchant: {
                ...prevState.merchant,
                [name]: value
            }
        }));
    }

    
    // Add user on click
    handleAddMerchant = e => {

        postMerchantsList(this.state.merchant)
        .then(function (response) {
            alert("Add this merchant?");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        e.preventDefault();

        // let account = this.state.account;
        // let accounts = [...this.state.accounts];

        // accounts.push(account);

        // e.preventDefault();

        // axios.post(`http://localhost:8080/OnlineBanking/rest/accounts`, {accounts})
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
    }

    render() {
        return (
            <div className="forms">
            <AddMerchantForm handleChangeInfo={this.handleChangeInfo} 
            handleAddMerchant={this.handleAddMerchant} />
            </div>
        )
    }
}

export default AddMerchant;