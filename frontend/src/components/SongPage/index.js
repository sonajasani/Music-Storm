import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOneSong } from "../../store/songs";
import Navigation from "../Navigation";
import "./SongPage.css";


/*****************************************************************************************************************************/


function SongPage({isLoaded}) {

    const { songId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneSong(songId));
    }, [dispatch]);

    const song = useSelector((state) => state.song.songs);
    const user = useSelector((state) => state.session.user);

    return (
        <div>
            <Navigation isLoaded={isLoaded}/>
            <div id="song-banner-info">
                <div id="song-banner-top">
                  <h2 id="song-banner-artist">{song?.songs.artist}</h2>
                  <h3 id="song-banner-created-at"></h3>
                </div>

                <div id="song-banner-bottom">
                  <h1 id="song-banner-title">{song?.songs.title}</h1>
                  <h3 id ="song-banner-description">{song?.songs.description}</h3>
                  <div id="player-container">
                    <audio
                      className="audio-current-song"
                      controls
                      controlsList="nodownload"
                      src={song?.songs.audioFile}
                    ></audio>
                  </div>
                </div>
              </div>
        </div>
    )
}


/*****************************************************************************************************************************/

export default SongPage;