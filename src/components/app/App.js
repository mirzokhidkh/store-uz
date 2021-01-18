import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StoreServiceProvider} from "../store-service-context"
import {Header} from "../header";
import {ProductList} from "../product-list"
import Auth from "../auth/auth";
import AddProduct from "../add-product/add-product";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import Orders from "../orders/orders";
import StoreService from "../../services/store-service";


class App extends Component {

    state = {
        storeService: new StoreService()
    }

    render() {
        return (
            <StoreServiceProvider value={this.state.storeService}>
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Switch>
                            <Route path="/" component={HomePage} exact={true}/>
                            <Route path="/cart" component={CartPage}/>
                            <Route path="/orders" component={Orders}/>
                            <Route path="/category/smartphones-tablets/" exact component={ProductList}/>
                            <Route path="/category/smartphones-tablets/:id" component={ProductList}/>
                            <Route path="/category/computers/" component={ProductList}/>
                            <Route path="/category/books/" component={ProductList}/>
                            <Route path="/add" component={AddProduct}/>
                            <Route path="/login" component={Auth}/>
                            <Route path="/register" component={Auth}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </StoreServiceProvider>
        );
    }
}

export default App;