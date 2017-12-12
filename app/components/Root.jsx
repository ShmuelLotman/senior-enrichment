import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, {fetchStudents, fetchCampuses} from '../store';
import Students from './Students';
import Campuses from './Campuses';
import IntroComponent from './introComponent';


export default class Root extends Component {
  componentDidMount() {
    const campusThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusThunk)
    store.dispatch(studentsThunk)
  }
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component= {IntroComponent} />
        <Route exact path="/students" component = {Students} />
        <Route exact path="/campuses" component = {Campuses} />
      </Switch>
      </div>
    )
  }
}