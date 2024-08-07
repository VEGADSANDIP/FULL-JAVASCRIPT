function add(){
    
    if(arguments.length ==0){
        console.log("nothing");
    }
    else{
        sum = 0;
        for(i=0;i < arguments.length;i++){
        sum = sum + arguments[i]
        }
        return sum;
    }
}
console.log(add(10,10,10,10));