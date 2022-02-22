//declarando as variáveis
var trex,trex_running;
var edges;

//preload carrega as mídias do jogo
function preload(){
  //animação do trex
  trex_running = loadAnimation("images/trex3.png","images/trex4.png");

  //animação do solo
  
}


//setup faz a configuração
function setup(){
  createCanvas(600,200);

  //sprite trex
  trex = createSprite(50,160,20,40);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  //sprite Solo
  
  
  //criando bordas
  edges = createEdgeSprites();
  
}

//draw faz o movimento, a ação do jogo
function draw(){
  background("lightgray");

  //pulo do trex
  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  gravity();

  //colisão do trex
  trex.collide(edges);


  //movimento do solo

 
  //coordenadas do mouse na tela
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)
  drawSprites();
}

//função da gravidade
function gravity(){
  trex.velocityY += 0.5;
}
