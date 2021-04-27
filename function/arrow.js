/*
arrow function: 함수 표현식보다 단순하고 간결하게
사용법
let func = (arg1, arg2, ... , argN) => expression
*/

let sum = (a, b) => a + b;
console.log( sum(1, 2) );

let double = n => n * 2;
console.log( double(5) );

// expression이 여러줄 인 함수
let sum_all = (a, b, c) => {
    let result = a + b + c;
    return result;
}
console.log( sum_all(1, 2, 3) );


// 예제 1
function ask (question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    () => alert("동의"),
    () => alert("취소")
)
