function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

console.log(user.ref.name);
// undefined 출력
// this 값을 설정할 땐 객체 정의가 사용되지 않기 때문이다.
// this값은 호출 시점에 결정된다.

// makeUser() 내 this 는 undefined 가 된다.
// 메서드로 호출된 게 아니라 함수로 호출되었기 때문.

function makeUser2 () {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
};

let user2 = makeUser2();
console.log(user2.ref().name);
// 올바르게 John 출력
// user.ref() 자체가 메서드가 되고, this는 . 앞의 객체가 되기 때문에 정상작동


console.log(user);
console.log(user.ref);