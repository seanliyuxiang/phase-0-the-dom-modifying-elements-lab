// Write your code here!

// 1) no longer has DOM node 'main#main'
const main = document.getElementsByTagName('main')[0];
main.remove();

// 2) has a 'newHeader' variable that points to node 'h1#victory'
const body = document.getElementsByTagName('body')[0];
const newHeader = document.createElement('h1');
body.appendChild(newHeader);

// 3) has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = 'victory';

// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = 'Sean is the champion';