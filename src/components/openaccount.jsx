import React, { Component } from 'react';
import '../css/addform.css';
import { OpenAccForm } from './openaccountform';
import { postAccountsList, postTransactionsList } from '../util/service-helper.js'
import axios from 'axios';


class OpenAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                accName: '',
                accType: '',
                currentBal: '500'
            }
        }
    }

    handleChangeInfo = e => {
        console.log('hellooo');
        const { name, value } = e.target;

        this.setState((prevState) => ({
            account: {
                ...prevState.account,
                [name]: value
            }
        }));
    }

    
    // Add user on click
    handleAddUser = e => {

        postAccountsList(this.state.account)
        .then(function (response) {
          console.log(response);
          alert("Account created.");
        })
        .catch(function (error) {
          console.log(error);
        });
        e.preventDefault();
    }

    render() {
        return (
            <div className="forms">
            <OpenAccForm handleChangeInfo={this.handleChangeInfo} 
            handleAddUser={this.handleAddUser}/>
            </div>
        )
    }
}

export default OpenAccount;