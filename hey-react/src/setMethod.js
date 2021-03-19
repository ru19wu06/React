import React,{Component} from 'react';


class Method extends Component{
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
        this.setState({repoName: data[0]['node_id']});
    })
    .catch(e =>{
        console.log(e);
    })
}

render(){
    return(
        <div className="App">
            <div className="data-display">
                {(this.state.repoName===null)? "目前還沒有資料":this.state.repoName}
             </div>
             <button onClick={this.handleClick}>取得JserV以英文字母排序的第一個Repo</button>
        </div>
    )
    }
};


export default Method;