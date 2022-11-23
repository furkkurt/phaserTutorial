var config = {
  type: Phaser.AUTO,
  width: 450,
  height: 900,
  backgroundColor: '#ffffff',
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: 'arcade',
    arcade: {debug: true}
  },
  scene: [preloader, level],
  pixelArt: true
};
var game = new Phaser.Game(config);
