let myform=document.getElementById("form12");

myform.addEventListener("submit",function(event)
{
    event.preventDefault();

    let name=event.target.username.value;
    let dateOfBirth=event.target.dateOfBirth.value;
    let gender=event.target.gender1.value;
    let phoneNumber=event.target.phnumber.value;
    let grade= event.target.grade.value;


    renderForm(name,dateOfBirth,gender,phoneNumber,grade);

})

function renderForm(name,dateOfBirth,gender,phoneNumber,grade)
{


let table12 = document.getElementById('table1');

let row1= document.createElement('tr');

table12.appendChild(row1);

let cell1= document.createElement('td');

row1.appendChild(cell1);

cell1.textContent=name;



let cell2= document.createElement('td');

row1.appendChild(cell2);

cell2.textContent=dateOfBirth;

let cell3= document.createElement('td');

row1.appendChild(cell3);

cell3.textContent=gender;

let cell4= document.createElement('td');

row1.appendChild(cell4);

cell4.textContent=phoneNumber;

let cell5= document.createElement('td');

row1.appendChild(cell5);

cell5.textContent=grade;



}

