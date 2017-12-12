import axios from 'axios';


const campusState = {
    campuses: [],
    campus: {}
}


const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';
const WRITE_NEW_CAMPUS = 'WRITE_NEW_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export const getCampuses = (campuses) => ({
    type: GET_CAMPUSES,
    campuses
})

export const getNewCampus = (campus) => ({
    type: GET_NEW_CAMPUS,
    campus
});

export const deleteCampus = (campus) => ({
    type: DELETE_CAMPUS,
    campus
})

export const updateCampus = (campus) => ({
    type: UPDATE_CAMPUS,
    campus
})
export function fetchCampuses() {
    return function thunk(dispatch) {
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            const action = getCampuses(campuses)
            dispatch(action)
        })
    }
}


export function postCampus(campus) {
    return function thunk(dispatch) {
        return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => {
            const action = getNewCampus(newCampus)
            dispatch(action)
        })
    }
}

export function removeCampus(campus) {
    return function thunk(dispatch) {

        return axios.delete(`/api/campuses/${campus.id}`, {campus})
        .then(data => {
            const action = deleteCampus(campus)
            dispatch(action)
        })
    }
}
export function UpdateCampus(campusId, newInfo) {
    return function thunk(dispatch) {
        return axios.put(`/api/campuses/${campusId}`, newInfo)
        .then(data => {
                let campus = data.data[0]
            const action = updateCampus(campus)
            dispatch(action)
        })
    }
}

const campusReducer = (state = campusState, action) => {
    switch(action.type) {
        case GET_CAMPUSES:
        return {
            ...state, 
            campuses: action.campuses
        };
        case GET_NEW_CAMPUS:
        return {
            ...state,
            campuses: [...state.campuses, action.campus]
        };
        case DELETE_CAMPUS:
        return {
            ...state,
            campuses: [...state.campuses.filter(campus => campus.id !== action.campus.id)]
        };
        case UPDATE_CAMPUS: 
        return {
            ...state,
            campuses: [...state.campuses.filter(campus => campus.id !== action.campus.id).concat(action.campus)]
        }
        
        default: 
        return {
            ...state
        }
    }
}
export default campusReducer;