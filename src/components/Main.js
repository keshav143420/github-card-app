import React from 'react';
import './Main.css';
import CardList from './CardList';
import Form from './Form';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
    console.log(this.state.profiles);
  }
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default Main;