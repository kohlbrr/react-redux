'use strict';

import React from 'react';
import store from '../store';

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    console.log('Mounted');
  }

  componentWillUnmount () {
    this.unsubscribe();
    console.log('Unmounted');
  };

  render () {
    return (
      <h1>I SHOULD BE BETTER!</h1>
    );
  }
}

export default LyricsContainer;
