
interface User{
    name:string;
    age:number;
    esjebus:boolean;
    apocaliptico:boolean;
}
function greeter(person: User) {
    return "Hello, " + person.name + age(person) + esapocaliptico(person) + esjebus(person);
}
function age(person: User){
    return ". You are so old, " + person.age;
}
function esapocaliptico(person: User){
    return ". You are apocaliptic, " + person.apocaliptico 
}
function esjebus(person: User){
    return ". You are jebus????, " + person.esjebus 
}

var userWorld =  {name : "World", age:50000000, esjebus: true, apocaliptico: false};
var userJesus =  {name : "Jesus", age:2049, esjebus: true, apocaliptico: true};
var userDiablo =  {name : "Diablo", age:100000000, esjebus: false, apocaliptico: true};

document.body.innerHTML = greeter(userWorld); 
document.body.innerHTML = greeter(userJesus); 
document.body.innerHTML = greeter(userDiablo);