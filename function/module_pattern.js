/*
즉시 실행 함수를 이용하여 모듈화 하는 방법
JS는 언어 레벨에서 캡슐화를 위한 접근제어자, package가
명시적으로 제공되지 않는다.
하지만 즉시 실행 함수를 이용하여 유사하게 구현할 수 있다.
*/

var clerk = (function() {
    var name = 'Teo';
    var sex = "Man";
    var position = "HEAD";

    // 타 언어의 private처럼
    var salary = 2000;
    var taxSalary = 200;
    var totalBonus = 100;
    var taxBonus = 10;

    var payBonus = function() {
        totalBonus = totalBonus - taxBonus;
        return totalBonus;
    };
    var paySalary = function() {
        return salary - taxSalary;
    };

    // public 변수, 메소드
    return {
        name: name,
        sex: sex,
        position: position,
        paySalary: paySalary,
        payBonus: payBonus,
    };
}());

console.log(clerk.name);
console.log(clerk.salary);  // undefined

console.log(clerk.paySalary());

console.log(clerk.payBonus());
console.log(clerk.payBonus());