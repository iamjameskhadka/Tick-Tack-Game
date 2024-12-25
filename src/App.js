import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsXNext(!isXNext);
  }

  function startNewGame() {
    if (!hasWinner(currentSquares)) {
      alert("Please continue playing until there's a winner!");
      return;
    }
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsXNext(true);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsXNext(nextMove % 2 === 0);
  }

  function handleStartGame(e) {
    e.preventDefault();
    if (player1Name.trim() && player2Name.trim()) {
      setGameStarted(true);
    }
  }

  function hasWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return true;
      }
    }
    return false;
  }

  const currentPlayerName = isXNext ? player1Name : player2Name;

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      const playerName = move % 2 === 0 ? player2Name : player1Name;
      description = `Go to move #${move} (${playerName})`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} className="mb-3">
        <button
          className={`w-full px-4 py-2 rounded-lg font-semibold
            transform transition-all duration-200
            ${currentMove === move 
              ? 'bg-purple-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 shadow hover:shadow-lg hover:-translate-y-1'}
            border-2 border-purple-200 hover:border-purple-400`}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Tic Tac Toe
          </h1>
          <form onSubmit={handleStartGame} className="bg-white rounded-xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Player 1 Name (X)
                </label>
                <input
                  type="text"
                  value={player1Name}
                  onChange={(e) => setPlayer1Name(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Player 2 Name (O)
                </label>
                <input
                  type="text"
                  value={player2Name}
                  onChange={(e) => setPlayer2Name(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-4 rounded-lg
                  transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Start Game
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Tic Tac Toe
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12">
          <div className="game-board">
            <Board
              isXNext={isXNext}
              squares={currentSquares}
              onPlay={handlePlay}
              currentPlayerName={currentPlayerName}
              player1Name={player1Name}
              player2Name={player2Name}
            />
          </div>
          <div className="game-info w-full lg:w-64">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="mb-6 space-y-2">
                <div className="text-lg font-semibold">
                  <span className="text-blue-600">X: {player1Name}</span>
                </div>
                <div className="text-lg font-semibold">
                  <span className="text-red-600">O: {player2Name}</span>
                </div>
              </div>
              {hasWinner(currentSquares) && (
                <button
                  onClick={startNewGame}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2 px-4 rounded-lg
                    transform transition-all duration-200 hover:scale-105 hover:shadow-lg mb-6"
                >
                  New Game
                </button>
              )}
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                  Game History
                </h2>
                <ol className="space-y-2">
                  {moves}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
