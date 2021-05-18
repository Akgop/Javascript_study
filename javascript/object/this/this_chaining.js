let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;    //
    },
    down() {
        this.step--;
        return this;    //
    },
    showStep: function() {
        console.log(this.step);
        return this;    //
    }
}

ladder.up().up().down().showStep();
// up() 메서드에서 return this를 하여 객체 자체를 반환한다면
// ladder.up() 자체가 객체가 되어
// 다시 . 연산자로 메서드를 호출할 수 있게 된다.