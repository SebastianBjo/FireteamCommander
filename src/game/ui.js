import { getPlayerStats } from './playerStats';
import { getEnemyStats } from './enemyStats';

export const initUI = () => {
  // Initialize UI elements
};

export const drawUI = (ctx) => {
  // Draw the UI elements on the canvas
  drawPlayerHUD(ctx);
  drawMinimap(ctx);
  drawPauseMenu(ctx);
};

function drawPlayerHUD(ctx) {
  const playerStats = getPlayerStats();

  // Draw player health, stamina, morale, and ammo
  ctx.fillStyle = 'white';
  ctx.fillRect(10, 10, 200, 80);
  ctx.fillStyle = 'black';
  ctx.fillText(`Health: ${playerStats.health}`, 20, 30);
  ctx.fillText(`Stamina: ${playerStats.stamina}`, 20, 50);
  ctx.fillText(`Morale: ${playerStats.morale}`, 20, 70);
  ctx.fillText(`Ammo: ${playerStats.ammo}`, 20, 90);
}

function drawMinimap(ctx) {
  // Draw the minimap showing the player, enemies, and map features
}

function drawPauseMenu(ctx) {
  // Draw the pause menu UI
}
