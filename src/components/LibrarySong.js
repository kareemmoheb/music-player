import React from 'react';

const LibrarySong = ({ song, songs, currentSong, setcurrentSong, isPlaying, setIsPlaying, audioRef, songInfo }) => {
    const selectSongHandler = (e) => {

        if (song.id === currentSong.id) {
            return false;
        } else {
            songs.map(song => song.active = false);
            // setIsPlaying(false);
            const selectedSong = songs.filter(selected => selected.id === song.id)[0];
            selectedSong.active = true;
            setcurrentSong(selectedSong);

            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        audioRef.current.play();
                        setIsPlaying(true);
                        console.log(songInfo)
                    })
                }
            }
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