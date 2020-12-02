'use strict';



// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.

Замыкание можно использовать вместо глобальной переменной, например для вычисления текущего счёта.

function currentScore(){
    var currScore = 0;
    return function(){
        return ++currScore;
    }
}

// 2. Не выполняя кода, ответить, что выведет браузер и почему:

if(!("a" in window)) {
    var a = 1;
}
alert(a);                // undefined - поскольку присвоение и возвращение значения объявленной переменной 'a' истинно для (не in window)

var b = function a(x) {
    x && a(--x);
};
alert(a);                // undefined - функция не передаёт никакое значение.

function a(x) {
    return x * 2;
}
var a;
alert(a);                // function a(x) {
                         //     return x * 2;
                         // } - переменная 'a' не инициализированна, выводится код функции.
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);              // 10 - так как arguments[2] присвоено значение 10.

function a() {
    alert(this);
}
a.call(null);             // [object Window] - так как значение this равно null.

*/