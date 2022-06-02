import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";

import './UserProfile.css'


function UserProfile() {

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        if (sessionUser) history.push("/profile");
        else history.push("/");
    }, [sessionUser]);
    

    return (
        <>
            <h1>Welcome Back</h1>
        </>
    )
}


export default UserProfile;