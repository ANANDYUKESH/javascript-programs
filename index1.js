//1.Array creation and initialization

let arr = [66,76,86,100];

console.log(arr);

//2.array manipulation

let array =[10,20,30,40]
array.push(110);//add value at last
console.log(array);
array.pop();//from last array index value delete
console.log(array);
array.unshift(86);//add value from first
console.log(array);
array.shift();//from firsr array index value delete
console.log(array);

//3.array searching
let arrayval =[100,20,300,20,400];
console.log(arrayval);
console.log(arrayval.indexOf(20)+" - indexofvalue");//return index of first occurrence
console.log(arrayval.lastIndexOf(20)+" -lastindexofvalue");//return index of last occurrence
console.log(arrayval.includes(300,2));//includes method
let found=arrayval.find((element) => element > 100);//find element
console.log(found+" is greater than 100 ");

//4.Array filtering

let arrayfilter =[100,20,300,20,400];
console.log(arrayfilter);
let filteredArray = arrayfilter.filter((element) => element > 100);
console.log(filteredArray);

//5.sorting
let arraysort =[20,10,20,300,20]
console.log(arraysort);
console.log(arraysort.sort());
console.log(arraysort.reverse());

