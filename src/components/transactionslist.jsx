import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, Label } from 'reactstrap';
import '../css/search.css';


class TransactionsList extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        transactions: [],
        accName:'',

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event) {
        this.setState({ accName: event.target.value });
    }


    handleSubmit() {
        let getTransURL = 'http://localhost:8080/OnlineBanking/rest/transactions?accName=' + this.state.accName;
        console.log(getTransURL);
        axios.get(getTransURL).then(res => {
            this.setState({ transactions: [] });
            this.setState({ transactions: res.data })

            console.log(res);
            console.log(res.data)
        });
    }

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/transactions').then(res => {
            console.log(res);
            this.setState({ transactions: res.data })
        });
    }

    render() {

        return (
            <div className="transactions">
                <center><FormGroup className="filter">
                <input type="text"  name="accName"  onKeyUp={this.handleSubmit}onChange={this.handleChangeName} placeholder="Search for an account name.."/>
                </FormGroup></center>
                <br></br>
                <ul>
                    <center><table>
                        <tr className="thead">
                            <th>Transaction ID</th>
                            <th>Account Name</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>

                        {this.state.transactions.map(transaction =>
                            <tr>
                                <td>{transaction.transID}</td>
                                <td>{transaction.accName}</td>
                                <td>{transaction.transType}</td>
                                <td>{transaction.transDate}</td>
                            </tr>

                        )}
                    </table></center>
                </ul>
            </div>
        )
    }
}

export { TransactionsList };
