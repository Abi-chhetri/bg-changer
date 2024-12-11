const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);
switch(e.target.id){
  case "black":
    body.style.backgroundColor = "black";
    h1.style.color="white";
    break;
    
    case "white":
      body.style.backgroundColor = e.target.id;
      h1.style.color="black";
      break;
    case "blue":
      body.style.backgroundColor = e.target.id;
      h1.style.color="white";
      break;
    case "red":
      body.style.backgroundColor = e.target.id;
      h1.style.color="white";
      break;
    case "yellowgreen":
      body.style.backgroundColor = e.target.id;
      h1.style.color="rgb(95, 16, 151)";
      break;
}
  });
});
