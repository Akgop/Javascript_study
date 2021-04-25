function test1() {
    console.log("test1");
    test2();
}

function test2() {
    let timer = setTimeout(function () {
        console.log("test2");
    }, 0);
    test3();
}

function test3() {
    console.log("test3");
}

test1();

// 1. test1()이 호출되어 "test1" 출력
// 2. test1() 에서 test2() 호출
// 3. 익명함수 setTimeout은 task queue로 들어가고,
//    test3()는 call stack으로 들어간다.
// 4. 따라서 test3()가 실행되어 "test3" 출력
// 5. call stack이 비어있기 때문에 task queue -> call stack으로 test2가 이동됨
// 6. "test2" 출력
// 결과: test1 -> test3 -> test2
