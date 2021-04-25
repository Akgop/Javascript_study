function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) == 'number'){
            obj[key] *= 2;
        } 
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
console.log(menu);

multiplyNumeric(menu);

// call by sharing에 의해 menu의 값이 변경되어 출력된다.
console.log(menu);
