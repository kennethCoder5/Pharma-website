let bar = document.querySelector('#menubar');
let nav = document.querySelector('.navbar')

bar.onclick = () => {
    bar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}
