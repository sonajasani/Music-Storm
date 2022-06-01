import React, {useEffect} from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOneSong } from "../../store/songs";
import Navigation from "../Navigation";
import "./SongPage.css";


/*****************************************************************************************************************************/


function SongPage({isLoaded}) {

    const { songId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneSong(songId));
    }, [dispatch]);

    const songs = useSelector((state) => state.song.songs);


    return (
        <div>
            <Navigation isLoaded={isLoaded}/>
            <div className="songDetail">
                <h2>{songs?.oneSong.title}</h2>
                <div className="song-artist">
                    <h3>By: {songs?.oneSong.artist}</h3>
                </div>
                <div className="song-description">
                    <h3>Description: {songs?.oneSong.description}</h3>
                </div>
                <div classname="song-image">
                    <img alt="" src={songs?.oneSong.imageFile}></img>
                </div>
                <div className="song-audio">
                <audio
                    className="audio-current-song"
                    controls
                    controlsList="nodownload"
                    src={songs?.oneSong.audioFile}
                ></audio>
                </div>
                <br/>
                <div>
                <button onClick={() => {
                    history.push(`/songs/${songs?.oneSong.id}/edit`);
                  }}
                  >Edit</button>
                </div>
            </div>
        </div>
    )
}


/*****************************************************************************************************************************/

export default SongPage;