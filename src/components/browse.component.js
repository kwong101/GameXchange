import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

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
const BrowseConst = props => (
    // returns a Table Row
    
    <tr>
        <td>
          <Link to= {"/listings/"+props.listing._id}>
            {props.listing.title}
          </Link>
        </td>
        <td>{props.listing.description}</td>
        <td>{props.listing.condition}</td>
        <td>{props.listing.location}</td>
        {/* <td>{props.listing.price}</td>
        <td>{props.listing.category}</td>
        <td>{props.listing.images}</td>  */}

        <td>  
        <Link to={"/message/"}>
              <button type="button">
              Send Message
              </button>
          </Link>
          
          |  

          <Link to={"/edit/"+props.listing._id}>
              <button type="button">
              Edit
              </button>
          </Link>
          
          |  

          <button onClick={() => { props.deleteListing(props.listing._id) }}>
              Delete
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
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            listings: [],
            query: "",
            search_results: []
        };

    }

    onChangeQuery(e) {
        this.setState({
            query: e.target.value
        })
    }

    onChangeListings(e) {
        this.setState({
            listings: e.target.value
        })
    }

    handleHide = () =>{
        this.setState({
            showForm: false
        })
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
            return <BrowseConst  listing={currentlisting} deleteListing={this.deleteListing} key={currentlisting._id}/>;
        })
    } 

    onSubmit(e) {
        //prevents the page from being reloaded when clicking submit
        e.preventDefault();        
        
        const query = this.state.query;

        console.log("this is query:");
        console.log(query);

        

        //trying the formdata way as advised, doesnt work stil
        var queryObj = new FormData();
          queryObj.append("user_query", query);

        this.handleHide();

        // var query1 = Object.keys(this.state.query).map(function(key) {
        //     return encodeURIComponent(key) + '=' + encodeURIComponent(this.state.query[key])
        // }).join('&')

        queryObj = {"query" : this.state.query}

        axios.post('http://localhost:5000/listings/browse', queryObj, {headers:{"Content-Type" : "application/json"}})
          .then((data) => {
            console.log('WOOT')
            var listing_data = JSON.stringify(data.data);
            console.log(listing_data)
            
          //console.log(listing_data);
          //this.onChangeListings(listing_data);
          
          this.setState({ listings: data.data })
          console.log(this.state.listings)
          

        })
        .catch((error) => {
            console.log('this is the error')
            console.log(error);
        });
    }

    render() {
        return (
          <div className="outer-browse">
            <div className="inner-browse">

            <Container className="browse-container">
            
            <h3 className="browse-listing-title">Browse Listings</h3>

              <Form inline onSubmit={this.onSubmit}>

                <div className="browse-search-form">

                  <Form.Control type="text" 
                      placeholder="Search listings..."
                      value={this.state.query } // (undefined || '') = ''
                      onChange={this.onChangeQuery}
                      className="mb-2 mt-2"
                  />
                  <Button variant="primary" type="submit" className="mx-2 mb-2 mt-2 btn btn-primary">
                      Search
                  </Button>
                  <Button variant="info" className="mr-2 mb-2 mt-2">Filters</Button>
{/*                   <DropdownButton id="dropdown-info-button" title="Filters" variant="info">
                    <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Trade/Sale Status</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">Price</Dropdown.Item>
                  </DropdownButton> */}
                  <Button variant="secondary" onClick={() => window.location.reload()}>Clear filters</Button>
                </div>
              </Form>

                <Table striped bordered hover>
                  <thead className="thead-light">
                      <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Condition</th>
                      <th>Location</th>
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
                </Table>
            </Container>
            </div>
            </div>
        )
    }
}