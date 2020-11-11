import { 
    GET_ALL_PLANETS,
    SET_FILMS_DATA,
    SET_RESIDENTS_DATA, 
    SET_DETAIL_DATA
} from './actionTypes';

export const getPlanetsDataSuccess = (count, next, previous, results) => ({
    type: GET_ALL_PLANETS,
    payload: {count, next, previous, results}
})

export const setFilmsData = (films) => ({
    type: SET_FILMS_DATA,
    payload: {films}
})

export const setResidentsData = (residents) => ({
    type: SET_RESIDENTS_DATA,
    payload: {residents}
})

export const setDetailData = (data) => ({
    type: SET_DETAIL_DATA,
    payload: {data}
})