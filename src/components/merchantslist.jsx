import React, { Component } from 'react';
import axios from 'axios';

class MerchantsList extends Component {

    state = {
        merchants: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/merchants').then(res => {
            console.log(res);
            this.setState({ merchants: res.data })
        });
    }

    render() {

        return (
            <ul>
                <center><table>
                    <tr className="thead">
                        <th>Merchant ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>

                    {this.state.merchants.map(merchant =>
                        <tr>
                            <td>{merchant.merID}</td>
                            <td>{merchant.merName}</td>
                            <td>{merchant.merDesc}</td>
                            <td><button type="pay">Pay Merchant</button></td>
                        </tr>

                    )}
                </table></center>
            </ul>
        )
    }
}

export {MerchantsList};