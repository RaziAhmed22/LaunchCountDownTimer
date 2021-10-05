import React, {Component} from 'react';
import './App.css';
import Card from './Component/Card/Card.js';
import Footer from './Component/Footer/Footer.js';



class App extends Component {
  constructor(){
    super();
    this.state={
      date:new Date(),
      days:14,
      hours:"",
      minutes:"",
      seconds:""
    }
}
  componentDidMount(){
  const showTime=()=>{
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    this.setState({hours:24-h})
    this.setState({minutes:60-m})
    this.setState({seconds:60-s})
    if (this.state.hours===24){
      this.state.days--
    }
    setTimeout(showTime, 1000);
}
showTime();
}
  render(){
    return (
      <div className="CountDownTimer">
        <h1 className="mt0 tc pt6 pb4">WE'RE LAUNCHING SOON</h1>
        <div className="App">
          <div>
            <Card Time={this.state.days}/>
            <p className="tc">DAYS</p>
          </div>
          <div>
            <Card Time={this.state.hours}/>
            <p className="tc">HOURS</p>
          </div>
          <div>
            <Card Time={this.state.minutes}/>
            <p className="tc">MINUTES</p>
          </div>
          <div>
            <Card Time={this.state.seconds}/>
            <p className="tc">SECONDS</p>
          </div>
        </div>
        <Footer className="mt0"/>
      </div>
    );
}
}
export default App;
