import React from 'react';
import Square from './Square';

function Board({ isXNext, squares, onPlay, currentPlayerName, player1Name, player2Name }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    const winnerName = winner === 'X' ? player1Name : player2Name;
    status = `Winner: ${winnerName}! 🎉`;
  } else if (squares.every(square => square)) {
    // If it's a draw, clear the board and continue playing
    setTimeout(() => {
      onPlay(Array(9).fill(null));
    }, 1000);
    status = "Draw! Starting new round...";
  } else {
    status = `${currentPlayerName}'s Turn (${isXNext ? 'X' : 'O'})`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`mb-8 text-3xl font-bold px-6 py-3 rounded-full 
        bg-gradient-to-r ${winner 
          ? 'from-green-500 to-green-600 animate-pulse' 
          : 'from-blue-500 to-purple-600'} 
        text-white shadow-lg transform hover:scale-105 transition-all duration-200`}>
        {status}
      </div>
      <div className={`bg-white rounded-2xl p-8 shadow-2xl
        transform transition-all duration-300
        border-4 ${winner ? 'border-green-400' : 'border-gray-200'}`}>
        <div className="grid grid-rows-3 gap-4 p-4">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} winner={winner} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} winner={winner} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} winner={winner} />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-4">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} winner={winner} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} winner={winner} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} winner={winner} />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-3 gap-4">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} winner={winner} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} winner={winner} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} winner={winner} />
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
      return squares[a];
    }
  }
  return null;
}

export default Board;
