import React, {Component} from 'React';
import {aElemStyle, cardStyle, buttonStyle, titleStyle} from './cardDesign';
import store, { postStudent, removeStudent, fetchStudents, UpdateStudent } from '../store';
import EditStudentCard from './editStudentCard.jsx';
export default class CardItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showEditCard: 'false'
        }
        this.enableEditCard = this.enableEditCard.bind(this);
    }
    enableEditCard() {
        this.setState({
            showEditCard: true
        })
    }
    render() {
        return this.state.showEditCard === 'false' ? (
             <div>
             <img src="/images/campus-default.jpg" style={{width: '100%', marginTop: '10px'}}></img>
             <h1 style={{minHeight: '90px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>{this.props.name}</h1>
             <div style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}  className="title">{this.props.email}</div>
             <p style={titleStyle} ></p>
             <div style={{margin: '24px 0'}} >
               <a style = {aElemStyle} href="#"><i className="fa fa-dribbble"></i></a> 
               <a style = {aElemStyle} href="#"><i className="fa fa-twitter"></i></a>  
               <a style = {aElemStyle} href="#"><i className="fa fa-linkedin"></i></a>  
               <a style = {aElemStyle} href="#"><i className="fa fa-facebook"></i></a> 
            </div>
            <p><button style={buttonStyle} onClick={
                this.enableEditCard
            }><p style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>Edit</p></button></p>
            <p><button style={buttonStyle} onClick={() => {
                 const deleteById = removeStudent(this.props);
                 store.dispatch(deleteById)
               }
             }><p style={{fontSize: '20px', fontFamily: 'Raleway, sans-serif', fontWeight:'200', color: 'white'}}>Delete</p></button></p>
           </div> 
         ) : (
                 <EditStudentCard onSubmit={(values) => {
                     const update = UpdateStudent(this.props.id, values)
                     store.dispatch(update)
                     this.setState({showEditCard: 'false'})
                 }}/>
             )
    }    
}




