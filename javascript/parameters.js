// 함수의 정의보다 더 많은 수의 인자가 전달된다면?
// arguments 객체를 사용하여 전달된 매개변수를 컨트롤 할 수 있다.
// arguments는 각 함수로 전달되는 매개변수를 컨트롤 하는 것.
// 즉, 함수레벨 스코프를 갖는다.

function addNum() {
    var sum = 0;
    // 
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function multiply() {
    var sum = 1;
    for(var i = 0; i < arguments.length; i++) {
        sum *= arguments[i];
    }
    return sum;
}

console.log(
    addNum(1, 2, 3),
    addNum(1, 2),
    addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
); // 6 3 55 출력됨

console.log(
    multiply(1, 2, 3),
    multiply(5, 6),
    multiply(5, 4, 3, 2, 1)
);

// 매개변수의 기본값을 지정하고 싶다면?
// python의 keyword argument와 동일

function sub(a, b = 1) {
    return a - b;
}

console.log(
    sub(5, 3),  // 5 - 3 = 2
    sub(5)      // 5 - 1 = 4
);

// 나머지 매개변수들을 통째로 받기?
// ... 접두사를 사용하여 한번에 지정이 가능

function subAll(first, ...restArgs) {
    for (var i = 0; i < restArgs.length; i++){
        first -= restArgs[i];
    }
    return first;
}

console.log(
    subAll(100, 4, 3, 2, 1),
    sub(50, 1, 1, 1, 1, 1, 1, 1)
);