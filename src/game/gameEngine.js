import { initPlayer, updatePlayer, drawPlayer } from './player';
import { initEnemies, updateEnemies, drawEnemies } from './enemies';
import { initMap, drawMap } from './map';
import { initUI, drawUI } from './ui';

let canvas, ctx;

export const initGame = (canvasElement, contextElement) => {
  canvas = canvasElement;
  ctx = contextElement;

  initPlayer();
  initEnemies();
  initMap();
  initUI();
};

export const updateGame = () => {
  updatePlayer();
  updateEnemies();
};

export const drawGame = () => {
  drawMap(ctx);
  drawPlayer(ctx);
  drawEnemies(ctx);
  drawUI(ctx);
};
