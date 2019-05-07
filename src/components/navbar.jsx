import React, { Component } from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="navbar nav navbar-nav navbar-left">
                <ul className="navv">
                <a className="navbar-brand" href="/">BeginConnect</a>
                <NavLink to="/accounts">Accounts</NavLink>
                <NavLink to="/openaccount">Open Account</NavLink>
                <NavLink to="/transfermoney">Transfer Money</NavLink>
                <NavLink to="/merchants">Merchant</NavLink>
                <NavLink to="/addmerchant">Add Merchant</NavLink>
                <NavLink to="/transactions">Transactions</NavLink>
                </ul>
            </div>

            

        )
    }
}

export {
    Header
} 