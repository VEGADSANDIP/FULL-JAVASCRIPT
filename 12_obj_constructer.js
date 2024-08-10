function Student(name,age,car,city){
    this.Name = name;
    this.Age = age;
    this.Car = car;
    this.City = city;
}

var student1 = new Student("sandip",25,"tata","bhavnagar");
console.log(student1);
student1.Country = "india";
console.log(student1);


Student.prototype.nationally = "indian";
console.log(student1);
console.log(student1.nationally);



