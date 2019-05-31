import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer() {
    return (
        <main>
            <a href="https://www.reactjs.org">
            <CardBanner />
            <div className="cardContainer">
            <CardContent />
            </div>
            </a>
        </main>
    );
}

export default CardContainer;