let container = document.querySelector('.container');
let icons = ['<i class="fa-solid fa-chess-rook"></i>', '<i class="fa-solid fa-chess-knight"></i>', '<i class="fa-solid fa-chess-bishop"></i>', '<i class="fa-solid fa-chess-queen"></i>', '<i class="fa-solid fa-chess-king"></i>', '<i class="fa-solid fa-chess-bishop"></i>', '<i class="fa-solid fa-chess-knight"></i>','<i class="fa-solid fa-chess-rook"></i>', '<i class="fa-solid fa-chess-pawn"></i>'];
let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    let cell = document.querySelector('.cell');
    let color = 1;
    let number = 64;
    for (let i = 0; i < number; i++) {
        let newCell = document.createElement('div');

        newCell.className = 'cell';
        newCell.id = i;

        if (i >= 0 && i <= 15) {
            newCell.style.color = 'black';
            if (i < 8) newCell.innerHTML = icons[count++];
            else newCell.innerHTML = icons[count];
        } else if (i >= 48){
            newCell.style.color = 'white';
            if (i < 56) newCell.innerHTML = icons[count];
            else newCell.innerHTML = icons[--count];
        }

        if (color == 1) {
            newCell.classList.add('green');
            if (i == 0 || i%8 != 7) color = 0;
        } else {
            newCell.classList.add('greenyellow');
            if (i == 0 || i%8 != 7) color = 1;
        }

        container.appendChild(newCell);
    }
})