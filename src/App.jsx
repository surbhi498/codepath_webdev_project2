import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/styles.css'
import flashcards from './components/FlashcardSet'
import FlashcardSet from './components/FlashcardSet'

function App() {
  return(
    <div className="flashcard-container">
    <div>
    <h1>FlashCards!!!!!!</h1>
    <FlashcardSet />
    </div>  
    </div>   
  )
}

export default App
