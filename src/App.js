import React, { useState } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import data from './data';
import './styles/app.scss';

function App() {
    const [song, setSong] = useState(data());
    const [currentSong, setcurrentSong] = useState(song.filter(song => (song.active) ? song : '')[0]);
    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player currentSong={currentSong} />
        </div>
    );
}

export default App;