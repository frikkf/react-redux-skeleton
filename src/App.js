import React, {Component} from 'react';

import './App.css';

import Header from './navigation/Header';
import Routes from './navigation/Routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                 <Header />
                 <Routes />   
            </div>
        );
    }
}

export default App;