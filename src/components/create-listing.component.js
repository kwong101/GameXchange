import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DefaultImg from '../default-img.jpg';


// base api url being used
const API_URL = "http://localhost:3000";


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
            listingId: ''
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

        // we link this after finishing some front end stuff
        console.log(listing);


        axios.post('http://localhost:5000/listings/add', listing)
        .then((data) => {
            if (data.data.success) {
                alert("listing added woop");
                console.log(data._id);
//
            }
        });

                        //this.setState({
                        //  listingId: data.target._id
                        //})

//        axios.get('http://localhost:5000/listings/dootdoot', this.productTitle, listing)
//        .then(res => console.log(res.data))

        let imageObj = {};

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
        window.location = '/listings/';
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
        return (
        <div>
            <h3>Create New Listing </h3>
            <form onSubmit={this.onSubmit}>

            <div className="form-group">
                <label>Title: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
            </div>

            <div className="form-group">
                <label>Owner: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.owner}
                    onChange={this.onChangeOwner}
                    />
            </div>

            <div className="form-group">
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
            </div>

            <div className="form-group">
                <label>Condition: </label>
                <select defaultValue="Select one" value={this.state.condition} onChange={this.onChangeCondition}>
                            <option condition="Select one">Select one</option>
                            <option condition="New">New</option>
                            <option condition="Excellent">Excellent</option>
                            <option condition="Great">Great</option>
                            <option condition="Good">Good</option>
                            <option condition="Worn">Worn</option>
                        </select>
            </div>

            <div className="form-group">
                <label>Location: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    />
            </div>

            <div className="form-group">
                <label>Price: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
            </div>


            <div className="form-group">
                <label>Category: </label>
                <select defaultValue="Select one" value={this.state.category} onChange={this.onChangeCategory}>
                            <option category="Select one">Select one</option>
                            <option category="Puzzle">Puzzle</option>
                            <option category="Board Game">Board Game</option>
                            <option category="Card Game">Card Game</option>
                            <option category="Other">Other</option>
                        </select>
            </div>

            <div className="image-container">
                <label>Images: </label>
                <input  type="file"
                    required
                    className="process__upload-btn"

                    onChange={this.onChangeMulterImage}
                    />
            </div>

            <div className="form-group">
                <input type="submit" value="Post Listing" className="btn btn-primary" />
            </div>
            </form>
        </div>
        )

            {/* <Container>
            <Jumbotron>
                <h1 className="create-listing-header">Create New Listing</h1>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" 
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group> */}

                  {/* <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Description" 
                      rows={4}
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupCondition">
                    <Form.Label>Condition</Form.Label>
                    <Form.Control as="select" custom 
                      value={this.state.condition}
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
                      value={this.state.location}
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
                          value={this.state.price}
                          onChange={this.onChangePrice}
                        />
                      </InputGroup>
                    </Form.Group>
                    
                  
                  <Form.Group controlId="formGroupCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" custom 
                      value={this.state.category}
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
          </Container> */}


        
    }
}