import { csrfFetch } from "./csrf";

const GET_ALL_SONGS = "songs/getAllSongs";
const GET_TWELVE_SONGS = "songs/getTwelveSongs";
const GET_ONE_SONG = "songs/getOneSong";
const UPDATE_A_SONG = "songs/UPDATE_A_SONG";
const REMOVE_SONG = "songs/REMOVE_SONG";
const USER_SONGS = "songs/GET_USER_SONGS"

const getSongs = (songs) => {
  return {
    type: GET_ALL_SONGS,
    songs,
  };
};
const getTwelveSongs = (songs) => {
  return {
    type: GET_TWELVE_SONGS,
    songs,
  };
};

const getOneSong = (song) => {
  return {
    type: GET_ONE_SONG,
    song,
  };
};

const editSong = (song) => {
  return {
    type: UPDATE_A_SONG,
    song,
  };
};

const removeSong = (songId, userId) => ({
  type: REMOVE_SONG,
  songId,
  userId,
});

const userSongs = (songs) => ({
  type: USER_SONGS,
  songs
})



export const postSong = (song) => async (dispatch) => {
  //const { title, artist, genre, albumName, albumCover, audioFile } = song;
  console.log(song);
  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("artist", artist);
  // formData.append("genre", genre);
  // formData.append("album", albumName);
  // formData.append("imgUrl", albumCover);
  // formData.append("audioFile", audioFile);

  //console.log(formData);

  const response = await csrfFetch(`/api/songs/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({song})
  });
  const data = await response.json();
  dispatch(getAllSongs());
  return data;
};

export const getAllSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  const data = await res.json();
  dispatch(getSongs(data));
  return res;
};

export const getCurrentSong = (id) => async (dispatch) => {
  const res = await fetch(`/api/songs/${id}`);
  const data = await res.json();
  dispatch(getOneSong(data));
  return res;
};

export const getTrendingSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs/trend");
  const data = await res.json();

  dispatch(getTwelveSongs(data));
  return res;
};


export const updateSong = (song, songId, userId) => async (dispatch) => {


  const res = await csrfFetch(`/api/songs/${songId}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song,
      songId,
      userId
    })
  });
  const data = await res.json();
  dispatch(editSong(data));
  return data;
};



export const deleteSong = (songId, userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/delete` , {
    method: 'DELETE',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ userId, songId })
  })
  const data = await res.json();
  dispatch(removeSong({data}));
}

export const getUserSongs = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/${userId}/songs`);
  const songs = await response.json();
  dispatch(userSongs(songs));

  return songs;
};




const initialState = { songs: null, trendingSongs: null, currentSong: null, userSongs: null};
const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SONGS:
      newState = Object.assign({}, state, { songs: action.songs });
      return newState;
    case GET_TWELVE_SONGS:
      newState = Object.assign({}, state, { trendingSongs: action.songs });
      return newState;
    case GET_ONE_SONG:
      newState = Object.assign({}, state, { currentSong: action.song });
      return newState;
    case UPDATE_A_SONG:
      newState = Object.assign({}, state, { currentSong: action.song });
      return newState;
    case REMOVE_SONG:
      newState = Object.assign({}, state, { currentSongs: action.song });
      return newState;
    case USER_SONGS:
      newState = Object.assign({}, state, { userSongs: action.songs });
      return newState;
    default:
      return state;
  }
};



export default songsReducer;
