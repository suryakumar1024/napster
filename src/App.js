import React, { Component } from 'react';
import {apiconnecter} from './actions'
import { connect } from 'react-redux';

import MApp from './components/mindex'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MApp />
        <button onClick={this.props.onClick}>Get Songs for me</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {dispatch(apiconnecter())},
});

export default connect(null,mapDispatchToProps)(App);
