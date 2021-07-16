// BDD 란 Behavior Driven Development 의 줄임말로 개발 방법론 중 하나이다.
// BDD는 스펙을 먼저 작성하고 개발을 시작한다.
// 스펙의 용도는 3가지이다. - 테스트, 문서, 예시
// 이렇게 하는 이유: 대규모 시스템에서 코드가 바뀌어도 기존 코드가 여전히 잘 돌아가는지 확인하기 위해.
// 

describe("pow", function () {

    function makeTest(x) {
        let expected = x * x * x;
        it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

    it("n이 음수일 때 결과는 NaN입니다.", function () {
        assert.isNaN(pow(2, -1));
    });

    it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
        assert.isNaN(pow(2, 1.5));
    });

});

function pow(x, n) {
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;
  
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }