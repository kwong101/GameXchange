import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//
//
//
//
//
//
//
// IMPORTANT
//
// This is just an old version of view-listing.component.js
/* At the time of this being copied, 
view-listing.component.js is a component that
lists out (in an ugly way) all current listings.
These are just some of the basics needed for when we 
fix up the browse page later.

Also think about changing naming scheme? 
Rn the browse page is technically on the /listings/ url
*/
//
//
//



//The difference between functional react component and a class component is the 
// lack of state and life cycle methods. 

// If all you need to do is accept props and return jsx, you should use functional component
// instead of a class component

// Usually make these diff files but it's small so whatever

//This is implemented as a functional react component
// It accepts the props passed into it, which are exercise, deleteexercise, and key
const Browse = props => (
    // returns a Table Row
    <tr>
        <td>{props.listing.title}</td>
        <td>{props.listing.description}</td>
        <td>{props.listing.condition}</td>
        {/*<td>{props.listing.location}</td>
        <td>{props.listing.price}</td>
        <td>{props.listing.category}</td>
        <td>{props.listing.images}</td> */}

        <td>  
        <Link to={"/edit/"+props.listing._id}>
            <button type="button">
            edit
            </button>
        </Link>
        |  
        <button onClick={() => { props.deleteListing(props.listing._id) }}>
            delete
        </button>
        </td>
    </tr>
)

  // This is implemented as a class component
export default class ViewListing extends Component {
    // will show every exercise that has been added to the db,
    // as well as be the homepage of the app

    //create constructor to initialize the state with empty
    // exercises array
    constructor(props) {
        super(props);

        this.deleteListing = this.deleteListing.bind(this);

        this.state = {
            listings: []
        };
    }

    //get the list of exercises from the db 
    componentDidMount() {
        axios.get('http://localhost:5000/listings/')
            .then(response => {
                // unlike create-exercise where we only want one data field,
                // Here, we want all the data fields for exercises, and put into 
                // exercises array
                this.setState({ listings: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteListing(id) {
        // delete request
        // id is exact route that we created in the back end
        axios.delete('http://localhost:5000/listings/'+id)
            .then(response => { console.log(response.data)});
          //after deleting from db, we also need to delete from
          // whats being displayed to user
          // table with rows for each exercise. we want to remove an item from table
    
        //set state of exercises, so react automatically updates the page with 
        // that new state
        this.setState({
            //this is just a way to remove the exercise we are deleting.
            // if the id doesnt match, then send it back
            listings: this.state.listings.filter(el => el._id !== id)
        })
    }

    listingList() {
        // .map will return something for every element in the array
        // for every element, currentexercise is going to return a component
        // the component is going to be a row of a table
        // We pass in 3 props, 
        return this.state.listings.map(currentlisting => {
            return <Browse listing={currentlisting} deleteListing={this.deleteListing} key={currentlisting._id}/>;
        })
    } 

    render() {
        return (
            <div>
                <h3>Listings List</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Condition</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    We still need to implement this exerciseList method
                    it's going to return the rows of the table
                    */}  
                    { this.listingList() }
                </tbody>
                </table>
            </div>
        )
    }
}