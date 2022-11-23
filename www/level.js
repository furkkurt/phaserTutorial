class level extends Phaser.Scene{
  constructor(){
    super("level")
  }
  create(){
    this.map = this.make.tilemap({
      key: "level1",
      tileWidth: 16,
      tileHeight: 16
    });

    this.tileset = this.map.addTilesetImage("tileset", "tileset");

    this.player = this.physics.add.sprite(6*16,6*16,"ninja").setScale(1.2).setDepth(2).setOrigin(0).play("ninjaIdle");
    this.player.setGravity(0, 200)

    this.bgLayer = this.map.createLayer("bgLayer", this.tileset);
    this.platformLayer = this.map.createLayer("platformLayer", this.tileset).setDepth(1.1);
    this.platformLayer.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player, this.platformLayer);
    
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(5);
    

  }
  update(){
  }
}
