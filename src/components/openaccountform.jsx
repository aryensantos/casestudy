import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OpenAccForm extends Component {


    render() {
        return (
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center><h2>Open Account</h2></center>
                <form>
                    <label for="accName">Account Name:</label>
                    <input type="text" name="accName" placeholder="Your account name.." onChange={this.props.handleChangeInfo} />
                    <label for="accType">Account Type:</label>
                    <select name="accType" onChange={this.props.handleChangeInfo}>
                        <option value="">Select account type..</option>
                        <option value="Savings">Savings</option>
                        <option value="Checking">Checking</option>
                    </select>
                    <label for="currentBal">Initial Deposit</label>
                    <input type="number" name="currentBal" placeholder="Initial deposit of 200.00" onChange={this.props.handleChangeInfo} ></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <button type="submit" onClick={this.props.handleAddUser}>Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

OpenAccForm.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddUser: PropTypes.func
}

export {
    OpenAccForm
}

