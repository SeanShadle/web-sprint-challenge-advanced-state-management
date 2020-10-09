import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_ERROR, ADD_SMURF, ADD_SMURF_SUCCESS, DELETE_SMURF } from '../actions'

const initialState = {
    smurfData: [],
    isFetching: false,
    error: '',
    updated: false
}

export const reducer = (state = initialState, action) => {
    console.log(state)

    switch(action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                isFetching: true,
                error: '',
                updated: false
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isFetching: false,
                error: '',
                updated: false
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                updated: false,
            }
        case ADD_SMURF:
            return {
                ...state,
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                updated: true
            }
        case DELETE_SMURF:
            return {
                ...state,
                smurfData: state.smurfData.filter(val => val.id !== action.id)
            }
        default:
            return state
    }
}