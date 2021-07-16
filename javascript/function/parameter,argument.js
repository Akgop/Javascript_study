// default function parameter
function parameter(user, text = "기본 문자열") {
    console.log(`${user}: ${text}`);
}
parameter("Akgop", "의 블로그");
parameter("???");

// default value 는 "호출 시"에 평가된다. 즉, 함수가 호출될 때마다 새로운 객체가 생성된다.
function append(value, array = []) {
    array.push(value);
    return array;
}
console.log(append(1));     // [1]
console.log(append(2));     // [1, 2] 가 아니라 [2]

// ?? || 사용해서 default 값 넣어보기
function checkAge(age) {
    return age > 18 ? true : confirm("동의?");  // confirm은 node 에서 수행되지 않음
}
checkAge();