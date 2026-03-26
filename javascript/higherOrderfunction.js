function higherOrder(fun){
    return function(x){
        return fun(x)*2;
    }
}
const double=higherOrder(x=>x+1);
console.log(double(5));//12
    