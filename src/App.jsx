import React from 'react';
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import "./App.css";
const App = () => {
    return (
        <div id="app">
            <Balance/>
            <Operation/>
        </div>
    );
};

export default App;