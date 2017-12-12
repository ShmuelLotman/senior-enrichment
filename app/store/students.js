import axios from 'axios';


const studentState = {
    students: [],
    student: {}
}


const GET_STUDENTS = 'GET_STUDENTS';
const GET_NEW_STUDENT = 'GET_NEW_STUDENT';
const WRITE_NEW_STUDENT = 'WRITE_NEW_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

export const getNewStudent = (student) => ({
    type: GET_NEW_STUDENT,
    student
});

export const deleteStudent = (student) => ({
    type: DELETE_STUDENT,
    student
})

export const updateStudents = (student) => ({
    type: UPDATE_STUDENT,
    student
})
export function fetchStudents() {
    return function thunk(dispatch) {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            const action = getStudents(students)
            dispatch(action)
        })
    }
}


export function postStudent(student) {
    return function thunk(dispatch) {
        return axios.post('/api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            const action = getNewStudent(newStudent)
            dispatch(action)
        })
    }
}

export function removeStudent(student) {
    return function thunk(dispatch) {

        return axios.delete(`/api/students/${student.id}`, {student})
        .then(data => {
            const action = deleteStudent(student)
            dispatch(action)
        })
    }
}
export function UpdateStudent(studentId, newInfo) {
    return function thunk(dispatch) {
        return axios.put(`/api/students/${studentId}`, newInfo)
        .then(data => {
                let student = data.data[0]
            const action = updateStudents(student)
            dispatch(action)
        })
    }
}

const studentReducer = (state = studentState, action) => {
    switch(action.type) {
        case GET_STUDENTS:
        return {
            ...state, 
            students: action.students
        };
        case GET_NEW_STUDENT:
        return {
            ...state,
            students: [...state.students, action.student]
        };
        case DELETE_STUDENT:
        return {
            ...state,
            students: [...state.students.filter(student => student.id !== action.student.id)]
        };
        case UPDATE_STUDENT: 
        return {
            ...state,
            students: [...state.students.filter(student => student.id !== action.student.id).concat(action.student)]
        }
        
        default: 
        return {
            ...state
        }
    }
}
export default studentReducer;