import React, { Component } from 'react';
import '../css/addform.css';


class AddMerchant extends Component {


    render() {
        return (
            <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <center><h2>Add Merchant</h2></center>
            <form action>
                    <label for="mername">Merchant Name:</label>
                    <input type="text" name="mername" placeholder="Merchant name.." />
                    <label for="merdesc">Merchant Description:</label>
                    <input type="text" name="merdesc" placeholder="Merchant description.." />
                    
                    <br></br>
                    <br></br>
                    <br></br>
                <div class="row">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

        )
    }
}

export default AddMerchant;