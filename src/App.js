import React from 'react'
//import { Button } from 'reactstrap';

class App extends React.Component{

  state={
    firstinput :"",
    secondinput :"",
    answer :"",
    operator:"",
    storeinput:""

  }
// handleClick =()=>{
//   let first_val =
// }




  storeValue =(val)=>{
    this.setState({ firstinput: this.state.firstinput+val})
  }
  render(){
    return(
      <div >
        <table className="table-bordered btn">
        <tr>
            <td colspan="4" ><input id='display'  value="" disabled ></input></td>
        </tr>
        <tr>
            <td colspan="2"><button id="Clear" className="btn">clear</button></td>
            <td><button id="equal" className="btn">=</button></td>
            <td><button id="divide" className="btn">/</button></td>
        </tr>
          <tr>
            <td><button id="7" className="btn">7</button></td>
            <td><button id="8" className="btn">8</button></td>
            <td><button id="9" className="btn">9</button></td>
            <td><button id="multi" className="btn">*</button></td>
          </tr>
          <tr>
            <td><button id="4" className="btn">4</button></td>
            <td><button id="5" className="btn">5</button></td>
            <td><button id="6" className="btn">6</button></td>
            <td><button id="sub" className="btn">-</button></td>
          </tr>
          <tr>
            <td><button id="1" className="btn">1</button></td>
            <td><button id="2" className="btn">2</button></td>
            <td><button id="3" className="btn">3</button></td>
            <td><button id="plus" className="btn">+</button></td>
          </tr>
      </table>
        
      </div>
      )
  }
}

export default App;
