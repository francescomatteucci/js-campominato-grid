const gridElement = document.querySelector('.container')
const playButton = document.querySelector('.btn')
const Cells = 100
//al click del button devo togliere la classe d-none e aggiungere la classe
//d-flex al container
playButton.addEventListener('click',function(){
gridElement.classList.remove("d-none")
})




for(let i = 0; i < Cells; i++){
    let num = i + 1
    const cellEl = document.createElement('div')
    cellEl.className = 'cell'
    cellEl.innerHTML = num
    // console.log(cellEl)
    gridElement.append(cellEl)

    cellEl.addEventListener('click', function() {
        console.log('click sulla casella numero:', num)
        cellEl.classList.toggle('bg-black')
    })
    
}