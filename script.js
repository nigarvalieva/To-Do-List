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
//Enter
// document.addEventListener('keyup', (event) => {
//     if (event.key == 'Enter'){
//         addDiv()
//     }
//   });

//Delete
let greyX = document.querySelectorAll('.grey-x')
greyX.forEach((item) => {
    item.addEventListener('click', removeInput)
})
function removeInput(event) {
    const countDeleteBlock = document.querySelectorAll('.inputs-block input')
    if (countDeleteBlock.length > 1){
    event.target.parentElement.remove()
    } else {
        countDeleteBlock.forEach((item) => {
            item.value = ''
            item.readOnly = false
        })
    }
}
//Add
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
        `<input type="text" draggable="true">
         <img src="./img/greyX.svg" alt="grey-x" class="grey-x">`
    let img = div.querySelectorAll('.grey-x')
    document.querySelector('.inputs').append(div)
    img.forEach((item) => {
        item.addEventListener('click', removeInput)
    })
    div.classList.add('inputs-block')
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
        let valuesArr = []
        values.forEach((item) => {
            valuesArr.push(item.value)
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
        valuesArr.sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        })
        for(let i = 0; i < values.length; i++){
            values[i].value = valuesArr[i]
        }
    } else {
        event.target.src = './img/greyDown.svg'
        count++
        let values = document.querySelectorAll('input')
        let valuesArr = []
        values.forEach((item) => {
            valuesArr.push(item.value)
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
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        })
        for(let i = 0; i < values.length; i++){
            values[i].value = valuesArr[i]
        }
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
//Drag
const dragPlace = document.querySelector('.inputs')
new Sortable(dragPlace, {
    animation: 150
})
