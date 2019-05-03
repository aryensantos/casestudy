import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Table } from 'react-bootstrap';



class AccountsList extends Component {

    state = {
        accounts: [],
        editAccData: {
            accId: '',
            accName: '',
            accType: '',
            currentBal: ''
        },
        editAccModal: false
    };

    componentDidMount() {
        axios.get('http://localhost:8080/OnlineBanking/rest/accounts').then(res => {
            console.log(res);
            this.setState({ accounts: res.data })
        });
    }

    toggleEditAccModal() {
        this.setState({
            editAccModal: !this.state.editAccModal
        });
    }

    updateAcc() {
        let { accId, accName, accType, currentBal } = this.state.editAccData;

        axios.put('http://localhost:8080/OnlineBanking/rest/accounts', {
            accId, accName, accType, currentBal
        }).then((response) => {

            this._refreshBooks();

            this.setState({
                editAccModal: false, editAccData: { accId: '', accName: '', accType: '', currentBal: '' }
            })

            console.log(response.data)
        });
    }

    _refreshBooks() {
    axios.get('http://localhost:8080/OnlineBanking/rest/accounts').then((response) => {
        this.setState({
            accounts: response.data
        })
    });
}

editAcc(accId, accName, accType, currentBal) {
    this.setState({
        editAccData: { accId, accName, accType, currentBal }, editAccModal: !this.state.editAccModal
    });
}
render() {

    return (
        <div className="account">
            <Modal isOpen={this.state.editAccModal} toggle={this.toggleEditAccModal.bind(this)}>
                <ModalHeader toggle={this.toggleEditAccModal.bind(this)}>Edit <strong>Account Name</strong> only</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="accName">Account Name:</Label>
                        <Input id="accName" value={this.state.editAccData.accName} onChange={(e) => {
                            let { editAccData } = this.state;

                            editAccData.accName = e.target.value;

                            this.setState({ editAccData });

                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="accType">Account Type:</Label>
                        <Input id="accType" value={this.state.editAccData.accType} onChange={(e) => {
                            let { editAccData } = this.state;

                            editAccData.accType = e.target.value;

                            this.setState({ editAccData });

                        }} readOnly />
                    </FormGroup>
                    <FormGroup>
                        <Label for="currentBal">Current Balance:</Label>
                        <Input id="currentBal" value={this.state.editAccData.currentBal} onChange={(e) => {
                            let { editAccData } = this.state;

                            editAccData.currentBal = e.target.value;

                            this.setState({ editAccData });

                        }} readOnly />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.updateAcc.bind(this)}>Update Account</Button>{' '}
                    <Button onClick={this.toggleEditAccModal.bind(this)}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Fragment>
                <center><table>
                    <tr className="thead">
                        <th>Account ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Current Balance</th>
                        <th>Action</th>
                    </tr>

                    {this.state.accounts.map(account =>
                        <tr key={account.accId}>
                            <td>{account.accId}</td>
                            <td>{account.accName}</td>
                            <td>{account.accType}</td>
                            <td>{account.currentBal}</td>
                            <td><button type="edit" onClick={this.editAcc.bind(this, account.accId, account.accName, account.accType, account.currentBal)}>Edit</button></td>
                            
                        </tr>

                    )}
                </table></center>
            </Fragment>
        </div>
    )
}
}

export { AccountsList };
