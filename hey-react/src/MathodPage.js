import React,{Component} from 'react';


class Methodpage extends Component{
    constructor(props){
        super(props);
        this.state={
            repoBane:null
        }
        this.handleClick = this.handleClick.bind(this);
    }


handleClick(){
    fetch('https://api.github.com/users/jserv/repos',{method:"GET"})
    .then(res => res.json())
    .then(data => {
        this.setState({repoName: data[0]['id']});
        this.setState({repoName2: data[0]['node_id']});
        this.setState({repoName3: data[0]['name']});
        this.setState({repoName4: data[0]['full_name']});
        this.setState({repoName5: data[0]['description']});
        
    })
    .catch(e =>{
        console.log(e);
    })
}

render(){
    return(
        <div className="App">
            <div className="data-display">
                
             </div>
             <button onClick={this.handleClick}>取得JserV以英文字母排序的第一個Repo</button>
             
             <h1>{(this.state.repoName===null)? "目前還沒有資料":this.state.repoName}</h1>
             <h1>{(this.state.repoName===null)? "目前還沒有資料":this.state.repoName2}</h1>
             <h1>{(this.state.repoName===null)? "目前還沒有資料":this.state.repoName3}</h1>
             <h1>{(this.state.repoName===null)? "目前還沒有資料":this.state.repoName4}</h1>
             <h1>{(this.state.repoName===null)? "目前還沒有資料":this.state.repoName5}</h1>
        </div>
    )
    }
};


export default Methodpage;