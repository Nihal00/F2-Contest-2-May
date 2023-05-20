//Given arrays
const professionArray = [
    {
        id: 1,
        name: "john",
        age: 18,
        profession: "developer"
    },
    {
        id: 2,
        name: "jack",
        age: 20,
        profession: "developer"
    },
    {
        id: 3,
        name: "karen",
        age: 19,
        profession: "admin"
    }
];


const filterBtn = document.getElementById('filter-btn');
const selectedProfession = document.getElementById('profession-dropdown');
const dataCard = document.getElementById('data-cards');
const formBtn = document.getElementById('form-btn');
const userName = document.getElementById('name');
const userProfession = document.getElementById('profession-input');
const userAge = document.getElementById('age');
let proId = professionArray.length;

//Sort the cards According to the Selected Profession
filterBtn.addEventListener('click', () => {
    let profession = selectedProfession.options[selectedProfession.selectedIndex].value;
    
    if(profession === "invalid"){
        
        alert("Select a Profession before clicking the button");

    } else {

        clearScreen();
        //Filter the Array
        const filteredArray = professionArray.filter((card) => card.profession === profession);
        //Display The Filtered Input
        filteredArray.forEach((element) => displayToUI(element));
    }
});


//Add user input into the Array
formBtn.addEventListener('click', () => {
    professionArray.push({
        id: ++proId,
        name: userName.value.toLowerCase(),
        age: userAge.value,
        profession: userProfession.value.toLowerCase()
    });

    //New Arary logged in the Console
    console.log(professionArray);

    //Remove value from the input after submitting
    document.querySelectorAll('.input').forEach(input => input.value = '');
    clearScreen();

    //Display Newly added Input with existing users
    professionArray.forEach((element) => displayToUI(element));
});


//To clear the UI before displaying
function clearScreen(){
    let innerData = document.querySelectorAll(".inner-data");
    innerData.forEach((element) => element.remove());
}


//To Display the Array to UI
function displayToUI(element){
    const innerData = document.createElement('div');
    innerData.className = "inner-data";
    innerData.innerHTML = ` 
    <div class="sl-no">${element.id}.</div>
    <div class="sl-name">Name: ${element.name[0].toUpperCase() + element.name.substring(1).toLowerCase()}</div>
    <div class="sl-pro">Profession: ${element.profession[0].toUpperCase() + element.profession.substring(1).toLowerCase()}</div>
    <div class="sl-age">Age: ${element.age}</div>
    `;
    dataCard.appendChild(innerData);
}









