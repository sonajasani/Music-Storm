import { csrfFetch } from "./csrf";



/********************************************************************************************************/
const SET_COMMENTS = "comments/setComments";

/********************************************************************************************************/

const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const getSongComments = (songId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${songId}`);
  const data = await response.json();
  dispatch(setComments(data.content));
};


export const postComment = (songId, content, commenterId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${songId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      commenterId,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.content));
};


export const deleteComment = (songId, content, commenterId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commenterId,
      songId,
      content,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.content));
};

export const updateComment = (commenterId, songId, content, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      commenterId,
      content,
      songId,
      id,
    }),
  });
  const data = await response.json();
  dispatch(setComments(data.content));
};

const initialState = [];
const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_COMMENTS:
      newState = action.content;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
