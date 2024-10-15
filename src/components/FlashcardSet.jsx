import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './styles.css';  // Importing the external CSS for styling

// Sample flashcards array with question-answer pairs
const flashcards = [
  { question: 'What is React?', answer: 'A JavaScript library for building UIs' },
  { question: 'What is a hook?', answer: 'A function that lets you use state and other features in functional components' },
  { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks similar to HTML' },
  { question: 'What is useState?', answer: 'A hook that allows you to add state to functional components' }
];

function FlashcardSet() {
  // Track the index of the current flashcard and the flipped state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  // Function to display a random card
  const Shuffle = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex); 
     // Set the new random card index
     setIsFlipped(false);
  };
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false); // Reset the flipped state
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false); // Reset the flipped state
  };

  return (
    <div>
      {/* Title and info about the flashcards */}
      <h2>Flashcard Study Set</h2>
      <p>Total Cards: {flashcards.length}</p>
      <p>Click on the card to flip between question and answer.</p>
      <Flashcard
        card={flashcards[currentIndex]}
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      {/* Display the current flashcard */}
      {/* <Flashcard card={flashcards[currentIndex]} isFlipped={isFlipped} setIsFlipped={setIsFlipped} /> */}

      {/* Button to go to the next random card */}
      <div className="navigation-buttons">
        <button onClick={prevCard}>Back</button>
        <button onClick={nextCard}>Next</button>
        <button onClick={Shuffle}>Shuffle Card</button>
      </div>
     
    </div>
  );
}

export default FlashcardSet;
