let can_change = 1;
const cannot_change = 2;

can_change = 2;        // let은 변경이 가능한 변수이다.
// cannot_change = 1;  // const는 변경이 불가능한 상수이다.
console.log(can_change, cannot_change);

// 그래서 대부분 변경할 필요가 없는 값(color, timeout 등)들을 const로 지정해서 많이 사용한다.
// const를 사용할 경우 변수명을 대문자로 지정하는 경우가 있다.
// 코드의 컴파일 과정에서 값이 정해지는 경우에는 대문자로 지정한다.
// 반면 코드의 값이 런타임에 결정되는 경우, 대문자로 쓰는건 적합하지 않다.
const NAME = "akgop";
const first_letter = NAME[0];
console.log(first_letter);

// 연습 1
let _admin, _name;
_name = "John";
_admin = _name;
console.log(_admin, _name);

// 연습 2
let ourPlanetName = "Earth";
let currentUserName = "John";

