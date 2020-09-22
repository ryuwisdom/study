const jihye = {
    name : "jihye",
    age : 28,
    likes : ["book","hiking","traveling"]
}

function test(jihye) {
    // 객체를 파라미터로 받아서
    // 나이를 29로 바꾼 객체를 반환 (원본은 변경하면 안 됨)

       
       let ryu = JSON.parse(JSON.stringify(jihye))
       ryu.age = 29;
   
       return ryu;
}


console.log(test(jihye));
console.log(jihye);