import React from 'react';

const PersonCard = ({ person }) => {
    // console.log("these are the props " + props.person.firstName);
    return (
        <>
            <div className="card p-3 mt-3">
                <h1 className="font-weight-light">Your form data</h1>
                <p><strong>First Name: </strong> {person.firstName}</p>
                <p><strong>Last Name:</strong> {person.lastName}</p>
                <p><strong>Email:</strong> {person.email}</p>
                <p><strong>Password:</strong> Password</p>
                <p><strong>Confirm:</strong> Password</p>
            </div>
        </>
    );
}

export default PersonCard;