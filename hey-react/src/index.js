import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './App2';
import Progress from './Process';


function Apps(props){
  return(
    <div>
     
    <button style={{marginTop:"5%"}} onClick={props.handleClick}>{props.name}</button>
    <br/>
    </div>
  );
}
var count = 0;
const printMessage=()=>{

  count = count+1;
  document.getElementById('show-area').innerHTML = "被我按到了";
  document.getElementById('count-area').innerHTML = count;
}




ReactDOM.render(
  <div>
    <Apps name="計算數字+1" handleClick={printMessage}/>
    
    <Layout>
    
    </Layout>
    <div id="show-area"></div>
    <div id="count-area"></div>
    <div>
      <hr/>
      <h1 id="Button-66">按鈕666</h1>
    </div>
    <div>
      <Progress/>
    </div>
  </div>,
  document.getElementById('root')
);



reportWebVitals();
