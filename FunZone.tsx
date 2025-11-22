
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, RefreshCw, MessageCircle, Zap, Grid, Brain } from 'lucide-react';
import { HADITHS, COMPLIMENTS, YAHYA_IMAGES } from '../constants';

// --- SNAKE GAME LOGIC ---
const GRID_SIZE = 15;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [[5, 5]];
const INITIAL_DIRECTION = [0, 1];

// --- TICTACTOE LOGIC ---
const initialBoard = Array(9).fill(null);

const FunZone = () => {
  const [activeGame, setActiveGame] = useState<'snake' | 'tictactoe'>('snake');
  
  // Snake State
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState([10, 10]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  // TicTacToe State
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [tttWinner, setTttWinner] = useState<string | null>(null);

  // Generator State
  const [currentHadith, setCurrentHadith] = useState(HADITHS[0]);
  const [currentCompliment, setCurrentCompliment] = useState("");

  // Snake Effect
  useEffect(() => {
    if (!gameActive || gameOver || activeGame !== 'snake') return;
    const moveSnake = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = [prevSnake[0][0] + direction[0], prevSnake[0][1] + direction[1]];
        if (
          newHead[0] < 0 || newHead[0] >= GRID_SIZE ||
          newHead[1] < 0 || newHead[1] >= GRID_SIZE ||
          prevSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])
        ) {
          setGameOver(true);
          return prevSnake;
        }
        const newSnake = [newHead, ...prevSnake];
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore(s => s + 1);
          setFood([Math.floor(Math.random() * GRID_SIZE), Math.floor(Math.random() * GRID_SIZE)]);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);
    return () => clearInterval(moveSnake);
  }, [gameActive, gameOver, direction, food, activeGame]);

  // Key Handler
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (!gameActive || activeGame !== 'snake') return;
      const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      if (keys.includes(e.key)) e.preventDefault();
      switch (e.key) {
        case 'ArrowUp': if (direction[0] !== 1) setDirection([-1, 0]); break;
        case 'ArrowDown': if (direction[0] !== -1) setDirection([1, 0]); break;
        case 'ArrowLeft': if (direction[1] !== 1) setDirection([0, -1]); break;
        case 'ArrowRight': if (direction[1] !== -1) setDirection([0, 1]); break;
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [direction, gameActive, activeGame]);

  const resetSnake = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setGameActive(true);
  };

  // TicTacToe Logic
  const handleTTTClick = (i: number) => {
    if (board[i] || tttWinner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    checkWinner(newBoard);
  };

  const checkWinner = (squares: any[]) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setTttWinner(squares[a]);
        return;
      }
    }
    if (!squares.includes(null)) setTttWinner('Draw');
  };

  const resetTTT = () => {
    setBoard(initialBoard);
    setXIsNext(true);
    setTttWinner(null);
  };

  // Generators
  const generateHadith = () => setCurrentHadith(HADITHS[Math.floor(Math.random() * HADITHS.length)]);
  const generateCompliment = () => setCurrentCompliment(COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)]);

  return (
    <section id="fun" className="py-20 relative overflow-hidden min-h-[800px]">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <img 
          src={YAHYA_IMAGES.cool} 
          alt="Background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Fun <span className="text-accent">Zone</span></h2>
          <p className="text-gray-400">Arcade & Motivation Center.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* GAME CONSOLE */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col items-center shadow-2xl border-2 border-white/5 backdrop-blur-xl bg-black/40">
            {/* Game Switcher */}
            <div className="flex gap-4 mb-6">
               <button 
                 onClick={() => setActiveGame('snake')}
                 className={`p-2 rounded-lg flex items-center gap-2 ${activeGame === 'snake' ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}
               >
                 <Gamepad2 size={18} /> Snake
               </button>
               <button 
                 onClick={() => setActiveGame('tictactoe')}
                 className={`p-2 rounded-lg flex items-center gap-2 ${activeGame === 'tictactoe' ? 'bg-secondary text-black' : 'bg-white/5 text-gray-400'}`}
               >
                 <Grid size={18} /> TicTacToe
               </button>
            </div>

            {/* SNAKE */}
            {activeGame === 'snake' && (
              <div className="flex flex-col items-center">
                <div className="flex justify-between w-full mb-2 text-sm text-gray-300">
                  <span>Score: {score}</span>
                </div>
                <div 
                  className="bg-black/90 border-2 border-gray-700 rounded-lg relative shadow-[inset_0_0_20px_rgba(0,0,0,1)]"
                  style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
                >
                  {gameActive && !gameOver ? (
                    <>
                      {snake.map((segment, i) => (
                        <div
                          key={i}
                          className="absolute bg-primary"
                          style={{
                            width: CELL_SIZE - 2,
                            height: CELL_SIZE - 2,
                            left: segment[1] * CELL_SIZE,
                            top: segment[0] * CELL_SIZE,
                            borderRadius: 4,
                          }}
                        />
                      ))}
                      <div
                        className="absolute bg-accent rounded-full animate-pulse"
                        style={{
                          width: CELL_SIZE - 2,
                          height: CELL_SIZE - 2,
                          left: food[1] * CELL_SIZE,
                          top: food[0] * CELL_SIZE,
                        }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
                      <p className="text-gray-400 mb-4 font-mono">{gameOver ? "GAME OVER" : "READY?"}</p>
                      <button onClick={resetSnake} className="px-6 py-2 bg-primary text-white rounded-full font-bold">
                        {gameOver ? "Retry" : "Start"}
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-4"><Zap size={12} className="inline"/> Arrows to move</p>
              </div>
            )}

            {/* TIC TAC TOE */}
            {activeGame === 'tictactoe' && (
              <div className="flex flex-col items-center">
                 <div className="grid grid-cols-3 gap-2 mb-4">
                   {board.map((cell, i) => (
                     <button
                       key={i}
                       onClick={() => handleTTTClick(i)}
                       className="w-16 h-16 bg-white/10 rounded-lg text-2xl font-bold text-white hover:bg-white/20 flex items-center justify-center"
                     >
                       {cell}
                     </button>
                   ))}
                 </div>
                 <div className="text-center">
                    {tttWinner ? (
                      <p className="text-secondary font-bold mb-2">{tttWinner === 'Draw' ? 'Draw!' : `${tttWinner} Wins!`}</p>
                    ) : (
                      <p className="text-gray-400 mb-2">Next: {xIsNext ? 'X' : 'O'}</p>
                    )}
                    <button onClick={resetTTT} className="text-sm underline text-gray-500 hover:text-white">Reset Board</button>
                 </div>
              </div>
            )}
          </div>

          {/* WIDGETS */}
          <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-surface/90 backdrop-blur-md p-6 rounded-2xl border-l-4 border-primary shadow-lg">
              <h4 className="text-lg font-bold text-white mb-2">Random Hadith</h4>
              <p className="text-gray-300 italic font-serif text-lg mb-4">"{currentHadith}"</p>
              <button onClick={generateHadith} className="text-sm text-primary flex items-center gap-2 hover:underline font-semibold">
                <RefreshCw size={14}/> New Hadith
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageCircle size={18} className="text-accent"/> Need Motivation?
              </h4>
              <div className="min-h-[60px] flex items-center justify-center text-center">
                 {currentCompliment ? (
                   <motion.p initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-white font-medium text-lg">
                     {currentCompliment}
                   </motion.p>
                 ) : (
                   <button onClick={generateCompliment} className="px-6 py-2 bg-white/10 border border-white/20 text-white rounded-full text-sm font-bold hover:bg-white/20 transition-colors">
                     Hit Me!
                   </button>
                 )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunZone;
