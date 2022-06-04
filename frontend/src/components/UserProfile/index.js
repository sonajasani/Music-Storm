import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useParams, NavLink } from "react-router-dom";
import { getUserSongs, deleteSong } from "../../store/songs";

import './UserProfile.css'


function UserProfile() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state)=> state.session.user)
    const userId = user.id

    useEffect(()=> {
       dispatch(getUserSongs(userId));
    }, [dispatch]);

    const userSongs = useSelector((state) => state.songsRed.userSongs)

    console.log(userSongs)

    return (
        <div>
            <div  className='profile-page-welcome'>
                <h1>Welcome Back</h1>
            </div>
            <div className="songslist">Your Songs list....</div>
            <div classname="user-songs">
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
                                        onClick={() => dispatch(deleteSong(song.id, user.id))}
                                    >Delete
                                    </button>
                                    <button onClick={() => history.push('/update')}>
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