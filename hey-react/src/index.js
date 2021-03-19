import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Method from './setMethod.js';
import reportWebVitals from './reportWebVitals';
import Layout from './App2';
import Progress from './Process';
import Methodpage from './MathodPage';


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



function Addh1(props){
  return <h1>Hello,{props.name}</h1>
    
  
}
function Addh2(props){
  return <h1>Hello,Age{props.age}</h1>
    
  
}

function Postline(){
  return(
    <div>
    <Addh1 name="Team" age='10'/>
    <Addh1 name="Justen" age='10'/>
    <Addh2 name="Frank" age='10'/>
    </div>

  )
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
    <br/>
    <div>
     
      <Methodpage/>
    </div>
    <div>
      
    </div>
   
  </div>,
  document.getElementById('root')
);



reportWebVitals();
 /* <Method/> */
 /* <Postline/> */