import React,{useState} from 'react';


var cos = 30;
var afet = "";

var sd = 0;
var fruits = ['','Buy', 'Bitcoin','Now!'];
const Progress =()=>{
    const [percent,changePercent] = useState("30%");
    console.log(useState("初始值"))
    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
            <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}></div>
            
            </div>
            <br/>
           {/* <button onClick={()=>{changePercent("70%")}}>轉換百分比</button> */}
           <button onClick={()=>{
                cos=cos+10;
                if(cos>=100){
                    cos = 100;
                }
                afet = cos+"%";
                
                sd++;
                if(sd>=4){
                    sd=0;
                }
                var text=fruits[sd];
                document.getElementById('character-poster').innerHTML = text;

                
               changePercent(afet)}
            }>轉換百分比並做一些酷酷的事情</button>
        <br/>
        <br/>
            <div style={{backgroundColor:"rgb(255,215,0)",width:"200px",height:"70px",borderRadius:"5px"}}>
                <h1 style={{marginLeft:"25%",marginTop:"20%"}} id="character-poster"></h1>
            </div>
        </div>
    );
}

// document.getElementById('count-area').innerHTML = count;

export default Progress;