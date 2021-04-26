/*
constructor function과 일반 함수간에 기술적 차이는 없다.
다만 아래의 관례를 따른다.
1. 함수 이름의 첫 글자는 대문자로 시작한다.
2. 반드시 new 연산자를 붙여 실행한다.
*/

function User(name) {
    // this = {};
    this.name = name;
    this.isAdmin = false;
    // return this; -> new를 사용하면 this는 자동으로 반환된다.
}
let user = new User("Jack");

let user2 = new User("Kim");
let user3 = new User("Park");

// 위와 같이 유사한 객체를 여러개 만들 때 new를 이용하면 코드 재사용률이 올라간다.

let user4 = new function() {
    
}