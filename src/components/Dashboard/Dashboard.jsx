import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';
const Dashboard = ({heroes})=> {
    // console.log(heroes);
    const topHeroes = heroes.slice(1,5);
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