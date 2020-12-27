import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

const Player = ({ isPlaying, setIsPlaying, audioRef, songInfo, songs, setSongs, currentSong, setCurrentSong }) => {
    useEffect(() => {
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return { ...song, active: true }
            } else {
                return { ...song, active: false }
            }
        });
        setSongs(newSongs)
    }, [currentSong])
    const skipSongHadler = async (direction) => {
        const currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
        if (direction === 'forward') {
            await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
            songs[(currentSongIndex + 1) % songs.length].active = true;
        }
        if (direction === 'backward') {
            await setCurrentSong(songs[(currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1]);
            songs[(currentSongIndex - 1 < 0) ? songs.length - 1 : currentSongIndex - 1].active = true;
        }
        isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }
    const formatTime = (time) => Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    const dragHandler = e => audioRef.current.currentTime = e.target.value;
    const trackAnimation = { transform: `translateX(${songInfo.animationPercentage}%)` };
    const trackGradient = { background: `linear-gradient(to right, ${currentSong.color[0]} , ${currentSong.color[1]})` };
    return (
        <div className="player">
            <div className="player_time-control">
                <span className="player_start-time">{formatTime(songInfo.currentTime)}</span>
                <div className="track" style={trackGradient}>
                    <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} className="player_seeker" />
                    <div className="animate-track" style={trackAnimation}></div>
                </div>
                <span className="player_end-time">{!songInfo.duration ? "0:00" : formatTime(songInfo.duration)}</span>
            </div>

            <div className="player_controls">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="player_backward" onClick={() => skipSongHadler('backward')} />
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" className="plyer_play" onClick={playSongHandler} />
                <FontAwesomeIcon icon={faStepForward} size="2x" className="player_forward" onClick={() => skipSongHadler('forward')} />
            </div>

        </div>
    );
}
export default Player;