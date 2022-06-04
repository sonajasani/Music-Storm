import React, { useState, useEffect } from "react";
import { updateSong, getCurrentSong } from "../../store/songs";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
 
import './EditSongForm.css'




function EditSongForm() {
    
    const { songId } = useParams();
    useEffect(() => {
        dispatch(getCurrentSong(songId));
      }, [dispatch]);
      
    const song = useSelector((state) => state.songsRed.currentSong);

    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [genre, setGenre] = useState(song.genre);
    const [albumName, setAlbumName] = useState(song.album);
    const [albumCover, setAlbumCover] = useState(song.imgUrl);
    const [audioFile, setAudioFile] = useState(song.audioFile);
    const dispatch = useDispatch();
    const history = useHistory();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = {
          title,
          artist,
          genre,
          albumName,
          albumCover,
          audioFile,
        };
        dispatch(updateSong(song));
        history.push(`/profile`);
      };

      return (
        <div className="upload__form__c">
          <div className="upload-form">
            <form onSubmit={handleSubmit}>
              <div id="upload__title">Upload Your Songs Here</div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="upload__inputs"
                required
              />
              <input
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="upload__inputs"
                required
              />
              <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="upload__inputs"
                required
              />
              <input
                type="text"
                placeholder="Album Name"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                className="upload__inputs"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={albumCover}
                onChange={(e) => setAlbumCover(e.target.value)}
                className="upload__inputs"
                required
              />
              {/* <input
                type="file"
                placeholder="Audio/MP3"
                onChange={(e) => setAudioFile(e.target.files[0])}
                className="upload__inputs"
                id="audio__input"
                required
              /> */}
              <button className="uploadBtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
    );
}



export default EditSongForm;

