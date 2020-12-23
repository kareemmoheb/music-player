import React, { useState, useRef } from 'react';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';
import './styles/app.scss';

function App() {
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
    const audioRef = useRef(null);
    const [songs] = useState(data());
    const [currentSong, setcurrentSong] = useState(songs.filter(song => (song.active) ? song : '')[0] || checkCurrentSong());
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    const timeUpdateHandler = (e) => {
        const duration = e.target.duration;
        const currentTime = e.target.currentTime;
        setSongInfo({
            currentTime: currentTime,
            duration: duration,
        });
    }
    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Library songs={songs} currentSong={currentSong} setcurrentSong={setcurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} libraryStatus={libraryStatus} />
            <Song currentSong={currentSong} />
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} />
            <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler}></audio>
        </div>
    );
}

export default App;