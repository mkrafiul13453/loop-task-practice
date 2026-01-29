for(i=1 ;i<=200; i++ ){
    if (i===100){
        break;
    }
    console.log(i);
}






let sum=0;
for(let i=1 ;i<=200; i++ ){
    if (i===100){
        break;
    }
    sum=sum+i;
}

console.log(sum);





for (let i = 1; i <= 100; i++) {
    if (i === 4 || i === 9 || i === 16 || i === 25) {
        console.log("First square number found:", i);
        break;
    }
}