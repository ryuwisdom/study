// function sum(a, b, c) {
//     console.log(a * b / c);
// }
// sum(5, 6, 7);

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

function textWrite(name, hobby, color) {
    circle.innerHTML = `제이름은 ${name}이고<br> 취미는 ${hobby}입니다.`
    circle.style.background = color

}
// textWrite('컴퓨터', 'green', 'jihye')


// 일반 함수 선언
// function hello(name) {
//     console.log(`hello ${name}!`);
// }

// 화살표 함수 선언
// const hello = (name) => {
//     console.log(`hello, ${name}!`);
// }

// hello('bonnie');

const add = (a, b) => a * b;
const sum = add(2, 3);
console.log(sum);


// 점수 매기기
// function getGrade(score){
//     if(score ===100){
//         return 'A+';
//     } else if (score >= 90){
//         return 'A';
//     } else if (score >=85){
//         return  'B+';
//     } else if (score >=80){
//         return  'B';
//     } else {
//         return 'F';
//     }
// }

// const grade = getGrade(85);
// console.log(grade);

