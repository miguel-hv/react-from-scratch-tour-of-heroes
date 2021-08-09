import React from 'react';
import { useState } from 'react';

const INITIAL_STATE = {
    id: 324,
    name: 'nombre de prueba',
};

const Input = ({hero, handleChangeHeroName}) => {

    const [testUser, setTestUser] = useState(INITIAL_STATE);
    
    const handleChangeInput = (ev) => {
        
        // const {name, value} = ev.target;
        // setTestUser({...testUser, [name]: value});
        handleChangeHeroName('name', ev.target.value);

    }
    
    return(
        
        <div>
            <label htmlFor="name"> Hero name:</label>
            <input type="text" id="name" name="name" placeholder="name" onChange={handleChangeInput} value={hero.name} />
        </div>
    )
}

export default Input;