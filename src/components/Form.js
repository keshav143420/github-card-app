import React from 'react';

class Form extends React.Component {
  state = {
    userName: ''
  }
  usernameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);

  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            value={this.state.userName}
            onChange={(event)=>this.setState({userName:event.target.value})}
            required/>
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}
export default Form;