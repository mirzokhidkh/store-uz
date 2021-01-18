import React from "react";
import {NavLink, Link} from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">StoreUz</a>

            <button className="navbar-toggler" type="button " data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button"
                           aria-haspopup="true" aria-expanded="false">Category</a>
                        <div className="dropdown-menu">
                            <Link to={{
                                pathname: '/category/smartphones-tablets/',
                                state: {
                                    categoryType: 'Smartphones and Tablets'
                                }
                            }}
                                  className="dropdown-item">
                                Smartphones and Tablets
                            </Link>
                            <Link to={{
                                pathname: '/category/computers/',
                                state: {
                                    categoryType: 'Computers'
                                }
                            }}
                                  className="dropdown-item">
                                Computers
                            </Link>
                            <Link to={{
                                pathname: '/category/books/',
                                state: {
                                    categoryType: 'Books'
                                }
                            }} className="dropdown-item">
                                Books
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add" className="nav-link">Add</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">Cart</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/orders" className="nav-link">Orders</NavLink>
                    </li>

                    <div className="auth">
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className="nav-link"
                                exact={false}
                                data-toggle="modal" data-target="#auth"
                            >
                                Sign in
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/register"
                                className="nav-link"
                                exact={false}
                                data-toggle="modal" data-target="#auth"
                            >
                                Sign up
                            </NavLink>
                        </li>
                    </div>


                </ul>
            </div>


        </nav>
    )
}

export default Header;
