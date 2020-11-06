import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '', // owner was removed. should be whoever is logged in
            condition: '',
            location: '',
            price: '',
            category: '',
            images: ''  //need to make this include pictures later
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

        // take user to the listing page for what they posted
        window.location = '/listings/';
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
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.condition}
                    onChange={this.onChangeCondition}
                    />
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
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                    />
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
    
            <div className="form-group">
                <input type="submit" value="Post Listing" className="btn btn-primary" />
            </div>
            </form>
        </div>
        )
    }
}