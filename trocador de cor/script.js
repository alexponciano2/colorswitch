

function clicar() {
    let color = ['red', 'blue', 'green', 'yellow', 'orange', 'black', 'white']
    let botao = document.querySelector('#btn1.botao')
    
    botao.addEventListener("click", function(){
        document.body.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    })

}