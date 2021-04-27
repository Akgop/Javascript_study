/*
callback: 다른 함수의 인자로 들어가는 함수
callback function이라고도 부름
*/

// 아래 예시에서 yes라고 대답한 경우, showOk가 콜백
// no라고 대답한 경우 showCancel이 콜백이 된다.
function ask(question, yes, no) {
    if (confirm(question)) yes();    // confirm은 브라우저 전용
    else no();
}

function showOk(){
    console.log("동의");
}

function showCancel() {
    console.log("취소");
}

ask("동의?", showOk, showCancel);