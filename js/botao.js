
function updateName() { //  função para mudar o nome
    window.alert("vc apertou o botao");
    window.confirm("quer mesmo usar o botao?");
    const name = prompt("Enter a new name");  // Obtendo nome pelo usuario
    button.textContent = `Player 1: ${name}`;  // alteramos o que ta escrito no button com o nome 'player 1:(nome entrado pelo usuarios)'
  }


const button = document.querySelector("button")

button.addEventListener("click", updateName)