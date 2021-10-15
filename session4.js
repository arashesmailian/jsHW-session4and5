////////// spread operator arrays /////////////
const arr0 = [0,1,2]
const arr1 = [3,4,5]
const arr2 = [...arr1,'a','b',...arr0]
const arr3 = [...arr2]
const joinedResult = arr3.join(' - ')
const joinResult = joinedResult.split(' ')


const students = [
    {name: 'ali', average:16.7},
    {name: 'mohammad', average:13.9},
    {name: 'reza', average:18.7},
    {name: 'shahin', average:15.2},
]
students.sort((a,b) => a.average - b.average)
// console.log(students)

const arr = [-5,3,-2,-1]
// const allPositive = arr.every(item => {
//     console.log(item)
//     return item > 0
// })
// const somePositive = arr.some(item => {
//     console.log(item)
//     return item > 0
// })
// // console.log(allPositive)
// console.log(somePositive)

// const items = arr.map(item => {
//     let obj = { key: item}
//     return obj
// })
//
// console.log(items)

// function  calc(preVal, currentVal){
//     console.log(preVal, currentVal)
//     return preVal+currentVal
// }
//
// const arr9 = [5,7,3,9];
// const reduceResult = arr9.reduce(calc)
// console.log(reduceResult)
//

///////////////////ercise///////////////////

////Q1/////////
// function arrayMin(arr) {
//     return arr.reduce(function (p, v) {
//         return ( p < v ? p : v );
//     });
// }
//
// function arrayMax(arr) {
//     return arr.reduce(function (p, v) {
//         return ( p > v ? p : v );
//     });
// }
// let minmax = [-7,-8,-5,0,6,1,5,4]
// function minMax(arr){
//     let max = 0
//     let min = 0
//     for(let item = 0; item < arr.length; item++){
//         if(arr[item] >= max) max = arr[item]
//         if(arr[item] <= min) min = arr[item]
//     }
//     return {min , max}
// }
// console.log(minMax(minmax))
/////////////////////////

let numArr = [1,2,3,4,1,2,3,4,1,2,3,4,5,6,3,3,3,3]
// let map = numArr.reduce(function(previous, current) {
//     previous[current] = (previous[current] || 0) + 1;
//     return previous;
// }, {});

const getOccurrences = (arr) => {
    return arr.reduce((prev, current) =>{
        prev[current] = prev[current] ? prev[current] + 1 : 1
        return prev
    }, {})
}

console.log(getOccurrences(numArr));
// prints {"a": 3, "b": 2, "c": 2, "d": 2, "e": 2, "f": 1, "g": 1, "h": 3}


//
// function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
//
//     array_elements.sort();
//
//     let current = null;
//     let cnt = 0;
//     for (let i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] !== current) {
//             if (cnt > 0) {
//                 document.write(current + ' comes --> ' + cnt + ' times<br>');
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         document.write(current + ' comes --> ' + cnt + ' times');
//     }
//
// }
//
// count();