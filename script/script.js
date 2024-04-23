// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let index = 0; index < nums.length; index++){ 
//     if(nums[index]%2 === 0){
//         console.log(nums[index])}}



// for(let index = 55; index >= 20; index--){
//     console.log(index) 
// }





const numbers = [3, 5, 11, 2, 8, 1, 6];
for(let index = 0; index < numbers.length; index++){ 
    console.log(`${numbers[index]}`)}
 

let numbers_squared = []
for(let index = 0; index < numbers.length; index++){
   numbers_squared[index] = numbers[index]**2 
 }
 console.log(numbers_squared)


let last_elem = numbers_squared[numbers_squared.length-1]
console.log(last_elem)





const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
    console.log(`Users name is: ${user.first_name} ${user.last_name}. He is ${user.age} years old.`)