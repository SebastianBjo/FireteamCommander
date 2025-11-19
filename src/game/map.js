import mapData from '../assets/maps/level1.json';

export const initMap = () => {
  // Initialize map data
};

export const drawMap = (ctx) => {
  // Draw the map on the canvas using the JSON tile data
  for (let y = 0; y < mapData.height; y++) {
    for (let x = 0; x < mapData.width; x++) {
      const tileIndex = mapData.layers[0].data[y * mapData.width + x];
      const tile = mapData.tilesets[0].tiles[tileIndex - 1];

      ctx.drawImage(
        getTileImage(tile.image),
        tile.x,
        tile.y,
        tile.width,
        tile.height,
        x * 32,
        y * 32,
        32,
        32
      );
    }
  }
};

function getTileImage(imagePath) {
  // Load and cache tile images
}
