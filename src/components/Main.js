import React from 'react';
import './Main.css';
import CardList from './CardList';
import Form from './Form';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default Main;