// 생성자 함수 new
// 생성자 함수는 대문자로 시작하는게 "국룰" 이다.

// 생성자 함수에서 같은 객체를 반환하게 하려면?
// 생성자 함수는 기본적으로 return문을 작성하지 않는다. 그렇게 되면 내부 객체인 this 를 반환한다.
// 그러나 명시적으로 객체를 반환하면 this 대신 해당 명시된 객체가 반환된다.
// 같은 객체를 반환하게 하려면 객체를 함수 외부에 생성해서 반환하도록 하면 된다.
let obj = {};

function A() { 
    return obj;
}
function B() { 
    return obj;
 }

let a = new A;
let b = new B;

console.log( a == b ); // true


function Calculator(inputA, inputB) {
    this.read = function() {
        this.a = +inputA;
        this.b = +inputB;
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
};

let calculator = new Calculator("10", "20");
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );