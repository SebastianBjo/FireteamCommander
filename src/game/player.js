import { getPlayerStats, updatePlayerStats } from './playerStats';

let playerUnits = [];

export const initPlayer = () => {
  // Initialize player units
  playerUnits = [
    createPlayerUnit(100, 100),
    createPlayerUnit(120, 120),
    createPlayerUnit(150, 150),
    createPlayerUnit(180, 180),
  ];
};

export const updatePlayer = () => {
  playerUnits.forEach((unit) => {
    // Update player unit logic
    updatePlayerStats(unit);
  });
};

export const drawPlayer = (ctx) => {
  playerUnits.forEach((unit) => {
    // Draw player units on the canvas
    drawPlayerUnit(ctx, unit);
  });
};

function createPlayerUnit(x, y) {
  return {
    x,
    y,
    health: 100,
    stamina: 100,
    morale: 100,
    ammo: 30,
    accuracy: 0.8,
    speed: 2,
  };
}

function drawPlayerUnit(ctx, unit) {
  // Draw the player unit on the canvas
  ctx.fillStyle = 'green';
  ctx.fillRect(unit.x, unit.y, 20, 20);
}
