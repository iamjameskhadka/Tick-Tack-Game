# Modern Tic Tac Toe Game

A beautiful and interactive Tic Tac Toe game built with React.js and Tailwind CSS, featuring 3D effects, player names, and continuous gameplay.

![Tic Tac Toe Game](./public/game-preview.png)

## Features

### Core Game Features
- ✨ Modern, responsive UI with 3D effects
- 👥 Two-player gameplay with custom player names
- 🔄 Continuous gameplay until there's a winner
- 📜 Complete game history with move tracking
- 🎯 Automatic handling of draws with board reset
- 🏆 Winner celebration animations

### Technical Features
- Built with React.js for dynamic UI updates
- Styled with Tailwind CSS for modern design
- Responsive layout that works on all devices
- Smooth animations and transitions
- Clean and maintainable code structure

## How to Play

1. **Setup**
   - Enter names for both players
   - Player 1 will be "X"
   - Player 2 will be "O"

2. **Gameplay**
   - Players take turns clicking empty squares
   - The game shows whose turn it is
   - A move can't be made on an already filled square
   - Game history is shown on the right side

3. **Winning & Drawing**
   - Win by getting three of your symbols in a row (horizontal, vertical, or diagonal)
   - If the board fills up without a winner, it's a draw
   - On a draw, the board automatically resets after 1 second
   - Game continues until there's a winner

4. **History & Navigation**
   - View complete game history on the right
   - Click any history entry to view that game state
   - Player names are shown in the history
   - Current move is highlighted

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd Tick-Tack-Game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and design
- **JavaScript (ES6+)** - Programming language
- **HTML5** - Structure
- **CSS3** - Custom animations and effects

## Project Structure

```
Tick-Tack-Game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.js
│   │   └── Square.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing their marks (X or O)
3. The first player to get 3 of their marks in a row wins
4. When all 9 squares are full and no winner, it's a draw
5. On a draw, the game automatically continues with a fresh board
6. Game only ends when there's a winner

## Special Features

1. **3D Effects**
   - Hovering effects on squares
   - Shadow and depth on game board
   - Smooth transitions

2. **Player Experience**
   - Clear turn indicators
   - Player name display
   - Winner celebration
   - Automatic draw handling

3. **Game History**
   - Complete move tracking
   - Player names in history
   - Easy navigation
   - Visual current move indicator

## Contributing

Feel free to fork this project and submit pull requests. You can also open issues for bugs or feature requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Created by [Your Name]
Last Updated: December 2024
