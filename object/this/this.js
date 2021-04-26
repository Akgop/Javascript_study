// 객체: entity를 표현하고자 할 때 생성
let user = {
    name: "John",
    age: 30,
};

// 메서드: 객체 프로퍼티에 할당된 함수
user.sayHi = function(){    // 함수 표현식
    console.log("HI");
};

// 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있다.
user.sayName = function() {
    console.log(this.name); // this 값은 런타임에 결정된다.
}

user.sayHi();
user.sayName();

// this 를 사용하지 않았을 때의 문제점
// 1. user2 객체 할당
let user2 = {
    name: "Kim",
    age: 10,

    // 내부 함수 생성
    sayName() {
        console.log(user2.name); // user의 name 프로퍼티 출력
    }
}
// 2. admin은 user2의 참조값의 복사본을 받는다.
let admin = user2;
user2 = null; 
// user2는 null값을 갖게되며 더이상 name, age를 프로퍼티로 갖지 않고, sayName도 메서드로 갖지 않는다.
// 따라서 admin의 sayName은 user2.name을 호출하게 되며 이는 없는 프로퍼티를 참조하게 되는 결과를 낳는다.
// 만약 admin이 올바르게 객체 내부의 name 프로퍼티를 사용하고 싶었다면
// sayName 메서드의 출력부를 this.name으로 바꿔야 한다.
admin.sayName();


let user3 = {
    firstName: "보라",
    sayHi() {
        // arrow function은 일반 함수와 달리 고유한 this를 갖지 않는다.
        // 즉 외부 함수에서 this를 가져온다.
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user3.sayHi();