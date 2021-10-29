var userName="Samantha";
let fName="samantha";
const TAXES=0.16; 

function hello(){
    let age=99;
    console.log(fName);
    console.log(age);
}
let dog={
name:"scooby",
age:60,
owner:"shaggy"

}
console.log(dog)
let cat={
    name:"Garfield",
    age:60,
    owner:"John Arbuckle"
}
console.log(cat);
//object constructor
function Animal(name,age,owner){
    this.name=name;
    this.age=age;
    this.owner=owner; 

}

//create three objects
let dog1= new Animal("Scrabppy", 30,"shaggy")
console.log(dog1);

let bird= new Animal("tweety",50,"Mary")
console.log(bird);

let fish= new Animal("Dory", 15, "Nemo")
console.log(fish);

function User(email,password){
    this.email=email;
    this.password=password;
}
let oscar = new User("oscar@gmail.com","pass123");
console.log(oscar.password);

let products=['product1','product2','product3','product4']

//travel the array with a loop and display the products 

    for(let i=0;i<products.length;i++){
        console.log(products[i]);
        }

        let ages =[12,15,46,89,54]
        //display the sum
        let total=0;
        for(let i=0;i<ages.length;i++){
           
            total=total+ages[i];
            console.log(total);
        }
