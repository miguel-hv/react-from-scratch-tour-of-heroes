import React from "react";
import './HeroDetail.css';

const HeroDetail = ({selectedHero})=> {

    return(
        <>
        {selectedHero ? (
            <div>
                <h2>{selectedHero.name.toUpperCase()} Details</h2>
                <div>id: {selectedHero.id}</div>
            </div>
            )
            : (<p>Ningún héroe seleccionado</p>)
        }
        </>

    );
}

export default HeroDetail;