import React, { Component } from 'react';
import '../css/addform.css';
import TransferMoneyForm from './transfermoneyform';

class TransferMoney extends Component {
    render () {
        return (
            <div className="forms">
            <TransferMoneyForm />
            </div>
        )
    }
}

export default TransferMoney;