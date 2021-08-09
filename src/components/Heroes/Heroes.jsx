import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Heroes.css';
import HeroDetail from '../HeroDetail/HeroDetail';
import { Link } from 'react-router-dom';



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
            
            {/* <HeroDetail selectedHero={selectedHero}/> */}
    
            <ul className="heroes">
                {heroes.map((hero, key)=>{
                    return (
                        <li 
                        key={hero.id} 
                        // onClick={()=>handleClick(key)}
                        className={`${hero ===selectedHero ? "selected" : ""}`}
                        >
                            <Link to={`/details/${hero.id}`}>
                                <span className="badge">{hero.id}</span> {hero.name}
                            </Link>
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