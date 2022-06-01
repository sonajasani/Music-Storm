import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { updateSong } from "../../store/songs";
import "./EditSongForm.css";

/***************************************************************************************************************************/


function EditSongForm() {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [description, setDescription] = useState("");
    const [album, setAlbum] = useState("");
    const [imageFile, setimageFile] = useState("");
    const [audioFile, setAudioFile] = useState(null);
    const { songId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const song = {
          title,
          artist,
          description,
          album,
          imageFile,
          audioFile,
        };
        dispatch(updateSong(song));
        history.push(`/discover`);
      };

    return (
        <>
            <div className="uploadformpage-container">
                <h1>Upload your songs here</h1>
                <div className="uploadForm-container">
                    <form onSubmit={handleSubmit}>
                        <div classname="upload-form">
                            <input className="upload__inputs"
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required>
                            </input>
                            <br/>
                            <input
                                type="text"
                                placeholder="Artist"
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                                className="upload__inputs"
                                required
                            ></input>
                            <br/>
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="upload__inputs"
                                required
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Album Name"
                                value={album}
                                onChange={(e) => setAlbum(e.target.value)}
                                className="upload__inputs"
                                required
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Album Cover Image URL"
                                value={imageFile}
                                onChange={(e) => setimageFile(e.target.value)}
                                className="upload__inputs"
                                required
                            />
                            <br/>
                            <input
                                type="file"
                                placeholder="Audio/MP3"
                                onChange={(e) => setAudioFile(e.target.files[0])}
                                className="upload__inputs"
                                id="audio__input"
                                required
                            />
                            <br/>
                            <button className="uploadBtn" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


/***************************************************************************************************************************/


export default EditSongForm;