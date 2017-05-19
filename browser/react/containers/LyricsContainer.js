'use strict';

import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { fetchLyrics } from '../action-creators/lyrics'; // This was a gotcha ({})
import axios from 'axios';

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    console.log('Mounted');
  }

  componentWillUnmount () {
    this.unsubscribe();
    console.log('Unmounted');
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.artistQuery && this.state.songQuery) {
      store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
    }
    /*
    axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    .then(res => res.data)
    .then((data) => {
      store.dispatch(setLyrics(data.lyric));
    })
    .catch(console.error);
    */
  }

  render () {
    return (
      <Lyrics
        text={this.state.text}
        setArtist={this.handleArtistInput}
        artistQuery={this.state.artistQuery}
        setSong={this.handleSongInput}
        songQuery={this.state.songQueru}
        handleSubmit={this.handleSubmit}

      />
    );
  }
}

export default LyricsContainer;
