import React, { useState, useRef } from "react";

function shuffleChildren(container) {
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
}

function CardGrid() {
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const containerRef = useRef(null);

  function handleClick(event) {
    const index = event.target.dataset.index;
    if (clickedCards.includes(index)) {
      shuffleChildren(containerRef.current);
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, index]);
      setScore(score + 1);
      shuffleChildren(containerRef.current);
    }
  }  

  return (
    <div>
      <div className="score">{score}</div>
      <div className="container" ref={containerRef}>
        {[...Array(12)].map((_, i) => (
          <div className="card" key={i} data-index={i} onClick={handleClick}>
            Card {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
