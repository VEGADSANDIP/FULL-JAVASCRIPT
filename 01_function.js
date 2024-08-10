function mul(num){
    for(i = 0;i<=10;i++){
    console.log( num+"x "+i +"="+num*i);
    document.write("<br>")
    }
}
mul(3);

document.write("<br>")


function sum(num1,num2){
    console.log(" of the =="+ (num1+num2));
}
sum(10,45);

function add(){
    if(arguments.length==0){
        console.log("nothing");
    }
    else{
        sum = 0;
        for(i = 0;i < arguments.length;i++){
            sum =sum +arguments[i]
            console.log(sum);
        }   
    }
}
add(12,45,78)