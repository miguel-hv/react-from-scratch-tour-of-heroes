import React from 'react';
import PropTypes from 'prop-types';
import './Heroes.css';


const Heroes = ({hero})=> {

    const handleSubmit = (ev) => {
        console.log('form enviado');
        ev.preventDefault();
    }

    return(
        <>
        <h2>{hero.name.toUpperCase()} Details</h2>
        <div>
            <span>id:</span> <span>{hero.id}</span>
        </div>
        <div>
            <span>name:</span> <span>{hero.name}</span>
        </div>
        </>
    );
}

Heroes.propTypes = {
    hero: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Heroes;