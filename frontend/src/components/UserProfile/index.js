import React, {useEffect, useNavigate} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useParams } from "react-router-dom";
import { getUserSongs, deleteSong } from "../../store/songs";
// import history from '../../history';

import './UserProfile.css'


function UserProfile() {

    const dispatch = useDispatch();
    const history = useHistory();
//    const navigate = useNavigate();
    const user = useSelector((state)=> state.session.user)
    const userId = user.id

    // const navigateUpdate = () => {
    //     navigate('/update')
    // }
    const editSongById = (song, user_id) => {
        // navigate('/update',)
        history.push(`/update/${song.id}`)
    }

    useEffect(()=> {
       dispatch(getUserSongs(userId));
    }, [dispatch]);

    const userSongs = useSelector((state) => state.songsRed.userSongs)

    console.log(userSongs)
    const deleteSongById = (id, user_Id) =>{
        dispatch(deleteSong(id, user_Id))
        setTimeout(() => {
            dispatch(getUserSongs(user_Id));
        }, 1000);
    }
    return (
        <div>
            <div  className='profile-page-welcome'>
                <h1>Welcome Back</h1>
            </div>
            <div className="songslist">Your Songs list....</div>
            <div className="user-songs">
                {userSongs?.userSongs.map((song) => {
                    return (
                        <div>
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
                            {user?.id === song.userId && (
                                <div className="edit-delete-button">
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteSongById(song.id, user.id)}
                                    >Delete
                                    </button>
                                    <button 
                                    onClick={() => editSongById(song, user.id)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}



export default UserProfile;