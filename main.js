//Get input Element 
var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var ageInput = document.getElementById('age');
var emailInput = document.getElementById('email');

//Intiallize an array to store information
var data=[];

// function to add data
function addData(){
    //store information 
    var information={
        firstname:firstNameInput.value,
        lastname:lastNameInput.value,
        age:ageInput.value,
        email:emailInput.value,
    }
    //push the information into the data array
    data.push(information);

    //print the data in console
    console.log(data);

    //calling function display data
    displayData();
};

//function to display data  in table
function displayData(){
     // store data in table
    var tableRecord=``;
    // Loop through the productContainers array to add each product to the table
    for(var i=0;i<data.length;i++){
        tableRecord +=`
        <tr>
        <td>${i}</td>
        <td>${data[i].firstname}</td>
        <td>${data[i].lastname}</td>
        <td>${data[i].age}</td>
        <td>${data[i].email}</td>
        <td><button class="btn btn-secondary">Update</button></td>
        <td><button class="btn btn-danger">Delete</button></td>
    </tr>
        `;
    };
    document.getElementById('tableRow').innerHTML= tableRecord;
}