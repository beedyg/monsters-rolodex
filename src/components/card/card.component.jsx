import React from 'react';
import './card.styles.css'

const Card = props => {
    var monster = props.monster;
    console.log(props);
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
};

export default Card;