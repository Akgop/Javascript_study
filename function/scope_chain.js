// 자바스크립트의 스코프는 ECMAScript 언어 명세에서 
// 렉시컬 환경과 환경 레코드 라는 개념으로 되어있다.
// 환경 레코드 -> 이름:값 의 대응표
// 렉시컬 환경은 환경레코드와 상위 렉시컬 환경에 대한 참조로 이루어져있음

// 그래서 현재 렉시컬 환경의 환경레코드에서 변수를 찾아보고,
// 없으면 상위 렉시컬 환경을 참조하여 찾아보는 방식으로 중첩 스코프가 동작한다.
// ex): func2 에서 globalText 가 없으니 func1 로 이동
//      func1 에도 없으니 상위 렉시컬 환경인 global 로 이동
//      global 에 globalText 가 있으니 'global' 출력

var gloabalText = 'global';

function func1() {
    var func1Text = 'func1';
    function func2() {
        var func2Text = 'func2';
        console.log(gloabalText);
        console.log(func1Text);
        console.log(func2Text);
    }
    func2();
}
func1();  // -> func1 실행