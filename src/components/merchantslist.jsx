import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';
import { postTransactionsList } from '../util/service-helper.js'

class MerchantsList extends Component {

    state = {
        merchants: [],
        accounts: [],
        payMerchantData: {
            merID: '',
            merName: ''
        },
        updateBalData: {
            accName: '',
            currentBal: '',
            accID: ''
        },
        transaction: {
            transType: 'Paid merchant.',
            transDate: '2019-05-02',
            accID: ''

        },
        payMerchantModal: false
    }

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/merchants').then(res => {
            console.log(res);
            this.setState({ merchants: res.data })
        });
        axios.get('http://localhost:8080/OnlineBanking/rest/accounts').then(res => {
            console.log(res);
            this.setState({ accounts: res.data })
        });
    }

    //modal

    togglePayMerchantModal() {
        this.setState({
            payMerchantModal: !this.state.payMerchantModal
        });
    }

    payMerchant(merID, merName) {
        console.log(merID)
        console.log(merName)
        this.setState((prevState) => ({
            ...prevState,
            payMerchantData: { merID, merName }, payMerchantModal: !this.state.payMerchantModal
        }));
    }

    addTransaction() {
        postTransactionsList(this.state.transaction)
        .then(function (response) {
           
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    updateBal() {
        let { accName, currentBal } = this.state.updateBalData;

        console.log('Aryen');
        console.log(this.state.updateBalData);

        axios.put('http://localhost:8080/OnlineBanking/rest/accounts/updatebal', {
            accName, currentBal
        }).then((response) => {

            this.addTransaction();

            this.setState({
                payMerchantModal: false, updateBalData: { accName: '', currentBal: '', accID: '' }
                
            })

            this._refreshAccounts();

            alert("Merchant paid.");
            console.log(response.data)


        });

    }

    _refreshAccounts() {
        axios.get('http://localhost:8080/OnlineBanking/rest/accounts')
        .then((response) => {
            this.setState ((prevState) => ({
                ...prevState,
                accounts: response.data
            })
        )});
    }

    render() {

        return (
            <div className="merchants">
                <Modal isOpen={this.state.payMerchantModal} toggle={this.togglePayMerchantModal.bind(this)}>
                    <ModalHeader toggle={this.togglePayMerchantModal.bind(this)}>Pay this merchant</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="merName">Merchant Name:</Label>
                            <Input id="merName" value={this.state.payMerchantData.merName} onChange={(e) => {
                                let { payMerchantData } = this.state;

                                payMerchantData.merName = e.target.value;

                                this.setState({ payMerchantData });

                            }} readOnly />
                        </FormGroup>
                        <FormGroup>
                            <Label for="accName">Account Paying:</Label>
                            <select name="accName" onChange={(e) => {
                                let { updateBalData } = this.state;

                                updateBalData.accName = e.target.value;
                                updateBalData.accID = e.target.value;

                                this.setState({ updateBalData });
                            } } >
                                <option>Select account name..</option>
                                {this.state.accounts.map(account => <option>
                                    {account.accID}
                                    {account.accName}
                                </option>)}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="amount">Amount:</Label>
                            <Input type="number" id="currentBal" placeholder="Input amount.." onChange={(e) => {
                                let { updateBalData } = this.state;

                                updateBalData.currentBal = e.target.value;

                                this.setState({ updateBalData });

                            }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.updateBal.bind(this)}>Confirm</Button>{' '}
                        <Button onClick={this.togglePayMerchantModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Fragment>
                    <ul>
                    <center><table>
                        <tr className="thead">
                            <th>Merchant ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Pay Merchant</th>
                        </tr>

                        {this.state.merchants.map(merchant =>
                            <tr>
                                <td>{merchant.merID}</td>
                                <td>{merchant.merName}</td>
                                <td>{merchant.merDesc}</td>
                                <td><button onClick={this.payMerchant.bind(this, merchant.merID, merchant.merName)}>Pay</button></td>
                            </tr>

                        )}
                    </table></center>
                    </ul>
                </Fragment>
            </div>
            
        )
    }
}

export { MerchantsList };