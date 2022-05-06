/*DAY 1 */

let inputName = document.querySelector('#js-name');
let inputDate = document.querySelector('#js-date');
let btnSubmit = document.querySelector('#js-submit');

btnSubmit.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(inputName.value);
  console.log(inputDate.value);
})