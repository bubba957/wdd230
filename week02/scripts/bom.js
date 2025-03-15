const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', () => {
    if (input.value != '')
        input.focus();
});

li.innerHTML = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);
deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';