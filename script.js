//Função para criar elementos
function adicionar() {
    const item = document.createElement('li');
    item.classList.add('todo_item');
    var txt = document.getElementById('box-txt').value;
    var t = document.createTextNode(txt);
    document.getElementById('list').appendChild(item);
    item.appendChild(t);

    if (txt === '') {
        alert("Você deve escrever alguma coisa!");
    }
    else {
        document.getElementById("list").appendChild(item);
    }
}
//Adicionar o checked ao clicar
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

