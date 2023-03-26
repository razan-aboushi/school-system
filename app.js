// let myform=document.getElementById("form12");

// myform.addEventListener("submit",function(event)
// {
//     event.preventDefault();

//     let name=event.target.username.value;
//     let dateOfBirth=event.target.dateOfBirth.value;
//     let gender=event.target.gender1.value;
//     let phoneNumber=event.target.phnumber.value;
//     let grade= event.target.grade.value;


//     renderForm(name,dateOfBirth,gender,phoneNumber,grade);

// })

// function renderForm(name,dateOfBirth,gender,phoneNumber,grade)
// {


// let table12 = document.getElementById('table1');

// let row1= document.createElement('tr');

// table12.appendChild(row1);

// let cell1= document.createElement('td');

// row1.appendChild(cell1);

// cell1.textContent=name;



// let cell2= document.createElement('td');

// row1.appendChild(cell2);

// cell2.textContent=dateOfBirth;

// let cell3= document.createElement('td');

// row1.appendChild(cell3);

// cell3.textContent=gender;

// let cell4= document.createElement('td');

// row1.appendChild(cell4);

// cell4.textContent=phoneNumber;

// let cell5= document.createElement('td');

// row1.appendChild(cell5);

// cell5.textContent=grade;

// }














let array1 = [];

if (localStorage.array1 != null)
 {
    array1 = JSON.parse(localStorage.array1);
    renderForm();
}



let myform = document.getElementById("form12");

myform.addEventListener("submit",(event) => {
    event.preventDefault();

    let name = event.target.username.value;
    let dateOfBirth = event.target.dateOfBirth.value;
    let gender = event.target.gender1.value;
    let phoneNumber = event.target.phnumber.value;
    let major = event.target.major.value;
    let imageUrl = event.target.imageUrl.value;
    myform.reset();



    let student1 = new Student(name, dateOfBirth, gender, phoneNumber, major, imageUrl);


    array1.push(student1);
    localStorage.setItem('array1', JSON.stringify(array1));
    renderForm();
});


function Student(name, dateOfBirth, gender, phoneNumber, major, imageUrl) 
{
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.major = major;
    this.imageUrl = imageUrl;
    this.phoneNumber = phoneNumber;
}

function renderForm() {
    let sdcard = document.getElementById("student_card");
  
   
    sdcard.innerHTML = "";
  
    for (let r = 0; r < array1.length; r++) {
      let divContainer = document.createElement('div');
      sdcard.appendChild(divContainer);
  
      let img1 = document.createElement('img');
      img1.src = `${array1[r].imageUrl}`;
      divContainer.appendChild(img1);
  
      let ul = document.createElement("ul");
      divContainer.appendChild(ul);
  
      let li1 = document.createElement("li");
      li1.textContent = `Name: ${array1[r].name}`;
      ul.appendChild(li1);
  
      let li2 = document.createElement("li");
      li2.textContent = `Date of Birth: ${array1[r].dateOfBirth}`;
      ul.appendChild(li2);
  
      let li3 = document.createElement("li");
      li3.textContent = `Gender: ${array1[r].gender}`;
      ul.appendChild(li3);
  
      let li4 = document.createElement("li");
      li4.textContent = `Number: ${array1[r].phoneNumber}`;
      ul.appendChild(li4);
  
      let li5 = document.createElement("li");
      li5.textContent = `Major: ${array1[r].major}`;
      ul.appendChild(li5);
    }
  }
  

