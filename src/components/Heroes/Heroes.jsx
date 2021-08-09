import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Heroes.css';


const INITIAL_STATE = null;

const Heroes = ({heroes})=> {

    const [selectedHero, setSelectedHero] = useState(INITIAL_STATE);

    const handleClick = (key)=> {
        // console.log(heroes[key]);
        setSelectedHero(heroes[key]);
    }

    return(
        
        <>
            <h2>My heroes</h2>
            {selectedHero && (
                <div>
                    <h2>{selectedHero.name.toUpperCase()} Details</h2>
                    <div>id: {selectedHero.id}</div>
                </div>
                )
            }
    
            <ul className="heroes">
                {heroes.map((hero, key)=>{
                    return (
                        <li 
                        key={hero.id} 
                        onClick={()=>handleClick(key)}
                        className={`${hero ===selectedHero ? "selected" : ""}`}
                        >
                            <span className="badge">{hero.id}</span> {hero.name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

Heroes.propTypes = {
    heroes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
};

Heroes.defaultProps = {    
    heroes: [],
}

export default Heroes;