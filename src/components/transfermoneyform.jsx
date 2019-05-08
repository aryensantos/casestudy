import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Label } from 'reactstrap';

class TransferMoneyForm extends Component {

    state = {
        accounts: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/accounts').then(res => {
            console.log(res);
            this.setState({ accounts: res.data })
        });
    }

    render () {
        return (
            <div className="container">
                <br></br>
                <br></br>
                <center><h2>Transfer Money</h2></center>
                <br></br>
                <form>
                    <Label for="accName">Sender Name:</Label>
                    <select name="accName">
                    <option id="ph" value="">Select sender name..</option>
                    {this.state.accounts.map(account => <option>
                        {account.accName}
                    </option>)}
                    </select>
                    
                    <label for="currentBal">Amount:</label>
                    <input type="number" min="500" name="currentBal" placeholder="Amount to be transferred.." onChange="" />

                    <label for="accName">Receiver Name:</label>
                    <select name="accName">
                    <option id="ph" value="">Select receiver name..</option>
                    {this.state.accounts.map(account => <option>
                        {account.accName}
                    </option>)}
                    </select>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <button type="submit" onClick=""><i class="fas fa-check-double"></i> Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TransferMoneyForm;