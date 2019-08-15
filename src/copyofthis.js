import React from 'react';
import './App.css';

class App extends React.Component{

  state={
    age:31,
    name:"Tharany"
  }

  handleClick = () =>{
   // let x = JSON.parse(JSON.stringify(this.state))
   let x= this.state.age
    x++;
    this.setState({age:x})

  }
  resetClick=()=>{
     this.setState({age:31})
 
  }
  render(){
    return(
      <div className="App">
        <h1>My name: {this.state.name}</h1>
        <h1 >My age:{this.state.age} </h1>
        <button onClick={this.handleClick}>Add</button>
         <button onClick={this.resetClick.bind(this)}>Reset</button>
      </div>
      )
  }
}

export default App;
