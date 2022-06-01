import { csrfFetch } from "./csrf";

/**********************************************************************************************************************************/

const LOAD_SONGS = "songs/LOAD_SONGS";
const GET_ONE_SONG = "songs/GET_ONE_SONG";
const ADD_ONE_SONG = "songs/ADD_ONE_SONG";
const TRENDING_SONG = "songs/TRENDING_SONG";
const LOAD_USER_SONGS = "songs/LOAD_USER_SONGS";
const UPDATE_SONG = 'songs/UPDATE_SONG';
const REMOVE_SONG = 'songs/REMOVE_SONG';


/**********************************************************************************************************************************/

const getSongs = (songs) => {
    return {
      type: LOAD_SONGS,
      songs,
    };
};

const getSong = (song) => {
  return {
    type: GET_ONE_SONG,
    song,
  };
};

const addOneSong = (song) => {
    return {
      type: ADD_ONE_SONG,
      song,
    };
};

const trending = (songs) => {
  return {
    type: TRENDING_SONG,
    songs,
  };
};

const loadUserSongs = (songs, userId) => ({
  type: LOAD_USER_SONGS,
  songs,
  userId,
});

const updateSongAction = (song) => ({
  type: UPDATE_SONG,
  song,
});

const removeSong = (songId, userId, nextSongId) => ({
  type: REMOVE_SONG,
  songId,
  userId,
  nextSongId,
});


/**********************************************************************************************************************************/


export const getAllSongs = () => async (dispatch) => {
    const response = await csrfFetch("/api/songs");
    if (response.ok) {
        const list = await response.json();
        dispatch(getSongs(list));
        return response;
    }
};


export const getOneSong = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`);
  
      const Song = await response.json();
      dispatch(getSong(Song));
      return response;
};


export const addSong = (song) => async (dispatch) => {
    const { title, artist, description, album, imageFile, audioFile } = song;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("description", description);
    formData.append("album", album);
    formData.append("imageFile", imageFile);
    formData.append("audioFile", audioFile);
  
    console.log(formData);
  
    const response = await csrfFetch(`/api/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    if(response.ok){
        const data = await response.json();
        dispatch(addOneSong(data.song));
        return data;
    }
};


export const gethUserSongs = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/songs`);
  const { songs } = await response.json();
  dispatch(loadUserSongs(songs, userId));

  return songs;
};


export const updateSong = (song) => async (dispatch) => {
    const { title, artist, description, album, imageFile, audioFile } = song;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("description", description);
    formData.append("album", album);
    formData.append("imageFile", imageFile);
    formData.append("audioFile", audioFile);

    const response = await fetch(`/api/songs/${song.id}`, {
      method: "put",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  
    if (response.ok) {
      const song = await response.json();
      dispatch(updateSongAction(song));
      return song;
    }
}


export const deleteSong = (songId, userId, nextSongId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${songId}`, {
        method: "DELETE",
        body: JSON.stringify({ userId, songId }),
    });
  
    if (response.ok) {
      dispatch(removeSong(songId, userId, nextSongId));
      return response;
    }
};

export const getTrendingSongs = () => async (dispatch) => {
  const response = await fetch("/api/songs/trendings");
  if(response.ok){
    const data = await response.json();
    dispatch(trending(data));
    return data
  }
};

/***************************************************************************************************/ 

const initialState = { songs: null};



const songsReducer = (state = initialState, action) => {
 
    let newState;

    switch (action.type) {
        case LOAD_SONGS:
            newState = Object.assign({}, state, { songs: action.songs });
            return newState;
        case GET_ONE_SONG:
            newState = Object.assign({}, state, { songs: action.song });
            return newState;
        case ADD_ONE_SONG:
            newState = Object.assign({}, state, { songs: action.songs });
            return newState;
        case TRENDING_SONG:
            newState = Object.assign({}, state, { songs: action.songs });
            return newState;
        case REMOVE_SONG:
            newState = Object.assign({}, state, {songs: action.songs});
            delete newState[action.songID]
            return newState;
        case UPDATE_SONG:
            return {
              ...state,
              [action.song.id]: {
                ...action.song?.id,
                ...action.song,
              }
            };
        case LOAD_USER_SONGS:
            newState = Object.assign({}, state, { songs: action.songs });
            return newState;
        default:
            return state;
    }
}


export default songsReducer;
