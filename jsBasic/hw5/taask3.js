let int = 5;


console.log ("VAR with for each");

let data = [0, 1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];
data.forEach(value => {
    let result = int * value;
    console.log(`${int} x ${value} = ${result}`);
});

console.log ("VAR with for");
for (let i = 0; i<=10; i++){
    let result = int * i;
    console.log(`${int} x ${i} = ${result}`);
}

console.log ("VAR with while");
let i=0;
while (i<=10){
    let result = int * i;
    console.log(`${int} x ${i} = ${result}`);
    i++;
}




