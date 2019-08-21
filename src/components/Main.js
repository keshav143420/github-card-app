import React from 'react';
import './Main.css';
import CardList from './CardList';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <CardList />
      </div>
    );
  }
}

export default Main;