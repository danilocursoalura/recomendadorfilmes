//Animaçao, Fantasia, Terror, Super-Heroi

//Moana - Livre - Animaçao, Fantasia
//Harry Potter - Livre - Fantasia
//Alvin e os Esquilos - Livre - Animaçao

//Guardiões da Galáxia - 12 - Super-Heroi

//It - A coisa - 16 - Terror

let campoIdade;
let campoAnimacao;
let campoFantasia;
let campoSuperHeroi;
let campoTerror;

function setup() {
  createCanvas(600, 400);
  createElement ("h2", "Recomendador de Filmes");
  createSpan ("Sua idade");
  campoIdade = createInput("15");
  campoAnimacao = createCheckbox("Gosta de Animação?");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoSuperHeroi = createCheckbox("Gosta de Super-Herói?");
  campoTerror = createCheckbox("Gosta de Terror?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();

  let gAnimacao = campoAnimacao.checked();
  let gFantasia = campoFantasia.checked();
  let gSuperHeroi = campoSuperHeroi.checked();
  let gTerror = campoTerror.checked();

  let recomendacao = geraRecomendacao(
    idade,
    gAnimacao,
    gFantasia,
    gSuperHeroi,
    gTerror
  );
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(76, 0, 115);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gAnimacao, gFantasia, gSuperHeroi, gTerror) {
  if (idade >= 12) {
    if (idade >= 16) {
      if (gTerror) {
        return "It - A Coisa";
      } else {
        if (gSuperHeroi) {
          return "Guardiões da Galáxia"
        } else {
          if (gAnimacao){
    if (gFantasia) {
      return "Moana";
    } else {
      return "Alvin e os Esquilos";
    }
  } else {
    return "Harry Potter"
  }
      } 
    }
} else {
  if (gSuperHeroi){ 
    return "Guardiões da Galáxia"
  } else{
  if (gAnimacao){
    if (gFantasia) {
      return "Moana";
    } else {
      return "Alvin e os Esquilos";
    }
  } else {
    return "Harry Potter"
  }
}
}
} else { 
  if (gAnimacao){
    if (gFantasia){
      return "Moana"
    } else {
      return "Alvin e os Esquilos"
    }
  } else {
    return "Harry Potter"
  }
}
}