import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {cardStyle, btnMargin} from './cardDesign';


function AddStudentForm(props) {
    const { handleSubmit } = props;
    const styleObj = {color: 'white', fontSize: '18px', fontFamily: 'Raleway, sans-serif', fontWeight:'200'}
    return (
      <div className="card" style= {cardStyle} className="col-sm-4"> 
      <form onSubmit={handleSubmit}>
      <h3 style={styleObj}>Add New Student</h3>
        <div className='form-group'>
          <label style={styleObj} htmlFor="firstName">First Name</label>
          <Field name="firstName" className='form-control' component= "input" type="text" label="FirstName"/>
        </div>
        <div className='form-group'>
          <label style={styleObj} htmlFor="lastName">Last Name</label>
          <Field className='form-control' name="lastName" component="input" type="text" label="Last Name"/>
        </div>
        <div className='form-group'>
          <label style={styleObj}  htmlFor="email">Email</label>
          <Field name="email" className='form-control'  component="input" type="email" label="Email"/>
        </div>
        <div className='form-group'>
          <label style={styleObj} htmlFor="gpa">GPA</label>
          <Field name="gpa"  className='form-control' component="input" type="number" label="GPA"/>
        </div>
        <div className='form-group'>
          <label style={styleObj} htmlFor="campusId">Campus Id</label>
          <Field name="campusId"  className='form-control' component="input" type="number" label="Campus Id" />
        </div>
        <button type="submit" style={btnMargin} className = 'btn btn-primary form-group' >Submit</button>
      </form>
      </div>

    )
  }
  AddStudentForm = reduxForm({
    // a unique name for the form
    form: 'addStudent'
  })(AddStudentForm)
  
  export default AddStudentForm