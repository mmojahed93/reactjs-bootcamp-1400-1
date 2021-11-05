const firstP = document.getElementsByClassName('firstP')[0]
const changeContent = () => {
    firstP.textContent = "Content is changed!"
}


firstP.addEventListener('click',changeContent)
