const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const circle = document.querySelector("#circle");

btn1.addEventListener('click', () => {
    circle.style.background = "red";

})
btn2.addEventListener('click', () => {
    circle.style.background = "yellow";

})
btn3.addEventListener('click', () => {
    circle.style.background = "green";

})
btn4.addEventListener('click', () => {
    circle.style.background = "blue";

})

const buttons = document.querySelectorAll('button');
// console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.innerText);
        // console.log(circle.style.background);
        circle.style.background = button.innerText;

    })
})