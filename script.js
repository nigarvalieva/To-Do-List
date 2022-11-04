
//Input

const input = document.querySelectorAll('input');
input.forEach((item) => {
    item.addEventListener('keyup', readOnly)
})

function readOnly(event) {
    if (event.key == 'Enter') {
        event.target.readOnly = true
    }
}

//Крестик

let greyX = document.querySelectorAll('.grey-x')
greyX.forEach((item) => {
    item.addEventListener('click', removeInput)
})

function removeInput() {
    let inputsBlock = document.querySelector('.inputs-block')
    inputsBlock.remove()
}

//Добавить

const foot = document.querySelector('.foot');
foot.addEventListener('mouseover', changeColor);
foot.addEventListener('mouseout', changeColor);

function changeColor(event) {
    const buttonPlus = document.querySelector('.button-plus')
    const buttonAdd = document.querySelector('.button-add')
    if (event.type == 'mouseover') {
        buttonAdd.style.backgroundColor = '#AA68FE';
        buttonPlus.style.backgroundColor = '#833AE0';
    } else {
        buttonPlus.style.backgroundColor = '#AA68FE';
        buttonAdd.style.backgroundColor = '#833AE0';
    }
}

foot.addEventListener('click', addDiv);

function addDiv(){
    let div = document.createElement('div');
    div.innerHTML =
        `<div class="inputs-block">
            <input type="text">
            <img src="./img/Group 77.svg" alt="grey-x" class="grey-x">
            </div>`
    let img = div.querySelector('.grey-x')
    document.querySelector('.inputs').append(div)
    div.addEventListener('keyup', readOnly)
    img.addEventListener('click', removeInput)
}