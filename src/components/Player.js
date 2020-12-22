import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
const Player = () => {
    return (
        <div className="player">
            <div className="player_time-control">
                <span className="player_start-time">start time</span>
                <input type="range" name="" className="player_seeker" />
                <span className="player_end-time">end time</span>
            </div>

            <div className="player_controls">
                <FontAwesomeIcon icon={faStepBackward} size="2x" className="player_backward" />
                <FontAwesomeIcon icon={faPlay} size="2x" className="player_play" />
                <FontAwesomeIcon icon={faStepForward} size="2x" className="player_forward" />
            </div>
        </div>
    );
}
export default Player;