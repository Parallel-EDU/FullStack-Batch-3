import React, { Component } from "react";

class Count extends Component {
    componentDidMount(){
        //Executed when component loads
        console.log('Component has been Mounted')
    }
    componentDidUpdate(prevState, updatedState){
        //Executed when component is updated
    }
    componentWillUnmount(){
        //Executed when component is loaded/unmount
        console.log('Component has been UnMounted')
    }
  render() {
    return (
      <div>
        <h1>This is a class based component</h1>
      </div>
    );
  }
}
export default Count;
