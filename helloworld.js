function greeter(person) {
    return "Hello, " + person.name + age(person) + esapocaliptico(person) + esjebus(person);
}
function age(person) {
    return ". You are so old, " + person.age;
}
function esapocaliptico(person) {
    return ". You are apocaliptic, " + person.apocaliptico;
}
function esjebus(person) {
    return ". You are jebus????, " + person.esjebus;
}
var userWorld = { name: "World", age: 50000000, esjebus: true, apocaliptico: false, espibecantina: true };
var userJesus = { name: "Jesus", age: 2049, esjebus: true, apocaliptico: true, espibecantina: true };
var userDiablo = { name: "Diablo", age: 100000000, esjebus: false, apocaliptico: true, espibecantina: true };
document.body.innerHTML = greeter(userWorld);
document.body.innerHTML = greeter(userJesus);
document.body.innerHTML = greeter(userDiablo);
