import React, { useState, useEffect } from "react";
import { updateSong, getCurrentSong } from "../../store/songs";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
 
import './EditSongForm.css'

/*********************************************************************************************************************************/

export default function EditSongForm() {
    // console.log("songId", props)
   const { songId } = useParams();
  //  let songId = 5;
  
   const song = useSelector((state) => state.songsRed.currentSong);

   console.log("songId", songId, song);
   const [title, setTitle] = useState('');
   const [artist, setArtist] = useState('');
   const [genre, setGenre] = useState('');
   const [albumName, setAlbumName] = useState('');
   const [albumCover, setAlbumCover] = useState('');
   const [audioFile, setAudioFile] = useState('');
   const [errors, setErrors] = useState([]);
   const dispatch = useDispatch();
   const history = useHistory();
   
   
   useEffect(() => {
       dispatch(getCurrentSong(songId));
    }, [dispatch]);
    

    useEffect(()=>{
      if(song?.currentSong){
        setTitle(song?.currentSong?.title)
        setArtist(song?.currentSong?.artist)
        setGenre(song?.currentSong?.genre)
        setAlbumName(song?.currentSong?.album)
        setAlbumCover(song?.currentSong?.imgUrl)
        setAudioFile(song?.currentSong?.audioFile)
      }
    },[song?.currentSong])

    useEffect(() => {
      const err = [];
      if(!(title.length)) err.push('Please provide song Title')
      else if(title.length > 50)  err.push('Title must not be more than 50 characters')
  
      if(!(artist.length)) err.push('Please provide Artist name')
      else if(artist.length > 50)  err.push('Artist name must not be more than 50 characters')
      
      if(!(genre.length)) err.push('Please provide Genre')
      else if(genre.length > 50)  err.push('Genre must not be more than 20 characters')
  
      if(!(albumName.length)) err.push('Please provide Album Name')
      else if(albumName.length > 50)  err.push('Album Name must not be more than 50 characters')
  
      if(!(albumCover.length)) err.push('Please provide Image Url')
  
      if(!(audioFile.length)) err.push('Please provide Image Url')
      setErrors(err)
    }, [title, artist, genre, albumName, albumCover, audioFile])
  

    const users = useSelector(state => state.session.user)
    const userId = users.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = {
          title,
          artist,
          genre,
          album : albumName,
          imgUrl: albumCover,
          audioFile,
          userId,
        };
        dispatch(updateSong(song, songId, userId));
        if (errors.length) return alert(`Cannot Submit`);
        else history.push(`/profile`);
      };

      return (
        song?.currentSong &&
        <div className="upload__form__c">
          <div className="upload-form">
            <form onSubmit={handleSubmit}>
              <div id="upload__title">Update Your Songs Here</div>
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
               <input
                type="text"
                placeholder="Audio Url"
                value={audioFile}
                onChange={(e) => setAudioFile(e.target.value)}
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
            <ul className="errors">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
    );
}


