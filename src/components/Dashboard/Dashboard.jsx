import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../../App";
import './Dashboard.css';

const Dashboard = ({heroes})=> {
    // console.log(heroes);
    const topHeroes = useContext(HeroesContext).slice(1,5);
    return(
        <>
        <h2>Top Heroes</h2>
        <div className="heroes-menu">
            {
                topHeroes.map((hero, key) => {

                    return(
                        <Link
                        key={hero.id}
                        to={`/details/${hero.id}`}
                        >
                            {hero.name}
                        </Link>
                    );
                })
            }
        </div>
        </>
    );
}

export default Dashboard;