const form = document.querySelector('.js-form'),
input = form.querySelector('input'),
greetings = document.querySelector('.js-greetings'),
renameBtn = document.querySelector('.js-renameBtn')

const USER = 'currentUser';
const SHOW = 'showing';

function saveName(currentValue) {
    localStorage.setItem(USER, currentValue)
}

function handleName(event) {
    event.preventDefault();
    const currentValue = input.value;
    printName(currentValue);
    saveName(currentValue);    
}

function getName() {
    form.classList.add(SHOW);
    form.addEventListener('submit',handleName);
}

function printName(id) {
    form.classList.remove(SHOW);
    greetings.classList.add(SHOW);
    renameBtn.classList.add(SHOW);
    greetings.innerText = `환영합니다. ${id}님!`
}

function removeName() {
    renameBtn.addEventListener('click',removeStorage);
}

function removeStorage(currentUser) {
    localStorage.removeItem(USER);
    location.reload();
}

function loadName() {
    const currentName = localStorage.getItem(USER);
    if (currentName === null) {
        getName();
    } else {
        printName(currentName);
    }
}

function init() {
    loadName();
    removeName();
}

init();
