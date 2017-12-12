import React from 'react';
import {cardStyle, btnMargin} from './cardDesign.js';
import { Field, reduxForm } from 'redux-form';

function EditStudentCard(props) {
    const { handleSubmit } = props;
    return (
       
        <form style= {cardStyle} onSubmit={handleSubmit}>
        <h3>Edit Student</h3>
        <div className='form-group'>
           <label htmlFor="firstName">First Name</label>
           <Field name="firstName" className='form-control' component= "input" type="text" label="FirstName"/>
        </div>
        <div className='form-group'>
            <label htmlFor="firstName">Last Name</label>
            <Field name="lastName" className='form-control' component= "input" type="text" label="lastName"/>
        </div>
        <div className='form-group'>
            <label htmlFor="email">Email</label>
            <Field name="email" className='form-control' component= "input" type="text" label="Email"/>
        </div>
        <div className='form-group'>
            <label htmlFor="GPA">G.P.A</label>
            <Field name="gpa" className='form-control' component= "input" type="text" label="GPA"/>
        </div>
        <div className='form-group'>
        <label htmlFor="campusId">Campus Id</label>
        <Field name="campusId" className='form-control' component= "input" type="text" label="campusId"/>
       </div>
       <button type="submit" style={btnMargin} className = 'btn btn-primary form-group' >Submit</button>
      </form>
    )
}
EditStudentCard = reduxForm({
    // a unique name for the form
    form: 'editStudent'
  })(EditStudentCard)
  
  export default EditStudentCard