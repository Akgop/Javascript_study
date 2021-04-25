const user = {
    name: "John",
};

user.name = "Pete";

// 위 코드는 에러 없이 실행된다.
// why?
// user는 객체 참조 값을 저장하고 있다.
// const는 이 참조 값이 변경되는 것을 막는다.
// 객체의 내용(프로퍼티)을 변경하는건 막지 않는다.