function greyPurpleX(event) {
    const element = document.querySelector('.purple-x');
   
    if (event.type == 'mouseover') {
        event.target.style.display = 'none';
        element.style.display = 'block';
    } else {

        event.target.style.display = 'block';
        element.style.display = 'none';
    }
}

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

const greyX = document.querySelectorAll('.grey-x');
greyX.forEach((item) => {
    item.addEventListener('mouseover', greyPurpleX);
    item.addEventListener('mouseout', greyPurpleX);
})

const foot = document.querySelector('.foot');
foot.addEventListener('mouseover', changeColor);
foot.addEventListener('mouseout', changeColor);
foot.addEventListener('click', () => {
    let div = document.createElement('div');
    div.innerHTML = 
    `<div class="inputs-block"> <input type="text">
    <img src="./img/Group 77.svg" alt="grey-x" class="grey-x">
    <img src="./img/Group 70.svg" alt="purple-x" class="purple-x"> </div>`; 
    document.querySelector('.inputs').append(div)

})
