import React, { Component, useState } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import DefaultImg from '../default-img.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
//import { Link } from 'react-router-dom';



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





// Functional component for the modal. 
// Got skeleton from react-bootstrap documentation
function ConfirmationModal() {
  // Moved this a few lines before this function to make it global
  // I want this modal to be triggered when my class component 
  // gets submit pressed
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default class CreateListing extends Component {


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

//        this.multerImages = this.onChangeMulterImages.bind(this);
        this.onChangeMulterImage = this.onChangeMulterImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

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
          listingId: '',
          // This is so i can hide the form on submit
          showForm: true,
          isRedirecting: false
        }
    }

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

    // handles redirect
    handleRedirect = ()=>{
      this.setState({
        isRedirecting: true
      })
    }


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
        e.preventDefault();        
        
        const listing = {
            title: this.state.title,
            description: this.state.description,
            owner: this.state.owner,
            condition: this.state.condition,
            location: this.state.location,
            price: this.state.price,
            category: this.state.category
        }

        this.handleHide();

        // we link this after finishing some front end stuff
        console.log('listing log here');
        console.log(this.state.id);


        axios.post('http://localhost:5000/listings/add', listing)
        .then((data) => {
            if (data.success) {
                console.log('Listing post to listings/add success');
                //alert("listing added woop");
                //console.log('Listing post to listings/add success');
                //console.log(data._id);
            }
        });

                        //this.setState({
                        //  listingId: data.target._id
                        //})

//        axios.get('http://localhost:5000/listings/dootdoot', this.productTitle, listing)
//        .then(res => console.log(res.data))

        //let imageObj = {};

        let imageFormObj = new FormData();

        imageFormObj.append("imageName", "multer-image-" + Date.now());
        imageFormObj.append("imageData", this.state.multerImage);
        imageFormObj.append("productTitle", this.state.title)
        imageFormObj.append("productDescription", this.state.description)

        axios.post('http://localhost:5000/images/uploadmulter', imageFormObj)
            .then((data) => {
                if (data.data.success) {
                alert("Image has been successfully uploaded using multer");

            }
            })
            .catch((err) => {
                alert("Error while uploading image using multer");

            });

        // take user to the listing page for what they posted
        // FIXME: ASAP uncomment this redirect  
        //window.location = '/listings/';
        
        

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
      // this should be this.state.showform not !
      // FIXME: ASAP this for 
      // DEBUG: 
      if (this.state.showForm) {
        return (
          <div>

            <Container>
              <Jumbotron>
                  <h1 className="create-listing-header">Create New Listing</h1>

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

            <ConfirmationModal />
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
                  <Button variant="primary" disabled={this.state.isRedirecting} 
                    onClick={this.handleRedirect} size="lg">
                    {this.state.isRedirecting ? "Redirecting..." : "View my listing"}
                  </Button>{' '}
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

