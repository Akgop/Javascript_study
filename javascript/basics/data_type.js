// Infinity
// C, C++ 과 달리 Javascript에는 0으로 나눈다고 해서 에러가 발생하지 않는다
console.log(1 / 0);     // Infinity 라는 무한대를 의미하는 값을 반환한다.
console.log(Infinity);  // 바로 선언할 수도 있다.
console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);    // 전역 객체의 속성으로, Number에 포함되어있다.
console.log(isFinite(Infinity));    // 유한한 수인지 판별하기 위한 isfinity가 존재한다.

// BigInt
// JS에서는 2^53 - 1 보다 크거나 반대로 음수로 저 크기보다 작은 수는 수로 표현할 수 없다.
const bigInt = 1234567890123456789012345678901234567890n;   // 끝에 n 이 붙으면 bigInt 자료형이다.
console.log(typeof(bigInt), bigInt);

// string - C, C++ 과 달리 char 형을 지원하지 않는다.
// JS에서는 "" 와 '' 에 차이를 두지 않는다
// `` 이건 backtick이라고 부르며, 둘 사이에 변수를 대입하여 문자열을 만들 수 있다.
let user = "Akgop";
console.log(`User ID is ${user}`);  // backtick을 이와 같이 활용할 수 있다.

// null
// null 은 오로지 null 값만 포함하는 별도의 자료형을 만든다.
// 다른 언어에서의 null 은 존재하지 않는 객체의 참조, 널 포인터 등으로 사용되나
// JS에서는 존재하지 않는(nothing), 비어있는(empty), 알 수 없는(unknown)등으로 사용된다.
let age = null;
console.log(age, typeof(age));  // null 은 자료형이지만 object라고 표기된다. 하위 호환성을 위해 오류를 수정하지 않았기 때문. null은 객체가 아니다.
console.log(Number(age));       // null 을 수 자료형으로 변환하면 0 이 된다.

// undefined
// undefined도 null과 마찬가지로 자신만의 자료형을 만든다.
// 값이 할당되지 않은 상태 를 의미한다.
// 주로 비동기 콜백에서의 시점 오류로 많이 보게 되는 자료형이다.
let undefined_age;
console.log(undefined_age);
// 이와 같이 직접 할당할 수도 있지만, 주로 비어있음을 나타내고 싶을 때 사용하므로 이럴 경우 차라리 null을 사용하자
undefined_age = undefined;

// 객체 object - 다른 장에서 자세히 다루겠음.
// 객체를 제외한 나머지는 한 가지의 자료형만 표현하기 때문에 primitive 라고 부른다.
// 반면 객체는 데이터 컬렉션이나 개체(entity)를 표현할 수 있다.

// 심볼 symbol - 다른 장에서 자세히 다루겠음.
// 심볼은 객체의 고유한 식별자(unique identifier)를 만들때 사용된다.
