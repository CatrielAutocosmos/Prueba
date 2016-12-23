function greeter(person) {
    return "Hello, " + person.name;
}
function age(person){
    return ". You are so old, " + person.age;
}
var user =  {name : "World", age:5, apocaliptico: false};

document.body.innerHTML = greeter(user); 