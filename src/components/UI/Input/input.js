import React from "react";
import "./input.css";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Input = props => {

    const inputType = props.type || 'text'
    const htmlFor = `${inputType}+${Math.random()}`
    const classes = ['form-group ']

    if (isInvalid(props)) {
        classes.push('invalid')
    }

    return (
        <div className={classes.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}:</label>
            <input
                type={inputType}
                className="form-control"
                id={htmlFor}
                name={props.name}
                placeholder={`Enter the ${props.name}`}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span className="error">{props.errorMessage}</span>
                    : null
            }
        </div>
    )
}

const Inputs = (formControls, onChangeHandler) => {
    return (
        Object.keys(formControls).map((controlName, index) => {
            const control = formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    name={control.name}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={(event) => onChangeHandler(event, controlName)}
                />
            )

        })
    )
}

export {
    Input,
    Inputs
};