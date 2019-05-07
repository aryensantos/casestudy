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

    handleAddMerchant = e => {

        postMerchantsList(this.state.merchant)
        .then(function (response) {
            
          console.log(response);
          alert("Merchant added.");
        })
        .catch(function (error) {
          console.log(error);
        });
        e.preventDefault();
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