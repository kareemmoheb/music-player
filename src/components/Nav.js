import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
    const libraryStatusHandler = () => {
        setLibraryStatus(!libraryStatus)
    }
    return (
        <nav className="nav">
            <h1>Waves</h1>
            <button className={libraryStatus ? 'active' : ''} onClick={libraryStatusHandler}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
}

export default Nav;