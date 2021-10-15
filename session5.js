///////////////functions //////////////////
// function writeMessage0(message){
//     console.log('logging the massage bt function declaration...')
//     console.log('message : %s',message)
// }
// const writeMessage1 = function (message){
//     console.log('logging the massage bt function expression...')
//     console.log('message : %s',message)
// }
// function log(message){
//     console.log('logging the massage bt function espression by named function...')
//     console.log('message : %s',message)
// }
//
// const writeMessage2 = log
//
// writeMessage0('hello')
// writeMessage1('hello')
// writeMessage2('hello')
// console.log('hello')

/////////////////////////function with undefined arguments declaration///////////////

// function longestString(){
//     let longest = '';
//     for(let i = 0; i < arguments.length; i++){
//         if(arguments[i].length > longest.length){
//             longest = arguments[i];
//         }
//     }
//     return longest;
// }
//
// function logFun(a, b, ...args){
//     console.log("a", a)
//     console.log("b", b)
//     console.log(typeof args)
//     console.log("more args", args)
// }
// logFun("one", "two", "three", "four", "five")
//
//
// /////////// default function variable////////////////
//
// function multiply(a, b =1){
//     //or b= b || 1
//     return a*b;
// }

/////////////////////////////////exercise/////////////////////////////////


//Q1
// let num = 50672
// let arr = [];
// const printNum = (input) =>{
//     if(!input && input !== 0){
//         return ''
//     }
//     input = input.toString()
//     let arrInput = input.split('');
//     arrInput.map(num =>{
//         let result = num + ': '
//         for(let i = 0; i < num; i++){
//             result += num
//         }
//     })
//     return result;
// }
//
// printNum(50672)

////////////////
//Q2
// function subSearch(longStr,shortStr) {
//     let count = 0
//     let index = 0
//     for (let i = 0; i < longStr.length; i++) {
//         for (let j = 0; j < shortStr.length; j++) {
//             if (shortStr[j] !== longStr[i + j]) {
//                 break;
//             }
//             if (j === shortStr.length - 1) {
//                 count++;
//                 index = i;
//             }
//         }
//     }
//     return index
// }
//
// arr1 = "slambehame ata"
// arr2 = "be"
// x = subSearch(arr1, arr2)
// console.log(x)
///////////////////////////////////////////////////////////
/////////////Q3

// function squarePrint(input){
//     for(let i = 0; i < input; i++)
//         for(let k = 0; k < input; k++) {
//             console.log("* ");
//         }
//     console.log("\n")
// }
//
// squarePrint(4)


// function square(num){
//     for(let i = 0; i < num; i++){
//         if(i === 0 || i ===num - 1) console.log('#  '.repeat(num))
//         else console.log('#' + '    '.repeat(num-2) + '#')
//     }
// }
//
// console.log(square(4))
///////////////////////////////

////Q4

// function q4(arr1, arr2){
//     let result = []
//     let index = 0
//     for(let i = 0; i < arr1.length; i++){
//         for(let k = 0; k < arr2.length; k++){
//             if(arr2[k] !== arr1[k + i]) break
//             if( k = arr2.length - 1) index = i
//         }
//     }
//     for (let j = 0; j < index; j++){
//         result.push(arr1[j])
//     }
//
//     for(let m = index + arr2.length; m < arr1.length; m++)
//         result.push(arr1[m])
//     console.log(result)
// }
//
q4([1,2,3,-1,-5,5,6,5],[-1,-5])

function  q4(arr1 , arr2){
    return arr1.filter(item => !arr2.includes(item))
}
console.log(q4([1,2,3,-1,-5,5,6,5],[-1,-5]))

const q4 = (arr, exclude) => {
    return arr.filter((item => exclude.every(item2 => item2 !== item)))
}
console.log(q4([1,2,3,-1,-5,5,6,5],[-1,-5]))

//////////////////////////
////////////////Q5

function moveElement(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element)
    return output;
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(moveElement(arr,3,-2))
//////////////////////////////////

////////////////////Q6

const reverseString = (str) => {
    if(!str){
        return str
    }
    else
        return reverseString(str.substr(1)) + str[0]
}
yoyo = "salam"
console.log(reverseString(yoyo))

/////////////////////////////////////////
////////////////////Q7
function rmvDupplicats(input) {
    let size = input.length;
    input = input.split('');
    for (let i = size - 1; i >= 1; i--) {
        if (input[i] === input[i - 1]) {
            input.splice(i,1);
        }
    }
    // input = input.toString();
    return input.toString()
}
2
console.log(rmvDupplicats("ssaallaamm"))
