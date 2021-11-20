
function displayInformation(){
    document.getElementById("information").innerHTML=`
    ${salon.name} opens at ${salon.hours.open} and closes at ${salon.hours.close}<br> ${salon.address.city}, ${salon.address.number}, ${salon.address.zip}</br>`;

}
displayInformation();
//create objects literals for the pets 

function displayName(){
    document.write(`<p class="pet-1"><b>Pet name:</b> ${salon.pets[0].name} <p><b>Age:</b> ${salon.pets[0].age}</p> <p><b>Breed:</b> ${salon.pets[0].breed}</p>`);
    document.write(`<p class="pet-1"><b>Pet name:</b> ${salon.pets[1].name} <p><b>Age:</b> ${salon.pets[1].age}</p> <p><b>Breed:</b> ${salon.pets[1].breed}</p>`);
    document.write(`<p class="pet-1"> <b>Pet name:</b> ${salon.pets[2].name} <p><b>Age:</b> ${salon.pets[2].age}</p> <p><b>Breed:</b> ${salon.pets[2].breed}</p> `)
}
displayName();
