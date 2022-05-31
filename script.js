const counterNumber = document.querySelector(".counter-number");
let countNumber = 0;
document.querySelector(".btn-decrease").addEventListener("click", function() {
    countNumber--;
    counterNumber.textContent = countNumber;
});
document.querySelector(".btn-increase").addEventListener("click", function() {
    countNumber++;
    counterNumber.textContent = countNumber;
});

document.querySelector(".btn-reset").addEventListener("click", function() {
    countNumber = 0;
    counterNumber.textContent = countNumber;
});