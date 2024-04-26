console.log("Task1")
for (let i = 0;i<=10;i++){
    console.log(i*i);
}
console.log("Task2")
for(let i=5;i>0;i--){
    console.log(i);
}

console.log("Blastoff!")
console.log("Task3")
for (let i=0;i<=25;i++){
    console.log(i*2);
}

console.log("Task4")
let sum=0
for(let i=0;i<=100;i++){
    sum+= i
}
console.log(sum)

console.log("Task5")
let answer=1
for(let i=1; i<=10;i++){
    answer*= i
    console.log(answer)
}

let arr=[3,1,4,1,5];
console.log("Task6")

for (let i=0;i<arr.length;i++){
    console.log(arr[i])
}

    console.log("Task7")

 for (let i=-1;i>=-(arr.length);i--){
    console.log(arr.at(i))
} 

    console.log("Task8")
let empty=[]
for (let i=0;i<=10;i++){
    empty.push(i*i*i);
}
console.log(empty)

console.log("Task9")
let fbnc=[]
for(let i=0;i<=10;i++){
    let num=((Math.pow(1.618034, i)-Math.pow(0.618034, i))/Math.sqrt(5));
    fbnc.push(Math.round(num))

}
//https://www.cuemath.com/numbers/fibonacci-sequence/ reference
console.log(fbnc)
console.log("Task10")
let mt = [];
for (let i = arr.length-1;i >= 0;i--) {
    mt.push(arr[i]);
}
console.log(mt);

