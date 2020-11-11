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
        this.onChangeImages = this.onChangeImages.bind(this);
//        //new

//        this.multerImages = this.onChangeMulterImages.bind(this);
        this.onChangeMulterImage = this.onChangeMulterImage.bind(this)

        this.imageForms = [];
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            title: '',
            description: '', // owner was removed. should be whoever is logged in
            condition: '',
            location: '',
            price: '',
            category: '',
            images: '',
            multerImage: ''
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

    onChangeImages(e) {

        this.setState({
            images: e.target.value
         })
    }

    onChangeMulterImage(e) {
      this.setState({
        multerImage: e.target.files[0]
      });
    }


    onSubmit(e) {
        e.preventDefault();

        const listing = {
            title: this.state.title,
            description: this.state.description,
            owner: this.state.owner,
            condition: this.state.condition,
            location: this.state.location,
            price: this.state.price,
            category: this.state.category,
            images: this.state.images
        }

        // we link this after finishing some front end stuff
        console.log(listing);

        axios.post('http://localhost:5000/listings/add', listing)
        .then(res => console.log(res.data));


       let imageObj = {};

       let imageFormObj = new FormData();

       imageFormObj.append("imageName", "multer-image-" + Date.now());
       imageFormObj.append("imageData", this.state.multerImage);



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

  setDefaultImage(uploadType) {

      this.setState({
            multerImage: DefaultImg
      });

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

            <div className="form-group">
              <label>Images: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.images}
                  onChange={this.onChangeImages}
                  />
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
    }
}