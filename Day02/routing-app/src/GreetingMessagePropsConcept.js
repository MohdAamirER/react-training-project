import { Component } from "react";

class GreetingMessage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                this name is going to display through {this.props.uname} 
            </div>
        );
    }
    
}
export default GreetingMessage;