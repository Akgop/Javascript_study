/*
Mark-and-sweep GC
"더 이상 접근할 수 없는 객체" 를 더 이상 필요하지 않은
메모리로 판단하여 해당 메모리를 해제.
 */

// 예시 1
function f() {
    var o = {};
    var o2 = {};
    o.a = o2;
    o2.a = o;

    return "leak";
}
// 여기서 o, o2는 도달 불가능하기 때문에,
// GC가 수행되며 메모리가 해제된다.


// 예시 2
function f() {
    var o = {};
    var o2 = {};
    o.a = o2;
    o2.a = o;

    // 클로저
    return function() {
        console.log(o);
        console.log(o2);
    }
}

// f 함수가 함수를 return 함으로써, 반환된 함수는 여전히
// o, o2를 접근할 수 있게 된다.
// 따라서 GC가 해당 메모리를 회수하지 않는다. "reachable"
const a = f();
a();


// 예시 3
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
// 앞서 reachability.js 에서 다뤘던 예시이다.
// 지금까진 모두 reachable하다.
delete family.father;
delete family.mother.husband;
// root로부터 John으로 가는 모든 경로가 제거되었다.
// 즉 root에서 시작하여 John을 참조할 수 없다는 뜻이다.
// 따라서 GC는 해당 메모리를 회수한다.

// 예시 4
function f(){
    var o = {};
    var o2 = {};
    o.a = o2;
    o2.a = o;

    return function(){
        console.log("not related with o & o2");
    }
}

const a = f();
a();
// 이 예시에서 o와 o2는 사용되지 않았다.
// 따라서 GC가 수행될 것으로 보이지만 그렇지 않다.
// GC가 회수하는 대상은 "reachable"한지만 따지기 때문이다.
// o, o2는 사용하지 않을 뿐, root로 부터 reachable하기 때문에
// GC에 의해 회수당하지 않는다. (scope chaining)
