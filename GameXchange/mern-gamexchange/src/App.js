import React from 'react';
/* Bootstrap CSS framework just makes styling easier. */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import AboutUs from "./components/about-us.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/> 
        <Route path="/about" component={AboutUs} />
        <Route path="/viewlog" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;