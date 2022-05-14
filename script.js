/*DAY 3 */

let inputName = document.querySelector('#js-name');
let inputDate = document.querySelector('#js-date');
let form = document.querySelector('.form')
let people = JSON.parse(localStorage.getItem('people')) || []; 

people.forEach((person) => {
  createTable(person);
})

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  
  let person = {
    "name": inputName.value,
    "birthdate": inputDate.value
  }

  let updtPerson = [...people, person]

  createTable(person);

  people.push(person); 

  console.log(people);

  localStorage.setItem('people', JSON.stringify(updtPerson));


  inputName.textContent = '';
  inputDate.textContent = ''; 
})

// function isNameValid(){
//   let regexp = /^[a-zA-Z]+$/;
  
//   let nomeDigitado = inputName.value; 
  
//   if(nomeDigitado.match(regexp)){
//     return; 
//   } else{
//     alert("Nome inválido"); 
//   }
// }

function transformDate(birthdate){
  let typedDate = birthdate;
  let d = new Date(typedDate);
  return d.toLocaleDateString('pt-BR',{timeZone: 'UTC'});
}

// function storagePeople(){
//   let person = {
//     "name": inputName.value,
//     "birthdate": inputDate.value
//   }
  
//   people.push(person); 

//   localStorage.setItem(person, JSON.stringify(people));

//   createTable(person);
// }

function createTable(person){
let table = document.querySelector('tbody'); 
let tr = document.createElement('tr'); 
let td = document.createElement('td');
let tdData = document.createElement('td')

td.innerHTML = person.name;
tr.appendChild(td);

tdData.innerHTML = transformDate(person.birthdate); 
tr.appendChild(tdData);

table.appendChild(tr)

}

