
function myFunction(Celsius) {
    var fahRenhei = Celsius * 95 + 32;
    console.log(Celsius + " C " + " = ", fahRenhei + " F");
}
myFunction(6);

function myString(myString1) {
    var myUp = "";
    for (var i = 0; i < 10; i++) {
        myUp += myString1 + "-"
    }
    console.log(myUp.slice(0, length - 1));
}

myString("123")




function myNumber(number1, number2) {
    if (number1 > number2) {
        console.log(number1 + " lớn hơn " + number2);

    }
    if (number2 > number1) {
        console.log(number2 + " lớn hơn " + number1);
    }
}
myNumber(5, 7);







function myFactorial(myFactorial1) {
    let fac;
    if (myFactorial1 >= 0) {

        if (myFactorial1 == 0) {

            console.log(1);
        }
        else {
            for (let i = 1; i <= myFactorial1; i++) {
                fac = myFactorial1 * i;
            }
            console.log(fac);

        }

    } else {
        console.log('Số không hợp lệ');
    }

}
myFactorial(3);

