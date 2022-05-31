import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import  { getOneSong } from "../../store/songs";
import './SongPage.css';

/*******************************************************************************************************************/


function SongPage() {
    const dispatch = useDispatch();
    const { songId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const song = useSelector((state) => state.song[songId]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        if (song) {
          setLoading(false);
          return;
        }
    
        (async () => {
          try {
            await dispatch(getOneSong(+songId));
          } catch (err) {
            console.log('error fetching song', err);
          } finally {
            setLoading(false);
          }
        })();
    }, [dispatch, songId, song]);

    if (!song) {
        return null;
    }

    return(
        !isLoading && (
            <></>
        )
    )
}


/*******************************************************************************************************************/

export default SongPage;