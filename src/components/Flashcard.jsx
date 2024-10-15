// import React, { useState } from 'react';
// import './styles.css';



// function Flashcard({ card, isFlipped, setIsFlipped }) {
//   const flipCard = () => setIsFlipped(!isFlipped);

//   return (
//     <div
//       className={`flashcard ${isFlipped ? 'flipped' : ''}`}
//       onClick={flipCard}
//     >
//       <div className="flashcard-content">
//         {isFlipped ? card.answer : card.question}
//       </div>
//     </div>
//   );
// }

// export default Flashcard;

// import React, { useState } from 'react';
// import './styles.css';

// function Flashcard({ card, isFlipped, setIsFlipped, onNext, onPrev }) {
//   const [guess, setGuess] = useState('');
//   const [feedback, setFeedback] = useState('');

//   const flipCard = () => setIsFlipped(!isFlipped);

//   const handleGuessChange = (e) => {
//     setGuess(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (guess.trim().toLowerCase() === card.answer.trim().toLowerCase()) {
//       setFeedback('Correct!');
//     } else {
//       setFeedback('Incorrect!');
//     }
//   };

//   return (
//     <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
//       <div className="flashcard-content" onClick={flipCard}>
//         {isFlipped ? card.answer : card.question}
//       </div>
//       {!isFlipped && (
//         <div>
//           <input
//             type="text"
//             value={guess}
//             onChange={handleGuessChange}
//             placeholder="Enter your guess"
//           />
//           <button onClick={handleSubmit}>Submit</button>
//           <p>{feedback}</p>
//         </div>
//       )}
//       <div className="navigation-buttons">
//         <button onClick={onPrev}>Back</button>
//         <button onClick={onNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Flashcard;

import React, { useState } from 'react';
import './styles.css';

function Flashcard({ card, isFlipped, setIsFlipped }) {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const flipCard = () => setIsFlipped(!isFlipped);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === card.answer.trim().toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  };

  return (
    <div>
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="flashcard-content">
        {isFlipped ? card.answer : card.question}
      </div>
    </div>
    {!isFlipped && (
        <div className="guess-container">
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess"
          />
          <button onClick={handleSubmit}>Submit</button>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default Flashcard;