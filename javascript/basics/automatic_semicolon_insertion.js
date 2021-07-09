// ASI = Automatic Semicolon Insertion
// 세미콜론이 누락된 곳을 엔진이 자동으로 삽입하는 것
console.log("Hello")
console.log("World")        // 에러를 발생시키지 않는다.

// JS엔진에서 파싱을 할 때 세미콜론이 누락된 것을 보고 채워준다. 즉 추정을 하는 것이다.
// 하지만 정말 세미콜론이 필요한데 엔진이 놓칠 경우도 있다.
console.log(1);         // 이 위치에는 세미 콜론이 없다면 에러가 발생한다.
[2, 3].forEach(element => console.log(element)) // parser가 대괄호 앞은 세미콜론이 없을 것으로 추정하기 때문.
