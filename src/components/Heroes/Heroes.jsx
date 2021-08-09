import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HeroesContext } from '../../App';
import HeroDetail from '../HeroDetail/HeroDetail';
import './Heroes.css';



const INITIAL_STATE = null;

const Heroes = ()=> {

    const heroes = useContext(HeroesContext);
    return(
        
        <>
            <h2>My heroes</h2>
            
            {/* <HeroDetail selectedHero={selectedHero}/> */}
    
            <ul className="heroes">
                {heroes.map((hero, key)=>{
                    return (
                        <li 
                        key={hero.id} 
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