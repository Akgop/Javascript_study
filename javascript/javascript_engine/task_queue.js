/*
JS 런타임 환경에는 task를 임시저장하는 대기 큐가 존재한다.
이를 task queue라고 부르고, call stack이 비어 있을 때
대기열에 먼저 들어온 순서대로(FIFO) call stack으로 이동하여 수행된다.
*/

// setTimeout에 0ms 를 부여
// 딜레이가 없어 바로 실행될 것 같지만,
// 비동기로 호출되는 함수들은 call stack에 바로 쌓이지 않고
// task queue에 push 된다.
setTimeout(function() {
    console.log("first");
}, 0);

// 따라서 결과는 second -> first 순서로 실행된다.
console.log("second");