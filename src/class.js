import React from "react";

export default class Test extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    clickButton() {
        this.setState({count: this.state.count + 1 })
        console.log('clicked')

    }
    render(){
        return(
            <>
            <p>Clicked: {this.state.count} </p>
            <button className="btn btn-primary" onClick={() => this.clickButton()}>Click Me</button>
            </>

        )
    }
}
