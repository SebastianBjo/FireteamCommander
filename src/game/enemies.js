import { getEnemyStats, updateEnemyStats } from './enemyStats';

let enemyUnits = [];

export const initEnemies = () => {
  // Initialize enemy units
  enemyUnits = [
    createEnemyUnit(300, 300),
    createEnemyUnit(350, 350),
    createEnemyUnit(400, 400),
    createEnemyUnit(450, 450),
  ];
};

export const updateEnemies = () => {
  enemyUnits.forEach((unit) => {
    // Update enemy unit logic
    updateEnemyStats(unit);
  });
};

export const drawEnemies = (ctx) => {
  enemyUnits.forEach((unit) => {
    // Draw enemy units on the canvas
    drawEnemyUnit(ctx, unit);
  });
};

function createEnemyUnit(x, y) {
  return {
    x,
    y,
    health: 80,
    aggression: 0.6,
    accuracy: 0.6,
    speed: 1.5,
  };
}

function drawEnemyUnit(ctx, unit) {
  // Draw the enemy unit on the canvas
  ctx.fillStyle = 'red';
  ctx.fillRect(unit.x, unit.y, 20, 20);
}
