function sum(a, b, c) {
    console.log(a * b / c);
}
sum(5, 6, 7);

//함수 제작 
//circle의 색깔을 넘겨받은 값으로 바꿔주는 함수 제작 

const circle = document.querySelector("#circle");

function change(color) {
    // console.log(color);
    circle.style.background = color
}
// change('pink');


//함수 제작, 넘겨받은 값으로 circle안에 글자를 입력해주는 함수 
//함수 이름 = write

function textWrite(hobby, color, name) {
    circle.innerText = `제이름은 ${name}이고 취미는 ${hobby}입니다.`
    circle.style.background = color

}
textWrite('컴퓨터', 'green', 'jihye')