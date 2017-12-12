import React from 'react';
import { Link } from 'react-router-dom';
import store, {postStudent} from '../store';
import {connect} from 'react-redux';
import CardItem from './CardItem';
import {cardStyle} from './cardDesign';
import AddStudentForm from './addStudentForm.jsx';
const mapStateToProps = (state) => {
    return {
        students: state.students.students,
        campuses: state.campuses.campuses
    }
}
function Students(props) {
    const styleObj = {color: 'white', fontSize: '40px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', textAlign: 'center'};
    return (
      <div className="container" style={{background: ' linear-gradient(to right, #141e30, #243b55)', width: '100vw'}}>
        <Link to="/campuses"><h4 style={styleObj}>(Click Here For Campuses)</h4></Link>
        <h1 style={styleObj}>WELCOME TO THE STUDENTS PAGE</h1>
       
            <AddStudentForm onSubmit={(values) => {
            const addStudent = postStudent(values);
            store.dispatch(addStudent)
            }} />
            {
                props.students.map(student => {
                return (
                    <div key={student.id} className="card" style= {cardStyle} className="col-sm-9">
                        <CardItem addStudent="false" key={student.fullName}  id={student.id} name= {student.fullName} email={student.email} campusBelongsTo={props.campus} />
                    </div>
                      )
                })
            }
                
      </div>
    )
}
const StudentsContainer = connect(mapStateToProps)(Students)
export default StudentsContainer;