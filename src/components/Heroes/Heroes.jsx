import React from "react";
import PropTypes from "prop-types";


const Heroes = () => {
    return(
        <h4 className="hero">
            {/* { hero } */}
            Hero
        </h4>
    );
}

// Heroes.propTypes = {
//     hero: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
//     }).isRequired,
// };

export default Heroes;