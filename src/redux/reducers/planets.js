import { 
    GET_ALL_PLANETS,
    SET_FILMS_DATA,
    SET_RESIDENTS_DATA,
    SET_DETAIL_DATA
} from '../actions/actionTypes';
import { initialPlanets } from '../initialState';

export default function Planets(state = initialPlanets, action) {
    switch (action.type) {
        case GET_ALL_PLANETS: {
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                results: action.payload.results
            }
        }
        case SET_FILMS_DATA: {
            return {
                ...state,
                films: [...action.payload.films]
            }
        }
        case SET_RESIDENTS_DATA: {
            return {
                ...state,
                residents: [...action.payload.residents]
            }
        }
        case SET_DETAIL_DATA: {
            delete action.payload.data['action']
            return {
                ...state,
                detail: action.payload.data
            }
        }
        default:
            return state;
    }
}