import React from "react";
import './HeroDetail.css';

const HeroDetail = (props)=> {
    console.log(props);

    const idHero = props.match.params.id;
    // const idHero = 12;
    const selectedHero = props.heroes.find(e => e.id == idHero);

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

        <button onClick={props.history.goBack}> Back </button>
        </>

    );
}

export default HeroDetail;