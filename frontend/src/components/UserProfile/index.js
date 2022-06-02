import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useParams } from "react-router-dom";
import { getUserSongs } from "../../store/songs";

import './UserProfile.css'


function UserProfile({isLoaded}) {

    const {userId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getUserSongs(userId));
    }, [dispatch]);


    const user = useSelector((state)=> state.session.user)

    return (
        <div className='profile-page-welcome'>
            <h1>Welcome Back</h1>
            <div classname="user-songs">
                {user?.userSongs.map((song)=> {
                    return (
                        <div
                            className="profile-cover-container"
                            onclick={() => {
                                history.pushState(`songs/${song.id}`);
                                window.scrollTo(0,0);
                            }}
                            key={song.id}
                        >
                            <a classname="user-song-title">{song.title}</a>
                            <img className="profile-song-image" alt="" src={song.imgUrl}></img>
                            <audio className="profile-song-audio"
                            controls
                            controlsList="nodownload"
                            src={song.audioFile}>
                            </audio>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}



export default UserProfile;