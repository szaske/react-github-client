import React, { Component } from 'react';
import '../styles/App.css';
import 'react-tippy/dist/tippy.css';
import RepoList from './RepoList';

class App extends Component {
  render() {
    return <RepoList />
  }
}

export default App;
