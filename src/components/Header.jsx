import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
          <h1 className="App-title">#checkitoff {this.props.name}</h1>
      </header>
      );
  }
}

export default Header
