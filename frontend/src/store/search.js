
import { csrfFetch } from "./csrf";

const LOAD_SEARCHED_SONGS = 'search/loadSearchedSongs'

export const loadSearchedTracks = (songs) => {
    return {
        type: LOAD_SEARCHED_SONGS,
        songs
    }
}

export const getSearchedTracks = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/search/${payload.keyword}`)

    const songs = await response.json()
    dispatch(loadSearchedTracks(songs))
}

const initialState = { entries: {}, isLoading: true }

const searchReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_SEARCHED_SONGS:
            newState = { ...state, entries: { }}
            action.tracks.forEach(track => {newState.entries[track.id] = track})
            return newState
        default:
            return state
    }
}

export default searchReducer