function calculatorMath(calculation) {
    for (let i = 0; i < calculation.length; i++) {
        if (calculation[i] === "+") {
            //console.log(calculation[i],i);
            const numbers = calculation.split("+")
            const num1 = numbers[0];
            const num2 = numbers[1];
            return parseInt(num1) + parseInt(num2);
            /// how can i look and check if an additional operator has been added tobe calculated example 1+2+3 which has two plus signs 
            // could i look through operator or perform some check then do additional calculation. chained together

        }
        if (calculation[i] === "-") {
            const numbers = calculation.split("-")
            const num1 = numbers[0];
            const num2 = numbers[1];
            return parseInt(num1) - parseInt(num2);

        }
        if (calculation[i] === "*") {
            const numbers = calculation.split("*") 
            const num1 = numbers[0];
            const num2 = numbers[1];
            return parseInt(num1) * parseInt(num2);

        }
        if (calculation[i] === "/") {
            const numbers = calculation.split("/")
            const num1 = numbers[0];
            const num2 = numbers[1];
            return parseInt(num1) / parseInt(num2);
        }
        // how can we push addtional fucntion on calcualtion .push
        // push result to screen

        // console.log(calculation[1])
    }

}
console.log(calculatorMath("1+2"));
console.log(calculatorMath("5000-5"));
console.log(calculatorMath("5*5"));
console.log(calculatorMath("5/5"));