/*
call stack 에 대한 이해.
JS engine은 단 하나의 콜 스택을 사용한다. -> Run to Complete
새로운 요청이 들어올 때마다 순차적으로 stack에 담아 처리
call stack에 새로운 프레임이 생기고 push, pop
*/

// 3. foo를 수행한다. return a + b 하며 call stack에서 pop
function foo(b) {
    var a = 10;
    return a + b;
}

// 2. bar 함수에서 foo를 호출한다.
//    foo 함수가 bar 위에 push
// 4. foo가 pop 되며 bar도 return foo 하며 pop
function bar(x) {
    var y = 2;
    return foo(x + y);
}

// 1. bar 함수를 호출해서 bar에 해당하는 stack frame이 형성
//    지역변수(y)와 함께 생성된다.
// 5. 모든 call stack 순서 종료되고 전역 스택만 남음.
console.log(bar(1));