import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Joker's Drink Stash
      </header>
      <StashSelector name="NextChef" />
    </div>
  );
}

class StashSelector extends Component {
    render() {
      return <div class="stash-selector">my name is {this.props.name}</div>;
    }
}

export default App;
