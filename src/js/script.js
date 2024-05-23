const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}
//quando clicar e um item do menubar, esconder o menu
const links = document.querySelectorA11('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}