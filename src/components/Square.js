import React from 'react';

function Square({ value, onSquareClick, winner }) {
  return (
    <button
      className={`w-20 h-20 flex items-center justify-center text-4xl font-bold rounded-xl
        transform transition-all duration-200
        shadow-lg hover:shadow-xl
        border-4 
        ${value ? 'cursor-not-allowed' : 'cursor-pointer hover:-translate-y-1 active:translate-y-0'}
        ${value === 'X' 
          ? 'text-blue-600 border-blue-400 bg-blue-50 hover:bg-blue-100' 
          : value === 'O'
            ? 'text-red-600 border-red-400 bg-red-50 hover:bg-red-100'
            : 'border-gray-300 bg-white hover:bg-gray-50'}
        focus:outline-none focus:ring-4 focus:ring-blue-300
        ${!value && 'hover:border-gray-400'}
        ${winner && value && 'animate-bounce'}
        style-3d`}
      onClick={onSquareClick}
      disabled={winner || value}
    >
      {value}
    </button>
  );
}

export default Square;
