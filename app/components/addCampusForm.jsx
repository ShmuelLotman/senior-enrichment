import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {btnMargin} from './cardDesign.js'

function AddCampusForm(props) {
    const { handleSubmit, campusArr } = props;
    
    return (
      <form onSubmit={handleSubmit}>
      <h2 style={{fontSize: '40px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>Add New Campus</h2>
        <div className='form-group'>
          <label style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}} htmlFor="firstName"> Name</label>
          <Field style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.1)'}} name="name" className='form-control' component= "input" type="text" label="FirstName"/>
        </div>
        <div className='form-group'>
          <label style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}} htmlFor="image"> Image Url</label>
          <Field style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.1)'}} name="imageUrl" className='form-control' component= "input" type="text" label="Imageurl"/>
        </div>
        <button type="submit" style={{border: '.5px solid white', backgroundColor: 'rgba(0,0,0,0.1)'}} className = 'btn btn-primary form-group' >Submit</button>
      </form>

    )
  }
  AddCampusForm = reduxForm({
    // a unique name for the form
    form: 'addStudent'
  })(AddCampusForm)
  
  export default AddCampusForm