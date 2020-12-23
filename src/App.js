import React, { useState, useRef } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import data from './data';
import './styles/app.scss';

function App() {
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const timeUpdateHandler = (e) => {
        const duration = e.target.duration;
        const currentTime = e.target.currentTime;
        setSongInfo({
            currentTime: currentTime,
            duration: duration,
        });
    }

    const [songs, setSong] = useState(data());
    // check if there is active in our data
    const checkCurrentSong = () => {
        let currentSong;
        songs.map((song) => {
            if (!song.active) {
                songs[0].active = true;
            }
            currentSong = songs.filter(song => (song.active) ? song : '')[0];
            return currentSong;
        })
        return currentSong;
    }
    const [currentSong, setcurrentSong] = useState(songs.filter(song => (song.active) ? song : '')[0] || checkCurrentSong());
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="App">
            <Library songs={songs} currentSong={currentSong} setcurrentSong={setcurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} />
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} />
            <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}></audio>
        </div>
    );
}

export default App;