import React from "react";

export default class Comments extends React.Component {
  state = {
    name: "",
    email: "",
    comment: ""
  };

  change = input => {
    this.setState({
      [input.target.name]: input.target.value
    });
  };

  onSubmit = input => {
    input.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <h3>Comments</h3>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="comment"
            placeholder="Comment"
            value={this.state.comment}
            onChange={input => this.change(input)}
          />
          <br />
          <button onClick={() => this.onSubmit()}>Submit</button>
        </form>
      </div>
    );
  }
}
