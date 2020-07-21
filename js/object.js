// const name = 'jihye';
const person = {
    name: 'jihye',
    hobbies: ['biking', 'cooking', 'running']
}

person.hobbies[2] = 'cleanig';
console.log(person.hobbies[2]);


const city = {
    population: 3000000,
    name: 'daegu',
    size: '883.5km²',
    isDowntown: true,
    food: ['a', 'b', 'c']
}
console.log(city.size);








// 변수 내 객체는 변경가능 
// person.name = 'bonnie'

//아래처럼 선언 하지만 .person.name 으로 보통 사용
// person['name'] = 'ryu';
// console.log(person['name']);