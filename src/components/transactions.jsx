import React, { Component } from 'react';
import '../css/table.css';
import {TransactionsList} from './transactionslist.jsx'

const Transactions = () => {
    return (
        <div className="transactions">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center><h2>Transactions List</h2></center>
            <br></br>
            <TransactionsList />
        </div>
        

    )
}

export default Transactions;