import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Now that we add this exercise component, we have 2 components in this file.
// exercise, and exercisesList
//The difference between functional react component and a class component is the 
// lack of state and life cycle methods. 

// If all you need to do is accept props and return jsx, you should use functional component
// instead of a class component

//Most of our components, we make a separate file. But this is a small component, 
// we can just leave it here.

//This is implemented as a functional react component
// It accepts the props passed into it, which are exercise, deleteexercise, and key
const Exercise = props => (
    // returns a Table Row
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      {/* 
        we only use 0,10 substring here because we just want the front part of the date 
      */}
      <td>{props.exercise.date.substring(0,10)}</td>
      {/* 
        This link is from react router dom, it links to a certain URL, which loads another
        component on the page.
        props.exercise component isnt complete yet. 
        Then we have a delete link, which is on click. deleteExercise is passed in from the 
        other component. (that can be found below)

        You SHOULD use a button and style it as a link for the delete portion
        But we don't do that here because our href isn't doing anything we can do that later
      */}
      <td>
        <Link to={"/edit/"+props.exercise._id}>
          <button type="button">
            edit
          </button>
        </Link>
        |  
        <button onClick={() => { props.deleteExercise(props.exercise._id) }}>
          delete
        </button>
      </td>
    </tr>
  )

  // This is implemented as a class component
export default class ExercisesList extends Component {
    // will show every exercise that has been added to the db,
    // as well as be the homepage of the app

    //create constructor to initialize the state with empty
    // exercises array
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        };
    }

    //get the list of exercises from the db 
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                // unlike create-exercise where we only want one data field,
                // Here, we want all the data fields for exercises, and put into 
                // exercises array
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        // delete request
        // id is exact route that we created in the back end
        axios.delete('http://localhost:5000/exercises/'+id)
          .then(response => { console.log(response.data)});
          //after deleting from db, we also need to delete from
          // whats being displayed to user
          // table with rows for each exercise. we want to remove an item from table
    
        //set state of exercises, so react automatically updates the page with 
        // that new state
        this.setState({
            //this is just a way to remove the exercise we are deleting.
            // if the id doesnt match, then send it back
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        // .map will return something for every element in the array
        // for every element, currentexercise is doing to return a component
        // the component is going to be a row of a table
        // We pass in 3 props, 
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
    } 

    render() {
        return (
            <div>
              <h3>Logged Exercises</h3>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 
                    We still need to implement this exerciseList method
                    it's going to return the rows of the table
                  */}  
                  { this.exerciseList() }
                </tbody>
              </table>
            </div>
        )
    }
}