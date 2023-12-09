import React, { useState } from "react";

class Counter extends React.Component {
  // count = 0
  // Inc = ()=>{
  //   this.count++
  //   console.log(this.count)
  // }

  state = {
    count: 0,
  };

  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    let Dec = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      }

    };
    return (
      <div className="main">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>

        <div className="buttons">
          <button onClick={this.Inc}>+</button>
          <button onClick={Dec}>-</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Counter;

// export default function Counter() {
//   let [count,setCount] = useState(0)
//   const Inc = () => {
//     setCount(count + 1);
//   };

//   const Dec = () => {
//     if(count>0){
//       setCount(count - 1);
//     }
//   };

//   const Reset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="main">
//       <h1>Counter App</h1>
//       <h1>{count}</h1>

//       <div className="buttons">
//         <button onClick={Inc}>+</button>
//         <button onClick={Dec}>-</button>
//         <button onClick={Reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
