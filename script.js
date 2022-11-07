
//Input

const inputBlock = document.querySelector('.inputs-block')

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

function removeInput(event) {
    event.target.parentElement.remove()
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

function addDiv() {
    let div = document.createElement('div');
    div.innerHTML =
        `<div class="inputs-block">
            <input type="text">
            <img src="./img/greyX.svg" alt="grey-x" class="grey-x">
            </div>`
    let img = div.querySelectorAll('.grey-x')
    document.querySelector('.inputs').append(div)
    img.forEach((item) => {
        item.addEventListener('click', removeInput)
    })
    div.addEventListener('keyup', readOnly)
}

//Sort

let sort = document.querySelector('.grey-down')
sort.addEventListener('click', changeSortColor)
sort.addEventListener('mouseover', sortHover)
sort.addEventListener('mouseout', sortHover)

let count = 0;

function changeSortColor(event) {
    if (count % 2 == 0) {
        event.target.src = './img/greyUp.svg'
        count++
        
        let values = document.querySelectorAll('input')
        let valuesArr = [...values]

        valuesArr.forEach((item) => {
            item = item.value
        })

        // Для чисел
        // valuesArr.sort((a, b) => {
        //     if (+(a.value) > +(b.value)) {
        //         return 1;
        //     }
        //     if (+(a.value) < +(b.value)){
        //         return -1;
        //     }
        //     return 0;
        // })

        let sorted = valuesArr.sort((a, b) => {
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value){
                return -1;
            }
            return 0;
        })
        
        console.log(valuesArr)
        console.log(values)

    } else {
        event.target.src = './img/greyDown.svg'
        count++

        let values = document.querySelectorAll('input')
        let valuesArr = [...values]

        valuesArr.forEach((item) => {
            item = item.value
        })


        // Для чисел
        // valuesArr.sort((b, a) => {
        //     if (+(a.value) > +(b.value)) {
        //         return 1;
        //     }
        //     if (+(a.value) < +(b.value)){
        //         return -1;
        //     }
        //     return 0;
        // })

        valuesArr.sort((b, a) => {
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value){
                return -1;
            }
            return 0;
        })

        console.log(valuesArr)

    }
}


function sortHover(event) {
    if (event.type == 'mouseover') {
        if (count % 2 == 0) {
            event.target.src = './img/blackDown.svg'
        } else {
            event.target.src = './img/blackUp.svg'
        }
    } else {
        if (count % 2 == 0) {
            event.target.src = './img/greyDown.svg'
        } else {
            event.target.src = './img/greyUp.svg'
        }
    }
}

