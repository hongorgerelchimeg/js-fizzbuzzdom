let areaNumbers = document.querySelector('.fizz-buzz-dom');


for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        areaNumbers.innerHTML += `<div class="box fizzbuzz">fizzbuzz</div>`;
    } else if  (i % 3 == 0) {
        areaNumbers.innerHTML += `<div class="box fizz">fizz</div>`;
    } else if (i % 5 == 0) {
        areaNumbers.innerHTML += `<div class="box buzz">buzz</div>`;
    }
    else {
        areaNumbers.innerHTML += `<div class="box">${i}</div>`;
    }
}