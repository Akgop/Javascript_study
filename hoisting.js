// 호이스팅이란 변수와 정의가 스코프에 따라 선언과 할당으로 분리되는 것!

// 변수나 함수 선언으로 정의된 객체는 실제 코드의 위치와 상관없이
// 자신의 실행 Scope의 시작 부분에서 생성된다.
function hoisting() {
    hoistingText = "hoisting";
    var hoistingText;
    console.log(hoistingText);
}
hoisting();

// 또 다른 예시
function hoisting2() {
    // var hoistingText2;  <- 호이스팅이 된 이후에는 다음 코드가 생겨서
    console.log("1 : " + hoistingText2);    // 이 부분의 hoistingText2는 undefined(ReferenceError)가 뜰 것이다.
    hoistingText2 = "hoisting2";
    console.log("2 : " + hoistingText2);
}
hoisting2();


// 반면 프로퍼티(Property) 정의는 프로그램 제어가 statement에 도달할 때 생성된다.
// 즉, 호이스팅 되지 않는다!!
console.log(a);         // 에러는 아니고 그냥 undefined 출력
var a = 12;

console.log(b.number);      //TypeError: Cannot read property 'number' of undefined
var b = {name: "object", number: "24"};
console.log(b.number);      // 24 출력

console.log(c);     // ReferenceError: c is not defined -> 호이스팅이 되지 않은 것
global.c = 36;
console.log(c);     // 36 출력