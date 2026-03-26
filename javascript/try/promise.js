myPromise
.then(result =>{
    console.log(result);
})
.catch(error =>{
    console.error(error);
})
.finally(() =>{
    console.log('promise has been settled..');
})
