const num=5
var count=0
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++
    }

}
if(count>2){
    console.log("Not Prime Num")
}
else{
    console.log("Prime Num")
}