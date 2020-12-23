import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, currentSong, setcurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, libraryStatus }) => {
    return (
        <div className={libraryStatus ? 'library_container active' : 'library_container'}>
            <h1>Library</h1>
            { songs.map(song =>
                <LibrarySong
                    key={song.id}
                    song={song}
                    songs={songs}
                    currentSong={currentSong}
                    setcurrentSong={setcurrentSong}
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                    songInfo={songInfo}
                />)
            }
        </div>
    );
}

export default Library;