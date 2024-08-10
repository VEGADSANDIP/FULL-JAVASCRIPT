let person = {
    FirstName:"sandip",
    LastName:"vegad",
    sayhello:function(){
        console.log("hello 3 "+ car.brend +" car");
    }
};

let car = {
    brend:"tata",
    model:"safari"
}

person.sayhello();

console.log(person);

function sayhello(){
    console.log("hello 1");
}
person.news = sayhello;
person.news();

person.sayhello=function(){
    console.log("Hello 2");
}
person.sayhello();