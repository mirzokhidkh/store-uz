import React, {Component} from 'react';
import axios from "../../axios/axios-store";
// import {Inputs} from "../UI/Input/input";

import "./add-product.css";

class AddProduct extends Component {
    state = {
        product: {
            categoryType: 'Smartphones and Tablets',
            name: '',
            price: '',
            image: ''
        }
    }

    submitHandler = async (event) => {
        event.preventDefault()
        this.addToProductList(this.state.product);

        this.setState({
            product: {
                categoryType: this.state.product.categoryType,
                name: '',
                price: '',
                image: ''
            }
        })
    }

    onChangeHandler = (event) => {

        this.setState({
            product: {
                ...this.state.product,
                [event.target.name]: event.target.value
            }
        })
    }

    addToProductList = async (product) => {
        console.log(product);

        if (product) {
            await axios.post(`/products/${product.categoryType}.json`, product)
        }
    }

    render() {
        const {name, price, image} = this.state.product
        return (
            <form onSubmit={this.submitHandler} className="add-product needs-validation mt-5" noValidate>
                <div className="form-group">
                    <label htmlFor="cat1">Category type:</label>
                    <select className="form-control" id="cat1" name="categoryType"
                            onChange={this.onChangeHandler}
                    >
                        <option selected>Smartphones and Tablets</option>
                        <option>Computers</option>
                        <option>Books</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"
                           value={name} required onChange={this.onChangeHandler}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="prc">Price:</label>
                    <input type="text" className="form-control" id="prc" placeholder="Enter price" name="price"
                           value={price} required onChange={this.onChangeHandler}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image:</label>
                    <input type="text" className="form-control" id="img" placeholder="Enter image" name="image"
                           value={image} required onChange={this.onChangeHandler}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}

export default AddProduct;