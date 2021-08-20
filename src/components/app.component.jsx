import React, { Component } from "react";
import Navbar from "./navbar.components";
import Counters from "./counters.component";
import Reset from "./reset.component";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const all_counters = this.state.counters.map((counter, idx) => {
      const obj = { id: idx, value: 0 };
      return obj;
    });
    this.setState({ counters: all_counters });
  };

  handleIncrement = (id) => {
    const a = this.state.counters.map((counter, idx) => {
      if (counter.id === id) return { id: idx, value: counter.value + 1 };
      else return { id: idx, value: counter.value };
    });
    this.setState({ counters: a });
  };

  handleDecrement = (id) => {
    const a = this.state.counters.map((counter, idx) => {
      if (counter.id === id) return { id: idx, value: counter.value - 1 };
      return counter;
    });

    this.setState({ counters: a });
  };

  getNonZeroItems = () => {
   let cnt =0;
   this.state.counters.forEach(counter => {
     if (counter.value > 0){
       cnt ++;
     }
   })
   //console.log("Cnt: ",cnt);
   return cnt ;
  }
  handleDelete = (id) =>{
    //console.log("Items should be deleted",id);
    const counters = this.state.counters.filter( counter => counter.id != id)
    this.setState({counters : counters});
    

  }
  render() {
    return (
      <>
        <Navbar onZeroItems = { this.getNonZeroItems() }/>
        <Reset onReset = {this.handleReset}/>
        <Counters counters = { this.state.counters } onIncrement = { this.handleIncrement} onDecrement ={ this.handleDecrement} onDelete ={ this.handleDelete } />
      </>
    );
  }
}

export default App;
