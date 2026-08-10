import './App.css';
import { useState } from 'react'
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/card_hearts_J.png"},
  {"src": "/img/card_hearts_K.png"},
  {"src": "/img/card_hearts_Q.png"},
  {"src": "/img/card_spades_J.png"},
  {"src": "/img/card_spades_K.png"},
  {"src": "/img/card_spades_Q.png"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    
      setCards(shuffleCards)
      setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>Start Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
