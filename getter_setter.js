let person = {
    name:"sandip",
    age:"21",
    // getname: function(){
    //     return this.name.toUpperCase();
    // }
    get getname(){
        return this.name.toUpperCase();
    },
    set setname(n){
        this.name = n.toUpperCase();
    }
}
console.log(person);
// console.log(person.getname());
console.log(person.getname);

person.setname="dhaval";
console.log(person);
console.log(person.name);