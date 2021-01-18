import React, {Component} from 'react';
import StoreService from "../../services/store-service";
import Card from "../UI/Card/card";

class HomePage extends Component {

    state = {
        storeService: new StoreService(),
        cards: []
    }

    componentDidMount() {
        console.log('componentDidMount');
        const {storeService: {getAllSmartphonesAndTablets, getAllBooks, getAllComputers}} = this.state;
        this.renderCards(getAllSmartphonesAndTablets);
        this.renderCards(getAllBooks);
        this.renderCards(getAllComputers);
    }

    getData = async (method) => {
        const data = await method();
        console.log("DATA", data);
        return await data;
    }


    renderCards = async (method) => {

        try {
            const data = await this.getData(method);
            this.setState({
                cards: [
                    ...this.state.cards,
                    <div className="row">
                        {data.slice(0, 4).map((item, index) => {
                            return (
                                <div className="col-md-3">
                                    <Card product={item} addToCart={''} key={index}/>
                                </div>
                            )
                        })}
                    </div>
                ]
            })
        } catch (err) {
            console.log(err)
        }


        console.log("renderCards : ", this.state.cards);
        // return data.map((item, index) => {
        //     return (
        //         <div className="col-md-2">
        //             <Card product={item} addToCart={''} key={index}/>
        //         </div>
        //     )
        // });
    }

    render() {


        return (
            <div className="mt-3">
                {
                    this.state.cards
                }
            </div>
        );
    }
}


export default HomePage;
