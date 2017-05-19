'use strict';

import { SET_LYRICS } from '../constants';
import axios from 'axios';

const setLyrics = function(text) {
  return ({
    type: SET_LYRICS,
    lyric: text
  });
};

export const fetchLyrics = function(artist, song) {
  return function(dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
    .then(res => res.data)
    .then(data => {
      dispatch(setLyrics(data.lyric));
    })
    .catch(console.err);
  };
};
