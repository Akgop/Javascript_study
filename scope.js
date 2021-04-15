

// Function Level Scope
function functionLevelScope() {
    if (true) {
        var myScope = "function level scope";
    }
    //var 은 함수레벨 스코프를 갖기에 오류가 발생하지 않는다.
    console.log(myScope);
}

//Block Level Scope
function blockLevelScope() {
    if (true) {
        let myScope = "block level scope";
        console.log(myScope);
    }
    // let, const는 블록레벨 스코프를 갖기에 if문 중괄호를 벗어나면 myScope가 없어진다.
    // 따라서 undefined라고 뜬다. (node에서는 error)
    console.log(myScope); // error!!! (undefined)
}

// Lexical Scope
var x = "global";
global.x = "Global";

function func1() {
    var x = 'local';
    console.log(x)  // local
    // 일반적으로 브라우저(chrome)에서의 최상위 범위는 global scope이다.
    // 하지만 Node.js에서의 최상위 범위는 전역 범위가 아니다.
    // 따라서 global.x = "Global" 선언문이 없다면
    // global 객체에 x라는 프로퍼티가 없어서 undefined가 반환된다.
    console.log(global.x);  // Global
    // f
    func2();
}

function func2() {
    // func1로인해 호출되서 x를 출력하지만
    // x는 func2 내부에 없기 때문에 상위 스코프에서 찾아본다.
    // var x 가 상위 스코프가 되고 따라서 "global"이 출력된다.
    console.log(x); //global
}


functionLevelScope();
blockLevelScope();

func1();
func2();