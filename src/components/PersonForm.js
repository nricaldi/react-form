import React, { useState } from 'react';

const PersonForm = props => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        submitted: false
    });

    let fnameVal = " ";
    let lnameVal = " ";
    let emailVal = " ";
    let passVal = " ";
    let confirmVal = " ";

    const changeHandler = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value
        });

        props.setState({
            ...state
        })
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(state);
    }

    const submitHandler = e => {
        e.preventDefault();
        
        if( fnameVal.length === 0 && 
            lnameVal.length === 0 && 
            emailVal.length === 0 && 
            passVal.length === 0 && 
            confirmVal.length === 0) {

            setState({
                ...state,
                submitted: true,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirm: "",
            });
        }
        
        console.log(state);
    }

    let message = <h1>You have not submitted the form</h1>
    if (state.submitted){
        message = <h1>You have submitted the form</h1>
    }

    // let fnameVal;
    if(state.firstName.length > 0)
        fnameVal = <h5 className="text-danger">First name must be at least 2 characters</h5>;
    if(state.firstName.length >=2)
        fnameVal = "";

    // let lnameVal;
    if(state.lastName.length > 0)
        lnameVal = <h5 className="text-danger">Last name must be at least 2 characters</h5>;
    if(state.lastName.length >=2)
        lnameVal = "";

    // let emailVal;
    if(state.email.length > 0) 
        emailVal = <h5 className="text-danger">Email must be at least 5 characters.</h5>;
    if(state.email.length >= 5) 
        emailVal = "";
    
    // let passVal;
    if(state.password.length > 0) 
        passVal = <h5 className="text-danger">Password must be at least 8 characters.</h5>;
    if(state.password.length >=8)
        passVal = "";

    // let confirmVal;
    if(state.password.length > 0 && state.confirm.length > 0)
        confirmVal = <h5 className="text-danger">Passwords must match.</h5>;
    if(state.password  === state.confirm)
        confirmVal = "";



    return (
        <form onSubmit={submitHandler}>
            {message}
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input 
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={state.firstName}
                    onChange={changeHandler}
                />
                {fnameVal}
            </div>
            
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input 
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={state.lastName}
                    onChange={changeHandler}
                />
                {lnameVal}
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    value={state.email}
                    onChange={changeHandler}
                />
                {emailVal}
            </div>
            
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    value={state.password}
                    onChange={changeHandler}
                />
                {passVal}
                {confirmVal}
            </div>
            
            <div className="form-group">
                <label htmlFor="confirm">Confirm Password:</label>
                <input 
                    type="password"
                    name="confirm"
                    className="form-control"
                    value={state.confirm}
                    onChange={changeHandler}
                />

            </div>

             <button type="submit" className="btn btn-outline btn-outline-danger">Submit</button>
        </form>
    );
}

export default PersonForm;