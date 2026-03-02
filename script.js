class BotaoCallToAction {
    constructor(element) {
        this.btn = element; 
        this.init(); // Inicia a configuração dos eventos
    }

    init() {
        this.btn.addEventListener("mouseenter", () => { // Detecta quando o mouse entra no botão
            this.btn.style.transform = "scale(1.1)"; // Aumenta o tamanho do botão em 10%
            this.btn.style.transition = "0.2s"; // Define a velocidade da animação (0.2 segundos)
        });

        this.btn.addEventListener("mouseleave", () => { // Detecta quando o mouse sai do botão
            this.btn.style.transform = "scale(1.0)"; // Retorna o botão ao tamanho original
            this.btn.style.transition = "0.2s"; // Mantém a suavidade na volta
        });
    }
}

const botoes = document.querySelectorAll(".wpbtn"); // Seleciona todos os elementos com a classe ".wpbtn"
botoes.forEach(botao => new BotaoCallToAction(botao)); // Cria uma nova instância da classe para cada botão


/************************************************************************************************************** */

const myObserver = new IntersectionObserver((entries) => {  
/*Segundo passo: Dando sequência, eu criei um "new IntersectionObserver". Este vai observar as entradas e a function com o parâmetro "entries" vai printar no console assim que o elemento em questão ficar visível(ou transparênte). Ah, e quando ficar visível, vai aparecer a informação "isIntersecting: true". Por ultimo, atribuí meu observador à variável "myObserver".*/
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const elements = document.querySelectorAll(".hidden")// Acho que o primeiro passo mais sensato é começar por aqui mesmo. Bom, nesta linha nós criamos essa variável "elements" e atribuímos a ela todos os elementos HTML com a classe .hidden. 

elements.forEach( (element) => myObserver.observe(element))/** O terceiro passo foi declarar nesta linha; pra cada elemento dentro da variável "elements", que são as classes HTML .hidden, uma função de seta(arrow function) vai chamar o meu observador que está dentro da variável myObserver. */
 



















/**const btn = document.querySelector(".wpbtn")
btn.addEventListener("mouseenter", ()=> {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "0.2s"
})

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1.0)";
    btn.style.transition = "0.2s"
})

/*A partir daqui, vamos definir as animacões de entrada do elementos na tela.*/
































/*const myobserver = new IntersectionObserver((entries) => {
    console.log(entries)

})*/
