class preloader extends Phaser.Scene{
  constructor(){
    super("preloader")
  }
  preload(){
    this.load.atlas("ninja", "./assets/img/ninja.png", "./assets/json/ninja.json");
    this.load.image("tileset", "./assets/img/tile.png");
    this.load.tilemapTiledJSON("level1", "./assets/json/maps/level1.json");
  }
  create(){
    console.log("Loading...");

    this.anims.create({
      key: "ninjaIdle",
      frameRate: 2,
      frames: [{key: "ninja", frame: "0"},{key: "ninja", frame: "1"}],
      repeat: -1
    });
    this.anims.create({
      key: "ninjaRun",
      frameRate: 6,
      frames: [{key: "ninja", frame: "2"},{key: "ninja", frame: "3"}],
      repeat: -1
    });
    this.anims.create({
      key: "ninjaFlip",
      frameRate: 10,
      frames: [{key: "ninja", frame: "4"},{key: "ninja", frame: "5"},{key: "ninja", frame: "6"},{key: "ninja", frame: "7"},{key: "ninja", frame: "8"},{key: "ninja", frame: "9"},{key: "ninja", frame: "10"},{key: "ninja", frame: "4"},{key: "ninja", frame: "0"}],
      repeat: 0
    });
    this.anims.create({
      key: "ninjaThrow",
      frameRate: 6,
      frames: [{key: "ninja", frame: "0"},{key: "ninja", frame: "11"},{key: "ninja", frame: "12"},{key: "ninja", frame: "13"}, {key: "ninja", frame: "0"}],
      repeat: 0
    });
  
    this.scene.start("level");
  }
}
