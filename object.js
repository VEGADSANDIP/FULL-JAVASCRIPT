let person = {
    FirstName:"sandip",
    LastName:"vegad"
};
console.log(person.FirstName);
console.log(person['LastName']);
console.log(person);
console.log(person.age);

person.age = 25;
console.log(person);

delete person.LastName;
console.log(person);

console.log('LastName' in person);

for(let news in person){
    // console.log(news);
    // console.log(news+"::"+person.news);
    console.log(news+"::"+person[news]);
}