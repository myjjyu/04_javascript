const myArr = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']; 
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (let i = 0; i < myArr.length; i++) {
    result[myArr [i]]++;
}
console.log(result);



