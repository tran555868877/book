//CLI: npm install axios --save
import axios from 'axios';
import React, { Component } from 'react';
import './App.css'; 
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }
  render() {
    return (
      <div>
        <MyProvider>
            <BrowserRouter >
              <Main />
            </BrowserRouter>
        </MyProvider>
      </div>
    );
  }
  componentDidMount() {
    axios.get('/hello').then((res) => {
      const result = res.data;
      this.setState({ message: result.message });
    });
  }
}
export default App;