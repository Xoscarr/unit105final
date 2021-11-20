//create an object literal for the salon

let salon = {
    name:"the Fashion pet",
    address:{
        city:"Tijuana",
        street:"Av. Universidad",
        number:"I404",
        zip:"22111"

    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    phone:"555-555-555",
    pets:[]
}
let counter=0;
class Pet {
    constructor(name, age, gender, breed,size, service, owner, phone,email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.size=size;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.email=email;
        this.id=counter++;
        
        

    }
}



//get values from the form
let petName=document.getElementById("txtName");
let petAge=document.getElementById("txtAge");
let petGender=document.getElementById("txtGender");
let petBreed=document.getElementById("txtBreed");
let petSize=document.getElementById("txtSize");
let petService=document.getElementById("txtService")
let ownerName=document.getElementById("txtOwnerName");
let ownerPhone=document.getElementById("txtOwnerPhone");
let ownerEmail=document.getElementById("txtOwnerEmail");



//and store them in two variables

function register(){
    console.log(petName.value,petAge.value,petGender.value,petBreed.value,petSize.value,petService.value,ownerName.value,ownerPhone.value,ownerEmail.value);
    //create the object
    let thePet= new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petSize.value,petService.value,ownerName.value,ownerPhone.value,ownerEmail.value);

    //push the object into the array
    salon.pets.push(thePet);
    //log the results
    displayCards(thePet);
    alert(`You regiestered a new pet!! you have ${salon.pets.length} pets`); 
    clearForm();
}
//create clearForm function (think where do you need to call the function??)

function clearForm(){
    petName.value="";
    petAge.value="";
    petGender.value="";
    petBreed.value="";
    petSize.value="";
    petService.value="";
    ownerName.value="";
    ownerPhone.value="";
    ownerEmail.value="";
}
function deletePet(id){
    console.log("Delete the pet"+id);
    document.getElementById(id).remove();
    // travel the array 
    for(let i=0;i<salon.pets.length;i++){
        //find the pet by id
        if(salon.pets[i].id===id){
            indexDelete=i;
        }
    }
    
    salon.pets.splice(indexDelete,1);//position number of elements

    //delete it from the array
}

function searchPet(){
    //this search is my name or by service
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for(let i=0;i<salon.pets.length;i++){
        if(salon.pets[i].name.toLowerCase()===searchString.toLowerCase() || salon.pets[i].service.toLowerCase()===searchString.toLowerCase() || salon.pets[i].email.toLowerCase()===searchString.toLowerCase()){
            document.getElementById(salon.pets[i].id).classList.add("highlight");
        }else{
            document.getElementById(salon.pets[i].id).classList.remove("highlight")
        }
    }
}

function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane", "large", "Nails cut", "Shaggy","666-777-8888","scoobysnacks@hotmail.com");
    let scrappy= new Pet("Scrappy",40,"Male","Dane","small", "Grooming","Shaggy","888-333-4444","lilman@gmail.com");
    let simba = new Pet("Simba",25,"Male","Lion","X-large","Haircut","The king","777-444-3333","jungleking@yahoo.com");
     salon.pets.push(scooby);
     salon.pets.push(scrappy);
     salon.pets.push(simba);
     displayCards();

}
window.onload=init;
