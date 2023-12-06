import React from 'react';

export class StateConcept extends React.Component{
    constructor(props){
        super(props);
        this.state ={uname:"aamir",age:31}
        this.f1 = this.f1.bind(this);
        
    }
     f1(){
       this.setState({uname:"Rehan",age:78})
    }
    render(){
        return(
            <>
            User Details :<br/>
            UserName : {this.state.uname}<br/>
            Age : {this.state.age}
            <input type="button" onClick={this.f1} value="update the Value"></input>
            </>
        );
    }

}
export default StateConcept;