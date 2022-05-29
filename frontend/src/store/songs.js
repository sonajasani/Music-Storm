import { csrfFetch } from "./csrf";

/**********************************************************************************************************************************/

const LOAD = "songs/LOAD";
const ADD_ONE = "songs/ADD_ONE";
const TRENDING = "songs/TRENDING";

/**********************************************************************************************************************************/

const getSongs = (songs) => {
    return {
      type: LOAD,
      songs,
    };
};

const addOneSong = (song) => {
    return {
      type: ADD_ONE,
      song,
    };
};

const trending = (songs) => {
  return {
    type: TRENDING,
    songs,
  };
};

/**********************************************************************************************************************************/

export const getAllSongs = () => async (dispatch) => {
    const response = await csrfFetch("/api/songs");
    if (response.ok) {
        const list = await response.json();
        dispatch(getSongs(list));
    }
};


export const getOneSong = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`);
  
    if (response.ok) {
      const Song = await response.json();
      dispatch(addOneSong(Song));
    }
};


export const addSong = (song) => async (dispatch) => {
    const { title, artist, description, album, imageFile, audioFile } = song;
    console.log(song);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("description", description);
    formData.append("album", album);
    formData.append("imageFile", imageFile);
    formData.append("audioFile", audioFile);
  
    console.log(formData);
  
    const response = await csrfFetch(`/api/songs/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    if(response.ok){
        const data = await response.json();
        dispatch(getAllSongs());
        return data;
    }
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
      dispatch(addOneSong(song));
      return song;
    }
}


export const deleteSong = () => async (dispatch) => {
    const response = await csrfFetch(`/api/songs`, {
        method: "DELETE"
    });
  
    if (response.ok) {
      const Song = await response.json();
      dispatch(getSongs(Song));
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

const initialState = { songs: null, song: null, trend: null };



const songsReducer = (state = initialState, action) => {
 
    let newState;

    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { songs: action.songs });
            return newState;
        case ADD_ONE:
            newState = Object.assign({}, state, { song: action.song });
            return newState;
        case TRENDING:
            newState = Object.assign({}, state, { trend: action.songs });
            return newState;
        default:
            return state;
    }
}


export default songsReducer;
