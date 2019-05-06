import React, { Component } from 'react';
import '../css/addform.css';
import { OpenAccForm } from './openaccountform';
import { postAccountsList, postTransactionsList } from '../util/service-helper.js'


class OpenAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                
                accName: '',
                accType: '',
                currentBal: ''
            }
            // transaction: {
            //     transType: 'Account created.',
            //     transDate: '2019-05-02',
            //     accID: ''
            // }
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
            // transaction: {
            //     ...prevState.transaction,
            //     [name]: value
            // }
        }));
    }

    
    // Add user on click
    handleAddUser = e => {

        // postTransactionsList(this.state.transaction)
        postAccountsList(this.state.account)
        .then(function (response) {
            alert("Account created.");
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
            <OpenAccForm handleChangeInfo={this.handleChangeInfo} 
            handleAddUser={this.handleAddUser} />
            </div>
        )
    }
}

export default OpenAccount;