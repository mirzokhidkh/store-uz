import React from 'react';
import {Link} from "react-router-dom";
import {Inputs} from "../UI/Input/input";


const Login = ({submitHandler, loginHandler, onChangeHandler, formControls}) => {
    return (
        <form action="/" onSubmit={submitHandler} className="" method="get">
            {
                Inputs(formControls, onChangeHandler)
            }
            <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox"/> Remember me
                </label>
            </div>

            <button
                type="submit"
                className="btn btn-danger mr-3"
                onClick={loginHandler}
            >
                Log in
            </button>

            <Link to="/register" className="btn btn-primary float-right">
                Register
            </Link>
        </form>
    )
}


export {Login};