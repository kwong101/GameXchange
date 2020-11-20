import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import DefaultImg from '../default-img.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import { Link } from 'react-router-dom';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


// base api url being used
//const API_URL = "http://localhost:3000";


/* const Listing = props => (
  // returns a Table Row
  <tr>
      <td>{props.listing.title}</td>
      <td>{props.listing.description}</td>
      <td>{props.listing.condition}</td>
      <td>{props.listing._id}</td>

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
) */

class CreateListing extends Component {


    constructor(props) {
        super(props);

        // binds this to each of the methods, so the this is referring
        // to the right things
        this.onChangeTitle = this.onChangeTitle.bind(this);

        // need to make this automatic via logged in user
        this.onChangeOwner = this.onChangeOwner.bind(this);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCondition = this.onChangeCondition.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
//        //new
        this.listingId = ""
//        this.multerImages = this.onChangeMulterImages.bind(this);
        this.onChangeMulterImage = this.onChangeMulterImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        // new: to get redirect to work
/*         this.redirectTimeout = null;
 */

        this.state = {
          title: '',
          description: '',
          condition: '',
          location: '',
          price: '',
          category: '',
          images: '',
          multerImage: '',
          // FIXME: this listingId thing never got implemented
          // This is so i can hide the form on submit
          showForm: true,
          isRedirecting: false
        }
    }

    // new: creating variable to hold the listing id in this function onlyu

//    // gets called right before loading a page
//    componentDidMount() {
//        axios.get('http://localhost:5000/users/')
//            .then(response => {
//                if (response.data.length > 0) {
//                    this.setState({
//                        users: response.data.map(user => user.username),
//                        username: response.data[0].username
//                    })
//                }
//            })
//    }

      /* new: adding componentdidmount funct so that i can delay
      redirect to the new url, view-listing url thing 
      DIDNT WORK, going to try new method */
/*       componentDidMount() {
        const {history} = this.props;
        this.redirectTimeout = setTimeout(() => {
          history.push('/')
        }, 5000);
      }

      componentWillUnmount() {
        clearTimeout(this.redirectTimeout);
      } */


      // 
      handleRedirect = event => {
        // FIXME: gotta clean this stuff up later lol
        // just commented out the line below bc im not using 
        // push anymore. I'm not using this to redirect, 
        // now I'm redirecting from the create-listing component.

        // So i probably dont even need this handleRedirect anymore,
        // nor do we need the else statement at the end of this file.
        // That else statement down there is what i used to change
        // what is displayed after submitting post.

        //const { history: { push } } = this.props;
        this.setState({
          isRedirecting: true,
/*           listingId: event._id.toString()
 */        })

        console.log('handling redirect...')
        console.log('Title is: ' + this.state.title)
        console.log('Listing ID is: ' + this.props.match.params.id)
        
        event.preventDefault();
        // setTimeout(()=>push('/view-listing/' + this.state.listingId), 3000);
      }


    // handles redirect
    // THIS WAS WORKING, comment ou the above funct if stops
    // Then, uncomment the below funct

    /* handleRedirect = ()=>{
      this.setState({
        isRedirecting: true
      })
    } */


    // to show and hide the form
    handleShow = ()=>{
      this.setState({
          showForm: true
      })
    }

