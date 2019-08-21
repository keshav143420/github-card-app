import React from 'react';

class Form extends React.Component {
  usernameInput = React.createRef();
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.usernameInput.current.value);

  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Github username" ref={this.usernameInput} required/>
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}
export default Form;