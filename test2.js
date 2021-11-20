// object literal 
let dog={
    name:"Macchiato",
    age:1,
    color:"brown",
}

let cat ={
    name:"Garfeild",
    age:40,
    color:"Orange",
}

//object constructor
function Animal(n,a,c){
    this.name=n;
    this.age=a;
    this.color=c;

}

let simba= new Animal("Simba,3,Yellow");
let bird = new Animal ("Tweety Bird",50,"Yellow");
console.log(simba);
console.log(bird);

// get the information from the html
