/*
JS는 Reachability 라는 개념을 사용해 메모리 관리를 수행한다.
"reachable"이란, 도달 가능한가 를 의미한다.
태생부터 도달 가능한 목록: root라고 한다.
- 현재 함수의 local variable, parameter
- nested function에서 chain에 있는 variable, parameter
- global
- 등

즉, root가 참조하는 값이나 chaining을 통해 도달할 수 있는 값은
"reachable"하다고 한다.

JS Engine에서 GC는 끊임없이(while) 동작한다. 도달할 수 없는 객체는 삭제한다.
 */

let user = {
    name: "John",
};
// 여기서 user 는 {name: "John"} 객체에 대한 참조가 끊어진다
user = null;
// 따라서 {name: "John"}에 대한 메모리공간을 GC가 회수한다.


function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});
// 1. family라는 Object(root) 생성
// 2. John의 wife 프로퍼티 = Ann
//    Ann의 husband 프로퍼티 = John  <- 서로 참조
// 3. closure를 통해 family의 father, mother 프로퍼티는
//    각각 man(John), woman(Ann)을 참조하도록 함

delete family.father;
delete family.mother.husband;
// 4. family(root)의 father 프로퍼티 삭제
//    Ann의 husband 프로퍼티 삭제
// 5. John을 참조하고 있는 family, Ann 삭제
//    따라서 John은 더이상 reachable하지 않기에 GC가 해당 메모리 회수함.


