
const btn = document.querySelector(".wpbtn")
btn.addEventListener("mouseenter", ()=> {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "0.2s"
})

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1.0)";
    btn.style.transition = "0.2s"
})

/*A partir daqui, vamos definir as animacões de entrada do elementos na tela.*/


const elements = document.querySelectorAll(".entrada")

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element) => myObserver.observe(element))





























/*const myobserver = new IntersectionObserver((entries) => {
    console.log(entries)

})*/
