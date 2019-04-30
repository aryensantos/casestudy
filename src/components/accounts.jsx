import React, { Component } from 'react';
import '../css/table.css';
import {AccountsList} from './accountslist.jsx'

const Accounts = () => {
    return (
        <div className="accounts">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center><h2>Accounts List</h2></center>

            <AccountsList />
        </div>
        

    )
}

export default Accounts;