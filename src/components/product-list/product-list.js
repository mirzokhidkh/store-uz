import React, {Component} from "react";
import axios from "../../axios/axios-store";

import "./product-list.css";
import {ProductListItem} from "../product-list-item";
import {Loader} from "../loader";
import ErrorIndicator from "../error-indicator/error-indicator";


const ProductList = ({data, title}) => {
    return (
        <div className="product-list mt-3">
            <h3 className="text-center">{title}</h3>
            <div className="row mt-3">
                {
                    data.map((item, i) => {
                        return (
                            <div className="col-md-3 mb-3" key={i}>
                                <ProductListItem product={item}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

class ProductListContainer extends Component {

    state = {
        loading: true,
        error: false,
        data: []
    }

    componentDidMount() {
        // console.log("componentDidMount")
        this.fetchData();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("componentDidUpdate")
        if (prevProps.location.state.categoryType &&
            (prevProps.location.state.categoryType !== this.props.location.state.categoryType)) {
            this.fetchData();
        }
    }

    fetchData = async () => {
        if (this.state.loading === false) {
            this.setState({
                loading: true,
                error: false
            });
        }

        const {categoryType} = this.props.location.state;
        try {
            const response = await axios.get(`/products/${categoryType}.json`);
            const data = [];
            Object.keys(response.data).forEach((key, i) => {
                data.push({
                    id: key,
                    ...response.data[key]
                })
            })
            this.setState({
                data,
                loading: false,
                error: false
            });
        } catch (e) {
            this.setState({
                error: true,
                loading: false
            })
        }
    }


    fetchDataById = async (categoryType, id) => {
        try {
            const response = await axios.get(`/products/${categoryType}/${id}.json`);
            return response.data;
        } catch (e) {
            this.setState({
                error: true
            })
        }
    }

    render() {
        const {loading, error, data} = this.state;

        if (loading) {
            return <Loader/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return (
            <div>
                <ProductList
                    data={data}
                    title={this.props.location.state.categoryType}
                />
            </div>
        )
    }
}

export default ProductListContainer;