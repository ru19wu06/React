import React,{useState} from 'react';


var cos = 50;
var afet = "%";
const Progress =()=>{
    const [percent,changePercent] = useState("30%");
    console.log(useState("初始值"))
    return(
        <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
            <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent,height:"100%",borderRadius:"10px"}}></div>
           </div>
           {/* <button onClick={()=>{changePercent("70%")}}>轉換百分比</button> */}
           <button onClick={()=>{
                cos=cos+10;
                if(cos>=100){
                    cos = 100;
                }
                afet = cos+"%";

               changePercent(afet)}
            }>轉換百分比</button>
        </div>
    );
}



export default Progress;