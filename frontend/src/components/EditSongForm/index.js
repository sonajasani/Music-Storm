import React, { useState, useEffect } from "react";
import { updateSong, getCurrentSong } from "../../store/songs";
import { useDispatch, useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
 
import './EditSongForm.css'




function EditSongForm() {
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
        history.push(`/profile`);
      };

      return (
        song?.currentSong &&
        <div className="edit__form__c">
          <div className="edit-form">
            <form onSubmit={handleSubmit}>
              <div id="edit__title">Upload Your Songs Here</div>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="edit__inputs"
                required
              />
              <input
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="edit__inputs"
                required
              />
              <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="edit__inputs"
                required
              />
              <input
                type="text"
                placeholder="Album Name"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                className="edit__inputs"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={albumCover}
                onChange={(e) => setAlbumCover(e.target.value)}
                className="edit__inputs"
                required
              />
               <input
                type="text"
                placeholder="Audio Url"
                value={audioFile}
                onChange={(e) => setAudioFile(e.target.value)}
                className="edit__inputs"
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
              <button className="editBtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
    );
}



export default EditSongForm;

