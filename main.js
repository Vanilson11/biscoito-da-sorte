const elementCookieClick = document.getElementById('elementClick');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnOpenOtherCookie = document.getElementById('btnOpenOtherCookie');

const frases = [
  'A vida trará coisas boas se tiver paciência.', 
  'A beleza está nos olhos de quem vê', 'Todos temos uma escolha', 
  'Não compense na ira o que lhe falta na razão.', 'A maior de todas as torres começa no solo.', 
  'É necessário sempre acreditar que o sonho é possível.', 
  'Você não pode simplesmente pular para o final. A jornada é o que importa.', 
  'Todos os dias você arruma os seus cabelos. Por que não faz o mesmo com o coração?', 
  'A juventude não é uma época da vida, é um estado de espírito.', 
  'Talvez você esteja perdendo tempo esperando por algo/alguém que não virá.', 'Escolha alguém que se sinta feliz por estar com você', 
  'Você nunca saberá se nem ao menos tentar', 
  'Os defeitos são mais fortes quando o amor é fraco.', 
  'Todas as coisas são difíceis antes de se tornarem fáceis.'
];

let randomNumber = parseInt(Math.random() * frases.length);


elementCookieClick.addEventListener("click", openCookie);
btnOpenOtherCookie.addEventListener("click", handleReset);

document.addEventListener("keydown", (e) => {
  if(e.key === 'Enter' && screen1.classList.contains('hide') == false){
    openCookie();
  } else if(e.key === 'Enter' && screen2.classList.contains('hide') == false){
    handleReset();
  }
})

function openCookie(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
  addRandomPhrase()
}

function addRandomPhrase(){
  screen2.querySelector('.message').innerHTML = `${frases[randomNumber]}`
}

function handleReset(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');

  randomNumber = parseInt(Math.random() * frases.length);
}
