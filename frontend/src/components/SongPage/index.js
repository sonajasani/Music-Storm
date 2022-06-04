import React, { useEffect } from "react";
import Navigation from "../Navigation";
import Comment from "../Comment";
import CommentForm from "./CommentForm";
import "./SongPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentSong } from "../../store/songs";
import { getSongComments } from "../../store/comments";
import { Redirect } from "react-router-dom";

export default function SongPage({ isLoaded }) {
  const { songId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSong(songId));
    dispatch(getSongComments(songId));
  }, [dispatch]);

  const song = useSelector((state) => state.songsRed.currentSong);
  const comments = useSelector((state) => state.comments);
  const user = useSelector((state) => state.session.user);



  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      <div id="song-page-container">
        <div>
          <div id="song-show-page">
            <div id="song-banner">
              <div id="song-banner-info">
              <h2 id="song-banner-album">Album: {song?.currentSong.album}</h2>
                <div id="song-banner-top">
                  <h2 id="song-banner-artist">Artist: {song?.currentSong.artist}</h2>
                </div>
                <div id="song-banner-bottom">
                  <h1 id="song-banner-title">Title: {song?.currentSong.title}</h1>
                  <div id="player-container">
                    <audio
                      className="audio-current-song"
                      controls
                      controlsList="nodownload"
                      src={song?.currentSong.audioFile}
                    ></audio>
                  </div>
                </div>
              </div>

              <div>
                <img id="current-song-img" src={song?.currentSong.imgUrl} />
              </div>
            </div>

            <div id="song-comments">
              <div id="song-comments-container">
                <CommentForm songId={songId} user={user} />
                <div id="song-comments-index"></div>
              </div>
              <div id="song-desc-and-comments">
                {comments &&
                  comments?.map((comment) => (
                    <Comment
                      comment={comment}
                      key={comment.id}
                      user={user}
                      songId={songId}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
