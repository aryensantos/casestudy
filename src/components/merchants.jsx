import React, { Component } from 'react';
import '../css/table.css';
import {MerchantsList} from './merchantslist.jsx'

const Merchants = () => {
    return (
        <div className="merchants">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center><h2>Merchants List</h2></center>
            <br></br>
            <MerchantsList />
        </div>
        

    )
}

export default Merchants;