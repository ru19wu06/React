import './App.css';
import React,{Component} from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      percent:"30%"
    }
    this.changePercent = this.changePercent.bind(this);
  }

  changePercent(){
    this.setState({percent:"70%"})
  }

  render(){
    return(
      <div>
         <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
              <div className="progress-bar" style={{backgroundColor:"#fe5196",width:"10%",height:"100%",borderRadius:"10px"}}></div>
         </div>
         <button onClick={this.changePercent}>轉換百分比</button>
      </div>
    );
  }
}

export default App;
