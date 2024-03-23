var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

button.addEventListener('click', function(){
    console.log(input.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
});

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


