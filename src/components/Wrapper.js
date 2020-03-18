import React, { useState } from 'react';

import PersonForm from './PersonForm'
import PersonCard from './PersonCard'

const Wrapper = props => {
    const [state, setState] = useState('');
    // console.log(state);

    return (
        <>
            <h1 className="display-4">Hook Form</h1>

            <PersonForm
                state={state}
                setState={setState}
            />
        
            <PersonCard
                // state={state}
                person={state}
            />
        </>
    );
}

export default Wrapper;