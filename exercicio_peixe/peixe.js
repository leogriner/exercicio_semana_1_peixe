var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,

        scene:{
    preload: preload,
    create: create,
    update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
this.load.image('mar','assets/bg_azul-claro.png'); //carregar o logo
this.load.image('logo','assets/logo-inteli_azul.png');
this.load.image('concha','assets/concha.png');

//carregar o peixe
this.load.image('peixe','assets/baiacu.png');
 }
 
    
    function create() {
    this.add.image(400,300,'mar');
    
    //adicionar o logo na tela
    this.add.image(400,525,'logo').setScale(0.5);
    
// guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    //adicionar concha na tela
    this.add.image(550, 500, 'concha')
    this.add.image(300, 500, 'concha')
    this.add.image(150, 450, 'concha')
    this.add.image(100, 500, 'concha')
    }

    function update() {           
        
    // adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;   
   }

