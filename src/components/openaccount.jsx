import React, { Component } from 'react';
import '../css/addform.css';


class OpenAccount extends Component {

    state = {
        accname: '',
        acctype: ''
    }



    render (){
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <center><h2>Open Account</h2></center>
            <form action>
                    <label for="accname">Account Name:</label>
                    <input type="text" name="accname" placeholder="Your account name.." />
                    <label for="acctype">Account Type:</label>
                    <select name="acctype">
                        <option value="">Select account type..</option>
                        <option value="savings">Savings</option>
                        <option value="checking">Checking</option>
                    </select>
                    <label for="currentbal">Initial Deposit</label>
                    <input type="number" name="currentbal" placeholder="Initial deposit of 200.00" readOnly></input>
                    <br></br>
                    <br></br>
                    <br></br>
                <div class="row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    )}
}

export default OpenAccount;