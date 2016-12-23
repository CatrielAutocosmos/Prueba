function greeter(person) {
    return "Hello, " + person.name;
}
function impersonate(person){
    return person.name;
}
var user =  {name : "Tu"};

document.body.innerHTML = greeter(user); 