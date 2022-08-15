import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DateConverter from '../../DateConverter'
import '../Search.css'

const SearchResults = ({song}) => {
    const audioPlayer = useRef();

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        isPlaying ? audioPlayer?.current?.play() : audioPlayer?.current?.pause()
    }, [isPlaying])

    return (
        <>
            <div className="left-search">
                <div className="search-imagePath">
                    <Link to={`/songs/${song?.id}`}><img src={song.imgUrl}></img></Link>
                </div>
            </div>
            <div className='right-search'>
                <div className='top-right'>
                    <div className='play-pause-search'>
                        <div className='search-play-ctn'>
                            {/* If not playing, play button will display */}
                            {/* If playing, pause button will display */}
                            <button
                                type='button'
                                className='play-pause'
                                onClick={() => setIsPlaying(!isPlaying)}
                                // onChange={isPlaying ? audioPlayer?.current?.play() : audioPlayer?.current?.pause()}
                            >
                                {isPlaying
                                ? <i className="fa-solid fa-circle-pause fa-3x search-pause"></i>
                                : <i className="fa-solid fa-circle-play fa-3x search-play"></i>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="search-track-info">
                        <div className="username-creation-ctn">
                            <div className="search-track-user search-text-color">
                                {song?.User?.username}
                            </div>
                        </div>
                        <div className="search-title-genre-ctn">
                            <div className="search-track-title">
                                <Link to={`/songs/${song?.id}`}>{song.title}</Link>
                            </div>
                            <div className="search-genre search-text-color">
                                #{song.genre}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-trackPath">
                    <audio ref={audioPlayer} src={song.audioFile}></audio>
                </div>
            </div>
        </>
    )

}

export default SearchResults