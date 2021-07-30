import PropTypes from "prop-types";


const hero = 'Marie Curie';

const Hero = () => {
    return(
        <h4 className="hero">
            { hero }
        </h4>
    );
}

Hero.propTypes = {
    hero: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Hero;