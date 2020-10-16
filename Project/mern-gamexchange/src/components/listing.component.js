import React, { Component } from 'react';
import axios from 'axios';
import { CardDeck, Card, Row, Col, Container } from 'react-bootstrap';

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
const Listing = props => (
    // returns a Table Row
/*         <Card>
        <Card.Img variant="top" src="https://source.unsplash.com/100x100/?boardgame" />
        <Card.Body>
        <Card.Title>{props.listing.title}</Card.Title>
        <Card.Text>
          ${props.listing.price}
        </Card.Text>
        <Card.Text>
            {props.listing.location} 
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Posted by: {props.listing.owner}</small>
        </Card.Footer>
      </Card> */
   


      <tr>
      <td>{props.listing.title}</td>
      <td>{props.listing.owner}</td>
      <td>{props.listing.condition}</td>
      <td>{props.listing.location}</td>
      <td>{props.listing.price}</td>
      <td>{props.listing.up_for_trade ? 'Yes' : 'No'} </td>
      </tr>
)
      {/* 
      FIXME: This works, i just need a small checkmark image
      <td>{props.listing.up_for_trade ? (<img src="https://source.unsplash.com/1280x720/daily/?boardgame" alt="Placeholder" />) : ''}</td> 
      </tr>
      
      */}
      
      {/* 
        This link is from react router dom, it links to a certain URL, which loads another
        component on the page.
        props.exercise component isnt complete yet. 
        Then we have a delete link, which is on click. deleteExercise is passed in from the 
        other component. (that can be found below)

        You SHOULD use a button and style it as a link for the delete portion
        But we don't do that here because our href isn't doing anything we can do that later
      */}


    
  

  // This is implemented as a class component
export default class ProductList extends Component {
    // will show every product that has been added to the db

    //create constructor to initialize the state with empty
    // exercises array
    constructor(props) {
        super(props);


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

    productList() {
        // .map will return something for every element in the array
        // for every element, currentexercise is going to return a component
        // the component is going to be a row of a table
        // We pass in 3 props, 
        return this.state.listings.map(currentlisting => {
          return <Listing listing={currentlisting} key={currentlisting._id} trade={currentlisting.up_for_trade}/>;
        })
    } 

    render() {
          return (
/*             <div style={{width: "auto"}}>
            <Container fluid>
                <Row>
    
                    <Col>
                        <h3>Search results:</h3>
                    </Col> 
                </Row>            
                <Row>
            {this.productList().map(i => (
              <Col xs="4">
                {this.productList()}
              </Col>
            ))}
          </Row>
              </Container>
              </div> */
   



                       <div>
              <h3>Search results:</h3>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Condition</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Up for trade</th>

                  </tr>
                </thead>
                <tbody>
                  { this.productList() }
                </tbody>
              </table>
            </div> 
       )
        }
    }