    handleHide = () =>{
        this.setState({
            showForm: false
        })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeOwner(e) {
        this.setState({
            owner: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeCondition(e) {
        this.setState({
            condition: e.target.value
        })
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }


    onChangeMulterImage(e) {
        this.setState({
        multerImage: e.target.files[0]
        });
    }


    // on submit, create listing object and then send to listing db
    // create image object and send to image db

    onSubmit(e) {
        //prevents the page from being reloaded when clicking submit
        e.preventDefault();        
        
        const listing = {
            title: this.state.title,
            description: this.state.description,
            owner: this.state.owner,
            condition: this.state.condition,
            location: this.state.location,
            price: this.state.price,
            category: this.state.category,
            // new: added this to listing
            listingId: this.state.listingId
        }

        this.handleHide();

        // this doesnt print listingid
        console.log('listing log here');
        console.log(listing.listingId);

        axios.post('http://localhost:5000/listings/add', listing)
        .then((data) => {
          var listing_data = JSON.stringify(data.data);
          console.log('DATAAAA = ' + listing_data);
          console.log('id field = ' + listing_data.substring(8,32))
          console.log('title = ' + this.state.title)
          this.listingId = listing_data.substring(8,32)
          
          //  set this equal here ASAP: this.owner


          //adding image stuff
          let imageFormObj = new FormData();
          imageFormObj.append("imageName", "multer-image-" + Date.now());
          imageFormObj.append("imageData", this.state.multerImage);
          imageFormObj.append("listingId", this.listingId)
  
          axios.post('http://localhost:5000/images/uploadmulter', imageFormObj)
              .then((data) => {
                  if (data.data.success) {
                  console.log(data);
              }
              })
              .catch((err) => {
                  console.log(err);
              });

          this.props.history.push('/listings/' + this.listingId);
        });

        

                        //this.setState({
                        //  listingId: data.target._id
                        //})

//        axios.get('http://localhost:5000/listings/dootdoot', this.productTitle, listing)
//        .then(res => console.log(res.data))

        //let imageObj = {};
        
/*
        let imageFormObj = new FormData();

        imageFormObj.append("imageName", "multer-image-" + Date.now());
        imageFormObj.append("imageData", this.state.multerImage);
        imageFormObj.append("listingId", this.listingId)
       

        axios.post('http://localhost:5000/images/uploadmulter', imageFormObj)
            .then((data) => {
                if (data.data.success) {
                console.log(data);
            }
            })
            .catch((err) => {
                console.log(err);
            });
    */
    }


  // function to upload image once it has been captured

    uploadImage(e, method) {
//      let imageObj = {};
//
//      let imageFormObj = new FormData();
//
//      imageFormObj.append("imageName", "multer-image-" + Date.now());
//      imageFormObj.append("imageData", e.target.files[0]);


//      (this.imageForms).push(imageFormObj)

      // stores a readable instance of
      // the image being uploaded using multer
        this.setState({
        multerImage: URL.createObjectURL(e.target.files[0])
        });
//
//      axios.post('http://localhost:5000/images/uploadmulter', imageFormObj)
//        .then((data) => {
//          if (data.data.success) {
//            alert("Image has been successfully uploaded using multer");
//            this.setDefaultImage("multer");
//          }
//        })
//        .catch((err) => {
//          alert("Error while uploading image using multer");
//          this.setDefaultImage("multer");
//        });
    }


    render() {
      const { loggedInUser } = this.props.auth;
      


      // this should be this.state.showform not !
      // FIXME: ASAP this for 
      // DEBUG: 
      if (this.state.showForm) {
        
        return (
          <div>

            <Container>
              <Jumbotron>
                  <h1 className="create-listing-header">Create New Listing</h1>
                  
                  {/* <h5>
                    {loggedInUser.name.split(" ")[0]}
                  </h5> */}
                  
                  <Form onSubmit={this.onSubmit}>

                    <Form.Group controlId="formGroupTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Title" 
                        value={this.state.title || ''} // (undefined || '') = ''
                        onChange={this.onChangeTitle}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupOwner">
                      <Form.Label>Owner</Form.Label>
                      
                      {/* checking if i can print username here */}
{/*                       <Form.Control readOnly placeholder={loggedInUser.name.split(" ")[0] || ''} />
 */}                        {/*  value={user.name.split(" ")[0] || ''} // (undefined || '') = ''
                        onChange={this.onChangeOwner} />  */}
                      

                      <Form.Control type="text" placeholder="Owner" 
                        value={this.state.owner || ''} // (undefined || '') = ''
                        onChange={this.onChangeOwner}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" placeholder="Description" 
                        rows={4}
                        value={this.state.description || ''} // (undefined || '') = ''
                        onChange={this.onChangeDescription}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupCondition">
                      <Form.Label>Condition</Form.Label>
                      <Form.Control as="select" custom 
                        value={this.state.condition || ''} // (undefined || '') = ''
                        onChange={this.onChangeCondition}
                      >
                        <option>Brand new</option>
                        <option>Excellent</option>
                        <option>Great</option>
                        <option>Good</option>
                        <option>Worn</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGroupLocation">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Location" 
                        value={this.state.location || ''} // (undefined || '') = ''
                        onChange={this.onChangeLocation}
                      />
                    </Form.Group>

                    <Form.Group className="input-group" controlId="formGroupPrice">
                      <Form.Label>Price</Form.Label>
                      
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="prepend-cash-sign">$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Price" 
                          value={this.state.price || ''} // (undefined || '') = ''
                          onChange={this.onChangePrice}
                        />
                      </InputGroup>
                    </Form.Group>
                    
                    <Form.Group controlId="formGroupCategory">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select" custom 
                        value={this.state.category || ''} // (undefined || '') = ''
                        onChange={this.onChangeCategory}
                      >
                        <option>Puzzle</option>
                        <option>Board game</option>
                        <option>Card Game</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGroupImages">
                      <Form.File 
                        className="process__upload-btn"
                        id="file-upload"
                        label="Images"
                        onChange={this.onChangeMulterImage}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn btn-primary">
                      Post Listing
                    </Button>
                  </Form>
              </Jumbotron>
            </Container>

          </div>
        )
        
      } else {
        // Hide the form, and now only display "Posting..."
        // And a redirect message "go now" or "back to listings" or somethin
        return (
          <div>

            <Container>
              <Jumbotron>
                <h1 className="create-listing-header">New listing posted!</h1>
                
                <div className="mb-2">
                  {/* <Button variant="primary" disabled={this.state.isRedirecting} 
                    onClick={this.handleRedirect} size="lg">
                    {this.state.isRedirecting ? "Redirecting..." : "View my listing"}
                  </Button>{' '} */}
                </div>
                <div>
                  <Button variant="secondary" size="sm">
                    Post another listing
                  </Button>
                </div>
              </Jumbotron>
            </Container>

          </div>
        )



      }
    }
        
}

CreateListing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(CreateListing);