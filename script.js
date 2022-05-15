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

  let exist = people.find(person => person.name === inputName.value)
  
  if (exist){
    person.id = exist.id;
    updateElement(person);

    people[people.findIndex(element => element.id === exist.id)] = person; 

  } else{

    person.id = people[people.length -1] ? (people[people.length-1]).id+1 : 0
    createTable(person);

    people.push(person); 

  }
  
  localStorage.setItem('people', JSON.stringify(people));

  inputName.innerHTML = '';
  inputDate.innerHTML = ''; 

})


function transformDate(birthdate){
  let typedDate = birthdate;
  let d = new Date(typedDate);
  return d.toLocaleDateString('pt-BR',{timeZone: 'UTC'});
}

function createTable(person){
let table = document.querySelector('tbody'); 
let tr = document.createElement('tr'); 
let td = document.createElement('td');
let tdData = document.createElement('td')

td.innerHTML = person.name;
tr.appendChild(td);

tdData.innerHTML = transformDate(person.birthdate); 
tdData.dataset.id = person.id;
tr.appendChild(tdData);

tr.appendChild(btnDelete(person.id))

table.appendChild(tr)

}

function btnDelete(id){
  let btnDel = document.createElement('button');
  btnDel.innerText = 'X'; 
  btnDel.classList.add('delete-button');

  btnDel.addEventListener('click', function(){ 
    deleteElement(this.parentNode, id);
  })

  return btnDel; 
}

function updateElement(person){
  document.querySelector("[data-id='"+person.id+"']").innerHTML = transformDate(inputDate.value); 
}


function deleteElement(element, id){
element.remove();

people.splice(people.findIndex(element => element.id === id), 1)
localStorage.setItem('people', JSON.stringify(people));


}





