// 자바스크립트에서 함수는 first-class object이다.
// first-class object란? -> 다른 요소들과 아무런 차별이 없는 것
// 1. 변수나 자료구조에 저장할 수 있다.
// 2. 함수의 파라미터로 전달할 수 있다.
// 3. 함수의 반환값으로 사용할 수 있다.
// 4. 비교 연산(==, equal 등)을 적용할 수 있다.

// 1. 변수나 자료구조에 저장할 수 있다.
// ex): 익명 함수 표현식(anonymous function expression)
var myfunc = function(txt) {
    console.log(txt);
}
myfunc("변수에 저장.");

// 2. 함수의 파라미터로 "함수"를 전달할 수 있다.
// ex): 콜백 함수(callback function)
function calculator(op, a, b, callback) {
    var result = "";

    switch(op){
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "지원하지 않는 연산자입니다.";
    }

    callback(result);
}

function print1(result) {
    console.log("두 수의 합은 = "+ result + "입니다");
}

calculator("+", 10, 20, print1);
calculator("-", 10, 20, print1);

// 3. 함수의 반환값으로 사용할 수 있다.
// ex): 클로저(closure)
