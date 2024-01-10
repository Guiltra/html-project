const button = document.getElementById(`submit`);
const input = document.getElementById(`input`);
const result = document.getElementById(`result`);
const grid = document.getElementById(`images`);

let random_number;

function randomFace(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice(){
    grid.innerHTML = ``;
    let array = new Array;

    for(let i = 1; i <= Number(input.value); i++){
        let random_number = randomFace();

        array.push(random_number);

        let image = new Image();

        image.src = `${random_number}.png`;
        image.width = 100;
        image.height = 100;
        image.style.flexBasis = "25";

        grid.appendChild(image);
    }

    let rolls = `Rolls:`;

    for(let i = 0; i < array.length; i++){
        i !== array.length - 1 ? rolls += ` ${array[i]},` : rolls += ` ${array[i]}`

    result.textContent = rolls;
    }
}