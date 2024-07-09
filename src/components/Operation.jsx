import React, {Component} from 'react';
import {store} from "../configureStore/store.js";
import {depositAction, withdrawAction} from "../actions/accountActions.js";

class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum:0
        }
    }
    render() {
        return (
            <div id="bank">
                <button className={"btn btn-danger"} onClick={() => store.dispatch(withdrawAction(this.state.sum))}>Withdraw</button>
                <input id="input1" onChange={e => this.setState({sum:+e.target.value})}
                type={"number"} value ={this.state.sum}/>
                <button className={"btn btn-accept"} onClick={() => store.dispatch(depositAction(this.state.sum))}>Deposit</button>
            </div>
        );

    }
}

export default Operation;