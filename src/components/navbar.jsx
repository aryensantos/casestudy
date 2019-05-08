import React, { Component } from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="navbar nav navbar-nav navbar-left">
                <ul className="navv">
                <a className="navbar-brand" href="/"><i class="fas fa-link"></i> BeginConnect <i class="fas fa-link"></i></a>
                <NavLink to="/accounts"><i class="fas fa-user-circle"></i> Accounts</NavLink>
                <NavLink to="/openaccount"><i class="fas fa-user"></i> Open Account</NavLink>
                {/* <NavLink to="/transfermoney"><i class="fas fa-money-bill-wave"></i> Transfer Money</NavLink> */}
                <NavLink to="/merchants"><i class="fas fa-business-time"></i> Merchant</NavLink>
                <NavLink to="/addmerchant"><i class="fas fa-plus"></i> Add Merchant</NavLink>
                <NavLink to="/transactions"><i class="fas fa-tasks"></i> Transactions</NavLink>
                </ul>
            </div>

            

        )
    }
}

export {
    Header
} 