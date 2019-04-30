import React, { Component } from 'react';
import axios from 'axios';



class AccountsList extends Component {

    state = {
        accounts: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/accounts').then(res => {
            console.log(res);
            this.setState({ accounts: res.data })
        });
    }

    render() {

        return (
            <ul>
                <center><table>
                    <tr className="thead">
                        <th>Account ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Current Balance</th>
                        <th></th>
                    </tr>

                    {this.state.accounts.map(account =>
                        <tr>
                            <td>{account.accId}</td>
                            <td>{account.accName}</td>
                            <td>{account.accType}</td>
                            <td>{account.currentBal}</td>
                            <td><a href="/editaccount?">Edit</a></td>
                        </tr>

                    )}
                </table></center>
            </ul>
        )
    }
}

export { AccountsList };
