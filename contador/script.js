

let value = document.getElementById('value')
let count = 0


function adicionarUm() {
    value.textContent = parseInt(value.textContent) + 1;
    count++
    if (count > 0) {
        value.style.color = "blue"
    }else if (count < 0){
        value.style.color = "red"
    }else{
        value.style.color = "black"
    }
}

function tirarUm() {
    value.textContent = parseInt(value.textContent) - 1;
    count--
    if (count > 0) {
        value.style.color = "blue"
    }else if (count < 0){
        value.style.color = "red"
    }else{
        value.style.color = "black"
    }
}

function resetar() {
    value.textContent = 0
    count = 0
    if (count < 0) {
        value.style.color = "blue"
    }else if (count < 0){
        value.style.color = "red"
    }else{
        value.style.color = "black"
    }
}
