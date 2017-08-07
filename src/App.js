import React, {Component} from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">

                    <Header/>
                    <div className="container-fluid">
                        <Content/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
