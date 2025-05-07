const socket = io();

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload,
        create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('homescreen', 'assets/homescreen.jpeg');
}

function create() {
    this.add.image(400, 300, 'homescreen').setDisplaySize(800, 600);
}
