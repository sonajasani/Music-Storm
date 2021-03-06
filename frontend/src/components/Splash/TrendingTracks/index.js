import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { openLogin } from "../../../store/modal";
import { getTrendingSongs } from "../../../store/songs";
import "./TrendingTracks.css";

/*********************************************************************************************************************************/


export default function TrendingTracks() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTrendingSongs());
  }, [dispatch]);

  const trendingSongs = useSelector((state) => state.songsRed.trendingSongs);

  return (
    <div className="tr-container">
      <p id="trending-tracks-title">
        Hear what’s trending in the MusicStorm community
      </p>
      <div className="trending-covers-container">
        {trendingSongs?.trendSongs.map((song) => {
          return (
            <div
              className="trending-cover-container"
              key={song.id}
              onClick={() => {
                dispatch(openLogin());
                window.scrollTo(0, 0);
              }}
            >
              <img className="trending-cover" src={song.imgUrl}></img>
              <a className="trending-cover-title">{song.title}</a>
              <a className="trending-cover-artist">{song.artist}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
