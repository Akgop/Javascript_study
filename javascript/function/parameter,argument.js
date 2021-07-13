// default function parameter
function parameter(user, text = "기본 문자열") {
    console.log(`${user}: ${text}`);
}
parameter("Akgop", "의 블로그");
parameter("???");

function append(value, array = []) {
    array.push(value);
    return array;
}
console.log(append(1));
console.log(append(2));