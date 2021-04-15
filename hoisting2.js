// 함수 호이스팅과 변수 호이스팅의 차이

// 변수 호이스팅. addNum이 상위에 정의되어 있지 않기에 TypeError가 발생한다.
// console.log(addNum(1, 2));

// var addNum = function(a, b) {
//     return a + b;
// };

// 올바른 코드는 다음과 같다.
var addNum = function(a, b) {
    return a + b;
};

console.log(addNum(1, 2));


// 함수 호이스팅 -> 둘 다 정상 작동
console.log(subNum(5, 3));

function subNum(a, b) {
    return a - b;
}

console.log(subNum(1, 2));