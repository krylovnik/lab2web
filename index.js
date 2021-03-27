let a = 10, b = 2;
console.log(`Сумма: ${a+b} Разность: ${a-b} Произведение: ${a*b} Частное:${a/b}`);
a = 17;
b = 10;
let c = a - b , d = 7;
console.log(result = c + d);

let text1 = 'Привет' ,text2 = 'Мир!';
console.log(`${text1} , ${text2}`);

console.log(`Ваше имя ${prompt('Введите ваше имя')}`);
let text =  'abcde';
console.log(`${text[0]} ,  ${text[2]} ,  ${text[4]}`)
let num = '12345';
function a1()  {
    let result = 1;
    for (let i = 0; i < 5; i++) {
        result *= num[i]; 
        }
    return result;
}
console.log(a1())

let arr = [2,5,3,9];
result = arr[0]*arr[1]+ arr[2]*arr[3]
console.log(result)

let obj = {
    1 : 'monday',
    2 : 'tuesday',
    3 : 'wednesday',
    4 : 'thursday',
    5 : 'friday',
    6 : 'saturday',
    7 : 'sunday'
}
console.log(`Today is ${obj[3]}`)
let day = 4;
console.log(`Today is ${obj[day]}`)
let obj1 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
console.log(obj1.js[0])

let str = '12345';
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
    console.log('Да')
    }
else {
    console.log('Нет')
}
let month = 4;
switch(month) {
    case 1:
    case 2:
    case 3: console.log('зима');
    break;
    case 4:
    case 5:
    case 6: console.log('весна');
    break;
    case 7:
    case 8:
    case 9: console.log('лето');
    break;
    case 10: 
    case 11:
    case 12: console.log('осень');
    break;
    default : 'Введено неверное число';
}


let a123 = () => {
    let result = 0;
    let arr1 = [1,2,3,4,5];
    for (i=0;i<arr1.length;i++){
        result += arr1[i];
    }
    return result;
}
console.log(a123());

function abc() {
    let n1 = 1000;
    let num1 = 0;
    while (n1 > 50) {
        n1 = n1/2;
        num1++;
    }
    console.log(num1, n1)
}
abc();

let obj123 = {
    green : 'зеленый',
    red: 'красный',
    blue: 'голубой'
}
for(let key in obj123) {
    console.log(key + ' : ' + obj123[key])
}

let k = 379;
let k1 = Math.sqrt(k);
console.log(Math.round(k1) + ' , ' + k1.toFixed(1)  + ' , ' + k1.toFixed(2))

let checkForSimple = () => {
    let n = Number(prompt("Введите целое положительное число"));
    if (Number.isInteger(n) && n > 0) {
        let flag = true;
        for (let j = 2; j < n; j++) {
            if( n % j == 0) {
                alert('Число не является простым')
                flag = false;
                break;
            }
        }
        if(flag) {
            alert('Число - простое')
        }
    }
    else {
        alert("Введено неверное число");
    }
}
checkForSimple();