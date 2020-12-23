/* eslint-disable */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

const Player = ({ isPlaying, setIsPlaying, audioRef, songInfo }) => {

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying)
        }
    }
    const formatTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
    }

    return (
        <div className="player">
            <div className="player_time-control">
                <span className="player_start-time">{formatTime(songInfo.currentTime)}</span>
                <input type="range" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} className="player_seeker" />
                <span className="player_end-time">{formatTime(songInfo.duration)}</span>
            </div>

            <div className="player_controls">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="player_backward" />
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" className="plyer_play" onClick={playSongHandler} />
                <FontAwesomeIcon icon={faStepForward} size="2x" className="player_forward" />
            </div>

        </div>
    );
}
export default Player;