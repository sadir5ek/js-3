// const adam = parseInt(prompt("жашынды жаз"))

// if (adam >= 13 && adam <= 19 ) {
//     console.log("ты подросток");
// } else if(adam >= 20 && adam <= 65) {
//     console.log("ты вызрослый")
// } else{
//     console.log("ты пенсионер");
// }

// const persen = parseInt(prompt("сифра жаз"))

// if (persen >= 100 && persen <= 120) {
//     console.log("стипендия аласын");
// } else if (persen >= 80 && persen <= 100){
//     console.log("дагы окуу");
    
// } else{
//     console.log("ото начар");
    
// }

// const sun = parseInt(prompt("can jaz"))
// if (sun % 2 === 0) {
//     console.log("jup sun");
// } else  {
//     console.log("tak can");
// }

// const tys =prompt("тус айт")
// switch (tys ){
//     case "кызыл":
//     console.log("alma");
//     break;

// case 'сары':
//     console.log("коон");
//     break;
//     case 'жашыл':
//         console.log("дарбыз");
//         break;
//         default:
//             console.log("мындай тус жок");
// }




//HOMEWORK 1 

// const month = parseInt(prompt("1,12 сан жаз "))
//  if (month >=1 && month <=2) {
//      alert("КЫШ МЕЗГИЛИ ")
//  }else if (month >=12) {
//      alert("КЫШ МЕЗГИЛИ")
//  }
//  else if (month >=3 && month <=5) {
//      alert("ЖАЗ МЕЗГИЛИ")
//  } else if (month >=6 && month <=8) {
//      alert("ЖАЙ МЕЗГИЛИ")
//  }  else if (month >= 9 && month <=11) {
//     alert("КУЗ МЕЗГИЛИ")
//  } else {
//      alert("КЕЧИРЕСИЗ МЫНДАЙ МЕЗГИЛ ЖОК.")
//  }


//             //HOMEWORK 2

// const month =parseInt(prompt("1-12ге чейин сан жаз"))
// switch (month) {
//     case 1:
//         alert("январь");
//         break;
//     case 2:
//         alert("февраль");
//         break;
//     case 3:
//          alert("март");
//          break;
//      case 4:
//          alert("апрель");
//          break;
//     case 5:
//          alert("май");
//           break; 
//     case 6:
//          alert("июнь");
//         break; 
//     case 7:
//          alert("июль");
//         break;
//     case 8:
//          alert("август");
//          break;
//      case 9:
//          alert("сентябрь");
//         break;
//     case 10:
//          alert("октябырь");
//         break;
//     case 11:
//         alert("ноябрь");
//          break;
//     case 12:
//         alert("декабрь");
//         break;
//     default:
//         alert("мындай ай жок")
//         break;
// }


    //HOMEWORK 3

let num = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
let operator = prompt("Введите оператор ( +, -, *, / ):");

switch (operator) {
    case '+':
        alert(num +num2);
        break;
    case '-':
        alert(num - num2);
        break;
    case '*':
        alert(num * num2);
        break;
    case '/':
        alert(num / num2);
        break;
    default:
        alert("Такого оператора не существуете");
        break;
}