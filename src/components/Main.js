import React from 'react';
import './Main.css';
import Card from './Card';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <Card />
      </div>
    );
  }
}

export default Main;