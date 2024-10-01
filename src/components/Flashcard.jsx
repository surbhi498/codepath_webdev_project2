import React, { useState } from 'react';
import './styles.css';



function Flashcard({ card, isFlipped, setIsFlipped }) {
  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={flipCard}
    >
      <div className="flashcard-content">
        {isFlipped ? card.answer : card.question}
      </div>
    </div>
  );
}

export default Flashcard;