import React, { Component } from 'react';
import './App.css';
import InputComponent from './InputComponent/InputComponent'
import RangeCalendar from './RangeCalendar/RangeCalendar'
import * as Helper from './Helpers/Helper';

class App extends Component {
  state = {
    startDate: new Date(),
    numberOfDays: 1
  }

  onStartDateChanged = (event) => {
    var newDate = Helper.addDays(new Date(event.target.value), 1)
    this.setState({ startDate: newDate });
  }

  onNumberOfDaysChanged = (event) => {
    this.setState({numberOfDays: parseInt(event.target.value,10)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calendar Application</h1>
        </header>
        <div className="App-intro">
          <InputComponent 
            onStartDateChanged={this.onStartDateChanged} 
            onNumberOfDaysChanged={this.onNumberOfDaysChanged} 
            startDate={this.state.startDate}
            numberOfDays={this.state.numberOfDays}/>
          <RangeCalendar 
            startDate={this.state.startDate} 
            numberOfDays={this.state.numberOfDays}/>
        </div>
      </div>
    );
  }
}

export default App;
