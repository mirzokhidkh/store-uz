import React, {Component} from 'react';
import is from "is_js";
import Modal from "../UI/Modal/modal";
import {Login} from "./login";
import {Register} from "./register";


class Auth extends Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                name: 'email',
                errorMessage: 'Enter the correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            username: {
                value: '',
                type: 'text',
                label: 'Username',
                name: 'username',
                errorMessage: 'Enter the correct username',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 2
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                name: 'password',
                errorMessage: 'The password must be at least 6 letters long',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: '',
                type: 'password',
                label: 'Confirm password',
                name: 'password',
                errorMessage: 'Enter the correct password again ',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    submitHandler = (event) => {
        // event.preventDefault();
        console.log("SUBMIT_HANDLER");

    }

    loginHandler = () => {
        console.log("LOGIN_HANDLER");

        // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';


    }

    registerHandler = () => {
        console.log("REGISTER_HANDLER");


    }

    validateControl = (value, validation) => {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = is.email(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        });


        this.setState({
            formControls,
            isFormValid
        });
    }


    render() {
        const {match} = this.props;
        const {formControls: {username, password}} = this.state;

        return (
            <div className="auth">
                {match.path === '/login'
                    ? Modal({title: "Sig in"})(
                        <Login
                            submitHandler={this.submitHandler}
                            loginHandler={this.loginHandler}
                            onChangeHandler={this.onChangeHandler}
                            formControls={{username, password}}
                        />
                    )
                    : Modal({title: "Sig up"})(
                        <Register
                            registerHandler={this.registerHandler}
                            formControls={{...this.state.formControls}}
                            onChangeHandler={this.onChangeHandler}
                        />
                    )
                }
            </div>
        );
    }
}

export default Auth;