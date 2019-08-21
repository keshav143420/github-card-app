import React from 'react';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.title}
      </div>);
  }
}

export default Main;