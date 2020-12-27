import React from 'react';

const LibrarySong = ({ song, songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo }) => {
    const selectSongHandler = async () => {

        if (song.id === currentSong.id) {
            return false;
        } else {
            const newSongs = songs.map(song => {
                if (song.id === currentSong.id) {
                    return { ...song, active: true }
                } else {
                    return { ...song, active: false }
                }
            });
            setSongs(newSongs);
            const selectedSong = songs.filter(selected => selected.id === song.id)[0];
            selectedSong.active = true;
            await setCurrentSong(selectedSong);
            isPlaying ? audioRef.current.play() : audioRef.current.pause()
        }
    }
    return (
        <div className={song.active ? 'library_song library_song--active' : 'library_song'} onClick={selectSongHandler} >
            <img src={song.cover} alt={song.name} />
            <div className="library_song_desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div >
    );
}

export default LibrarySong;