//let body = document.getElementById('body');
let button = document.getElementById('add-text');
let con = document.getElementById('con');

console.log(Math.floor(Math.random() * (9999 - 2000) ) + 2000);

document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('removeID').value
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('removeID').value = '';
})

button.addEventListener('click', () => {
    var parent = document.getElementById('body');
    var newElement1 = document.createElement('tr');
    var newElement2 = document.createElement('th');
    var newFrName = document.createElement('td');
    var newLsName = document.createElement('td');
    var newHandle = document.createElement('td');
    let m = Math.floor(Math.random() * (9999 - 2000)) + 2000;

    newFrName.innerHTML = document.getElementById('addFrName').value;
    newLsName.innerHTML = document.getElementById('addLaName').value;
    newHandle.innerHTML = document.getElementById('addHandle').value;

    newElement2.setAttribute('scope', 'row');
    newElement2.innerHTML = m;

    newElement1.setAttribute('id', m);
    newElement1.appendChild(newElement2);

    newElement1.appendChild(newFrName);
    newElement1.appendChild(newLsName);
    newElement1.appendChild(newHandle);


    parent.appendChild(newElement1);

    document.getElementById('addFrName').value = '';
    document.getElementById('addLaName').value = '';
    document.getElementById('addHandle').value = '';

})

