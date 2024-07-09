import React, {Component} from 'react';
import {store} from "../configureStore/store.js";

class Balance extends Component {
    componentDidMount() {
       this.unsubscribe = store.subscribe(()=> this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div id="bank">
                <h1>Iron Bank of Bravos</h1>
                <h2>
                    Balance = <span style={{color: 'green'}}>{store.getState().balance} $</span>
                </h2>
            </div>
        );
    }
}

export default Balance;