let user1 = new Object();   // '객체 생성자' 문법
let user2 = {}      // '객체 리터럴(Literal)' 문법

let user3 = {   // key: value
    name: "John",   // 프로퍼티
    age: 30
}

// dot notation을 이용하여 프로퍼티 읽기
console.log(user3.name);
console.log(user3.age);

// user3 객체에 프로퍼티 {isAdmin: True} 추가
user3.isAdmin = true;
console.log(user3.isAdmin);

// 프로퍼티 삭제
delete user3.age;
console.log(user3); // key가 age인 프로퍼티 삭제

// 문자열에 공백이 있는 key인경우 따옴표 사용
let user4 = {
    name: "Park",
    age: 20,
    "likes birds": true,    // 프로퍼티의 마지막이 쉼표로 끝나도 된다.
}

// 공백이 있는 경우 대괄호 표기법 사용
user4["likes birds"] = false;
console.log(user4["likes birds"]);


/* 
const로 선언된 객체 내부는 수정될 수 있다.
const는 user_c의 값을 고정하지만 그 내용은 고정하지 않는다.
즉, 프로퍼티 값은 변경할 수 있음
user = ~~ 와 같이 전체적으로 설정하려고 할 때 오류 발생
*/ 
const user_c = {
    name: "Kim"
};
user_c.name = "Lee";
console.log(user_c.name);   // Lee 출력

user_c.isKor = true;    // 가능
console.log(user_c.isKor);

// TypeError: Assignment to constant variable
// user_c = {
//     name: "Oh",
//     isKor: false,
// }


// computed property
let fruit = "apple"

let bag = {
    [fruit]: 5,
};

console.log(bag.apple);


// property value shorthand
function makeUser (name, age) {
    return {
        name,
        age: age ?? 25,
    }
}

let user5 = makeUser("John", 30);
let user6 = makeUser("Kim")
console.log(user5.name);
console.log(user6.age)

// 객체 정렬 방식
let codes = {
    "49": "독일",
    "41": "스위스",
    "44": "영국",
    "1": "미국",
};

// key가 숫자인경우 숫자대로 정렬, 나머지는 입력된 순서대로 정렬
for (let code in codes) {
    console.log(code);
}