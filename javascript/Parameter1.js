function calculate(a,b = (x,y)=>x+y){
    return Operation(a,b);
}
console.log(calculate(5,3));
console.log(calculate(5,3(x,y)));

