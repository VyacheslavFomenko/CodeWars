// //Vowel remover
//const shortcut = (s) => s.replace(/[aeiou]/g,'');

// Student's Final Grade
// function finalGrade (exam, projects) {
//     if(exam > 90 || projects > 10){
//         return 100;
//     }else if(exam > 75 && projects >= 5){
//         return 90;
//     }else if(exam > 50 && projects >= 2){
//         return 75;
//     }else{
//         return 0;
//     }
// }

//doubleEveryOther
// let arr = [1,2,3,4]
// function doubleEveryOther(a) {
//     //let b = []
//     for(let i = 0; i < a.length; i++){
//         if(i % 2==0){
//           return console.log(i*2);
//             //return b.push(i * 2)
//         }//else{
//         //     b.push(i);
//         // }
//     }
//     //return b;
// }
// console.log(doubleEveryOther(arr));

//Square(n) Sum
function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i] ** 2;
    }
    return sum;
}