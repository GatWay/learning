let accept = confirm("Включить калькулятор?");

if (accept) {
    Calc();
} else {
    alert('Отменено :(')
}


function Calc(id, a, b) {

    id = prompt('Введите знак операции: +, -, *, /, ** ');
    a = +prompt('Введите первое число');
    b = +prompt('Введите второе число');
    
    let unknownID = (id != '+') && (id != '-') && (id != '*') && (id != '/') && (id != '**');


    if (unknownID) {
        alert('unknownID');
    } else if (id == "+") {
        return alert(a+b);
    } else if (id == "-") {
        return alert(a-b);
    } else if (id == "*") {
        return alert(a*b);
    } else if (id == "/") {
        return alert(a/b);
    } else if (id == "**") {
        return alert(a**b);
    } else {
        alert('error');
    }
}

