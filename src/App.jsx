import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from './components/navbar.jsx';
import  Home  from './components/home.jsx'
import  Accounts  from './components/accounts.jsx';
import OpenAccount from './components/openaccount.jsx';
import  TransferMoney  from './components/transfermoney.jsx'
import  Merchants  from './components/merchants.jsx';
import AddMerchant from './components/addmerchant.jsx';
import Transactions from './components/transactions.jsx';


class App extends Component {
  render(){
    return (
      <div className='my-app'>

      <BrowserRouter>
      <Header/>
        <Route path="/" component={Home} exact/>
        <Route path="/accounts" component={Accounts}/>
        <Route path="/openaccount" component={OpenAccount}/>
        <Route path="/transfermoney" component={TransferMoney}/>
        <Route path="/merchants" component={Merchants}/>
        <Route path="/addmerchant" component={AddMerchant}/>
        <Route path="/transactions" component={Transactions}/>
      </BrowserRouter>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )
  }
}

export default App;
