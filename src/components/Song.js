import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song">
            <img src={currentSong.cover} alt={currentSong.name} className="song_cover" />
            <div className="song_title">{currentSong.name}</div>
            <div className="song_artist">{currentSong.artist}</div>
        </div>
    );
}
export default Song;