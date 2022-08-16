
import { csrfFetch } from "./csrf";

const LOAD_SEARCHED_SONGS = 'search/loadSearchedSongs'

export const loadSearchedSongs = (songs) => {
    return {
        type: LOAD_SEARCHED_SONGS,
        songs
    }
}

export const getSearchedSongs = (payload) => async (dispatch) => {
    console.log(payload, "....payload................")
    const response = await csrfFetch(`/api/search/${payload.keyword}`)

    console.log(response, "....searchresponse............")

    const songs = await response.json()
    dispatch(loadSearchedSongs(songs))
}

const initialState = { entries: {}, isLoading: true }

const searchReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_SEARCHED_SONGS:
            newState = { ...state, entries: { }}
            action.songs.forEach(song => {newState.entries[song.id] = song})
            return newState
        default:
            return state
    }
}

export default searchReducer