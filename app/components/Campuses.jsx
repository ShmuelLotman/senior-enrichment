import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import store, {removeCampus, postCampus} from '../store';
import {connect} from 'react-redux';
import CardItem from './CardItem';
import {cardStyle} from './cardDesign.js'
import {campusImg} from './campusDesign.jsx';
import AddCampusForm from './addCampusForm.jsx';
const mapStateToProps = (state) => {
    return {
        students: state.students.students,
        campuses: state.campuses.campuses
    }
}

//className='w-100 p-3'
function Campuses (props) {
     const studentsArr = props.students;
     const styleObj = {color: 'white', fontSize: '40px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', textAlign: 'center'};
        return (
            <div className="container-fluid" style={{background: 'linear-gradient(to right, #000000, #434343)'}}>
            <Link to="/students"><h4 style={styleObj}>(Click Here For Students)</h4></Link>
            <h1 style={styleObj}>Welcome To The Campuses Page</h1>
          
            <div style={{background: 'linear-gradient(to right, #606c88, #3f4c6b)', marginBottom: '20px'}} className="card text-center h-500 container">
                
                <AddCampusForm onSubmit={values => {
                    const action = postCampus(values);
                    store.dispatch(action)
                }}/>
            </div>
              {
                  
                  props.campuses.map(campus => {
                    return (
                        <div key={campus.id} style={{ background: 'linear-gradient(to right, #606c88, #3f4c6b)', marginBottom: '20px'}} className="card text-center h-500 container">
                        <a
                        onClick={() => {
                            const deleteById = removeCampus(campus);
                            store.dispatch(deleteById)
                        }}
                        style={{color: 'white', fontFamily: 'Raleway, sans-serif', fontSize: '20px', fontWeight: '200', display: 'inlineBlock', float: 'right', margin: '5px 5px 0 0'}}>X</a>
                        <h1 className="card-header" style={{fontSize: '40px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>
                          {campus.name}
                        </h1>
                        <div >
                          <h4 className="card-title" style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>Students In Campus: {studentsArr.filter(student => student.campusId === campus.id).length}</h4>
                          {
                            studentsArr.filter(stdnt => stdnt.campusId === campus.id).map(student => {
                            return (
                                <div key={student.id} style={cardStyle} className="col-sm-4">
                                    <CardItem addStudent="false" key={student.fullName}  id={student.id} name= {student.fullName} email={student.email} />
                                </div>
                                  )
                            })
                        }
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          );
    
}
const CampusesContainer = connect(mapStateToProps)(Campuses)
export default CampusesContainer;