import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './InputComponent/InputComponent'
import RangeCalendar from './RangeCalendar/RangeCalendar'

class App extends Component {
  state = {
    startDate: new Date('05/01/2018'),
    numberOfDays: 1
  }

  onStartDateChanged = (event) => {
    this.setState({startDate: new Date(event.target.value)});
  }

  onNumberOfDaysChanged = (event) => {
    this.setState({numberOfDays: parseInt(event.target.value)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calendar Application</h1>
        </header>
        <div className="App-intro">
          <InputComponent 
            onStartDateChanged={this.onStartDateChanged} 
            onNumberOfDaysChanged={this.onNumberOfDaysChanged} 
            startDate={this.state.startDate}/>
          <RangeCalendar 
            startDate={this.state.startDate} 
            numberOfDays={this.state.numberOfDays}/>
        </div>
      </div>
    );
  }
}

export default App;
