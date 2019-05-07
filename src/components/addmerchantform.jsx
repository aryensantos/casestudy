import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMerchantForm extends Component {

    render (){
        return (
            <div className="container">
            <br></br>
            <br></br>
        <center><h2>Add Merchant</h2></center>
            <form>
                    <label for="merName">Merchant Name:</label>
                    <input type="text" name="merName" placeholder="Merchant name.." onChange={this.props.handleChangeInfo} />
                    <label for="merDesc">Merchant Description:</label>
                    <input type="text" name="merDesc" placeholder="Merchant description.." onChange={this.props.handleChangeInfo} />
                    
                    <br></br>
                    <br></br>
                    <br></br>
                <div class="row">
                    <button type="submit" onClick={this.props.handleAddMerchant}>Submit</button>
                </div>
            </form>
        </div>
        )
    }
}

AddMerchantForm.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddMerchant: PropTypes.func
}

export {
    AddMerchantForm
}
