const gridElement = document.querySelector('.container')
const playButton = document.getElementById('play')
const CellsEasy = 100
const CellsNormal = 81
const CellsHard = 49
//al click del button devo togliere la classe d-none e aggiungere la classe
//d-flex al container





let i = 0
playButton.addEventListener('click', function () {
    while (i < 100) {
    for (i = 0; i < CellsEasy; i++) {
        let num = i + 1
        
            const cellEl = document.createElement('div')
            cellEl.className = 'cell'
            cellEl.innerHTML = num
            // console.log(cellEl)
            gridElement.append(cellEl)

            cellEl.addEventListener('click', function () {
                console.log('click sulla casella numero:', num)
                cellEl.classList.toggle('bg-black')
            })

        }
    }
})
