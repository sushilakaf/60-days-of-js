// const unsortedArray = [5,2,4,3,1];
// let firstname = unsortedArray.pop();
// let lastname = unsortedArray.shift();
// unsortedArray.unshift(firstname);
// unsortedArray.push(lastname);
//   unsortedArray.indexOf(3);
//  const b = unsortedArray.indexOf(3);
//  unsortedArray[2]= s;
//  unsortedArray[3]=b;
// console.log(unsortedArray);
var hello = [1,2,3];
var temp = hello[0];
hello[0]= hello[2];
hello[2]= hello[0];
console.log(hello);
