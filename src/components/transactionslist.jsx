import React, { Component } from 'react';
import axios from 'axios';


class TransactionsList extends Component {

    state = {
        transactions: [],

    };

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/transactions').then(res => {
            console.log(res);
            this.setState({ transactions: res.data })
        });
    }

    render() {

        return (
            <ul>
                <center><table>
                    <tr className="thead">
                        <th>Transaction ID</th>
                        <th>Account ID</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>

                    {this.state.transactions.map(transaction =>
                        <tr>
                            <td>{transaction.transID}</td>
                            <td>{transaction.accID}</td>
                            <td>{transaction.transType}</td>
                            <td>{transaction.transDate}</td>
                        </tr>

                    )}
                </table></center>
            </ul>
        )
    }
}

export { TransactionsList };
