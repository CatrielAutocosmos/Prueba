function greeter(person) {
    return "Hello, " + person.name;
}
function age(person) {
    return ". You are so old, " + person.age;
}
var user = { name: "World", age: 50000000 };
document.body.innerHTML = greeter(user);
