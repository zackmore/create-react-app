import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getEnvValues() {
    if (
      !process.env.REACT_APP_EMPLOYEE_ID ||
      !process.env.REACT_APP_POSITION_ID
    ) {
      throw new Error(
        'Please define `REACT_APP_EMPLOYEE_ID` and `REACT_APP_POSITION_ID` in .env file'
      );
    }

    const employeeID = process.env.REACT_APP_EMPLOYEE_ID;
    const position = process.env.REACT_APP_POSITION_ID;

    return { employeeID, position };
  }

  render() {
    const { employeeID, position } = this.getEnvValues();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <b>Employee ID: {employeeID}</b>
          <br />
          <br />
          <b>Position: {position}</b>
        </p>
      </div>
    );
  }
}

export default App;
