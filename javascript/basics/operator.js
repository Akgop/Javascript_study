// 연산자에는 단항, 이항, 피연산자 라는 키워드가 존재한다.
// 피연산자(operand)
// 피연산자는 연산자가 연산을 수행하는 대상, 이항은 +, -, **, % 등 여러 연산들.

// 단항(unary): +, -
// 단한 연산자는 부호의 변경 이외에도, 형변환 역할을 한다.
let price = "10000";
console.log(price, typeof(price));
console.log(+price, typeof(+price));    // +price Number(price) 와 동일한 결과를 갖는다.
let price1 = "1000";
let price2 = "2000";
console.log(price1 + price2);
console.log(+price1 + +price2);     // console.log(Number(price1) + Number(price2)) 와 동일

// 연산자 우선순위(precedence)
// 앞서 본 (+price1 + +price2) 가 가능한 이유를 알아보자.
// JS에서는 단항연산자의 우선순위가 이항연산자보다 높다. 따라서 위와 같은 연산이 가능해진다.

// 할당 연산자(assignment): =
// JS에서 연산자들은 값을 반환한다. = 또한 마찬가지다.
let a = 1;
let b = 2;
// = 또한 값을 반환하기 때문에 아래와 같은 식이 가능하다.
let c = 3 - (a = b + 1);    
// 1. b + 1
// 2. 괄호에 의해 a = (b + 1)
// 3. 3 - 앞선 결과(3)
console.log(c);  // 0이 최종적으로 연산되어 나옴.
let d = c = b = a;  // 할당 연산자 체이닝도 가능하다. 앞서 a = b + 1 에 의해 3이 되버린 a가 d에 할당된다.
console.log(d);     // 3
let e = 5;
console.log(e += e);    // += 와 같은 것을 복합 할당 연산자 라고 한다.

// 증가 감소 연산자
let cost = 10;
console.log(++cost);    // prefix: 증가 후 할당. -> 11
cost = 10;
console.log(cost++);    // postfix: 할당 후 증가. -> 10

// 비교 연산자
// >, >=, <, <=, ==, ===, !=, !==
// 여기서 문자열을 비교할 때는 그냥 O(n)으로 앞에서부터 차례대로 비교한다.(유니코드 순으로)(사전순으로)
// == (equality operator), === (strict equality operator)
console.log(0 == '0', 0 === '0');       // true, false
// == 은 형변환을 해서 값이 같음을 본다. === 는 자료형이 다르다면 아예 다른 것으로 간주한다.
// undefined 와 null 을 strict 한 비교연산자가 아닌 것으로 비교하다보면 같다 에서 true를 반환하기 때문에 주의해야 한다.

// 조건부 연산자 - ?
// 다른 언어에서 삼항연산자로 불리는 그것이다. condition ? 참일때 반환값 : 거짓일때 반환값
let value1 = 10;
let value2 = 20;
let result = value1 > value2 ? true : false;
console.log(result);   // false

// 논리 연산자 - ||, &&, !
// JS에서만 특별하게 사용되는 논리 연산자
let firstName = "";
let lastName = "";
let nickName = "Akgop";
// OR 연산은 왼쪽부터 오른쪽으로 움직이며 형변환을 하여 평가하고, 첫 번째 truthy값을 형 변환하기 이전 값으로 반환한다.
// 이렇게 되어 있을 경우, 첫 번째 truthy인 nickName에 해당하는 값을 반환한다.
console.log(firstName || lastName || nickName || "익명");   // Akgop, 만약 nickName도 falsy였다면 익명이 출력된다.
console.log( console.log(1) || 2);  // console.log() 의 반환값은 undefined이기 때문에 1, 2 가 차례대로 출력된다.
// 이 성질을 이용해서 단락 평가(short circuit evaluation) 을 할 수 있다.
console.log(true || "true가 출력되고, 이 문장은 출력되지 않는다");
console.log(false || "false가 truthy하지 않으므로 이 문장은 출력된다.");
// &&는 반대로 falsy를 찾는데 활용할 수 있다.
console.log(true && "이 문장은 출력되나? NO" && false);
console.log(true && "이 문장은 출력되나? NO" && undefined);

// !은 연산 프로세스가 우선 boolean으로 형변환을 하고 역을 수행한다.
// 이 성질을 이용해서 !!을 사용하면 boolean이 아닌 자료형을 boolean으로 변환할 수 있다.
console.log(!!"불린으로 변환되서 true 출력됨.");

// 널 병합 연산자 (nullish coalescing operator)
// a ?? b -> a가 null도 아니고 undefined도 아니면 a, 그 외의 경우는 b
let nco;
nco = nco ?? 100;
console.log(nco);   // 100
// || 와 ?? 를 주의하자. 둘의 목적은 다르다.
let height = 0;
console.log(height || 100);     //100   || 입장에서 height는 0이므로 falsy한 값이므로 패스하게 되고 100을 반환.
console.log(height ?? 100);     //0     height는 0으로 "할당" 되었기 때문에 0을 반환
// 이처럼 값으로 0 이 할당될 수 있는 경우에 || 의 사용을 조심하고 ?? 을 사용하자.
// ?? 의 우선순위는 매우 낮으니 사용시 괄호를 추가하여 사용하자.
