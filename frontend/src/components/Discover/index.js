import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";

import Navigation from "../Navigation";
import { getAllSongs } from "../../store/songs";
import "./Discover.css";

/*********************************************************************************************************************************/

export default function Discover({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllSongs());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (sessionUser) history.push("/discover");
    else history.push("/");
  }, [sessionUser]);

  const songs = useSelector((state) => state.songsRed.songs);

  return (
    <div id="top-discover">
      <Navigation isLoaded={isLoaded} />
      <h1 id="discover-title">Your Favorite Songs On MusicStorm</h1>
      <div className="discover-tracks-container">
        <div className="discover-songs">
          {songs?.allSongs.map((song) => {
            return (
              <div
                className="discover-cover-container"
                onClick={() => {
                  history.push(`/songs/${song.id}`);
                  window.scrollTo(0, 0);
                }}
                key={song.id}
              >
                <a className="discover-cover-title">{song.title}</a>
                <img className="discover-cover" src={song.imgUrl}></img>
                <audio
                  className="audio-discover"
                  controls
                  controlsList="nodownload"
                  src={song.audioFile}
                ></audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
