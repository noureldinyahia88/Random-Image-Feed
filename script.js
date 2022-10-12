const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10


for(let i=0;i<rows*3;i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getrandomsize()}`
    container.appendChild(img)
}
function getrandomsize() {
    return `${getrandomnum()}x${getrandomnum()}`
}
function getrandomnum() {
    return Math.floor(Math.random()*10 ) +300
}