import React, { Component } from "react";
export default class AddPlayer extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    //on the handle change comes an event
    const newValue = event.target.value;
    this.setState({
      name: newValue
    });
  };

  render() {
    return (
      <div className="add-player">
        <form>
          <label>
            Name:
            <input type="text" name="name" value />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

// import React, { Component } from "react";
// export default class AddUser extends Component {
//   state = {
//     name: ""
//   }

//   handleChange = event => {
//     //on the handle change comes an event
//     const newValue = event.target.value;
//     this.setState({
//       name: newValue
//     })

//   render() {
//     return (
//       <div className="add-user">
//         <form>
//           <label>
//             Name:
//             <input type="text" name="name" value />
//           </label>
//           <input type="submit" value="Add" />
//         </form>
//       </div>
//       )}
//     }
// };
