import React, { Component } from 'react';

import './App.css';
import {apiconnecter} from './actions'
import MApp from './components/mindex'
import { connect } from 'react-redux';

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
