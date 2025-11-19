import React, { useRef, useEffect } from 'react';
import { initGame, updateGame, drawGame } from '../game/gameEngine';

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    initGame(canvas, ctx);

    const gameLoop = () => {
      updateGame();
      drawGame(ctx);
      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      // Clean up game resources on component unmount
      cancelAnimationFrame(gameLoop);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      width={800}
      height={600}
    />
  );
}
