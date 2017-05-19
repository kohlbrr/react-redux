'use strict';

import React from 'react';


export default function(props) {
  const {
    text,
    setArtist,
    artistQuery,
    setSong,
    songQuery,
    handleSubmit
  } = props;

  const artistChange = event => {
    setArtist(event.target.value);
  };

  const songChange = event => {
    setSong(event.target.value);
  };

  return (
    <div id="lyrics">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={artistQuery} placeholder="Artist" onChange={artistChange}/>
          <input type="text" value={songQuery} placeholder="Song" onChange={songChange}/>
        </div>
        <pre>{text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
  );
}
