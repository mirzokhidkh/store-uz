import React from 'react';
import {Link} from "react-router-dom";
import {Inputs} from "../UI/Input/input";

const Register = ({registerHandler, formControls, onChangeHandler}) => {
    return (
        <form onSubmit={registerHandler} className="needs-validation" noValidate>
            {
                Inputs(formControls, onChangeHandler)
            }
            <button type="submit" className="btn btn-danger mr-3">Sign up</button>
            <Link to="/login" className="btn btn-primary float-right">Login</Link>
        </form>
    )
}
export {Register};