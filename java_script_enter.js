
let users = [{
  log: '1@mail.ru',
  pass: '123'
},
{
  log: '2@mail.ru',
  pass: '333'
}

];

let emailField = document.getElementById('email');
let keyField = document.getElementById('key');
let send = document.getElementById('send');
let form = document.getElementById('form');




 
form?.addEventListener('submit', (event) => {
  event.preventDefault()
  localStorage.setItem('email', emailField.value);
  localStorage.setItem('pass', keyField.value);
  onSubmit()
}) 


function enter(){
  for (j=0; j<users.length; j++){
    if (users[j].log === localStorage.getItem('email') && users[j].pass === localStorage.getItem('pass')){
      return location.href = 'main_file.html'
      
    }
  }
}

enter()

emailField?.addEventListener('change', () => {  
  if (!emailField.value.length || !keyField.value.length){
    send.setAttribute('disabled','disabled');
  } else {
    send.removeAttribute('disabled');
  }
})
keyField?.addEventListener('change', () => {
  
  if (!emailField.value.length || !keyField.value.length){
    send.setAttribute('disabled','disabled');
  } else {
    send.removeAttribute('disabled');
  }
})

function onSubmit(){
 
  let flag = false;
  for(var i = 0; i<users.length; i++){ 
  if(emailField.value === (users[i].log.toLowerCase()) && keyField.value === (users[i].pass)) {
  flag = true;
  }
}

 if(flag === true){
  location.href = 'main_file.html';
  } else {
  alert('Неверный email и/или пароль!')
  }
}
  

// reg?.addEventListener("submit", (event) => {
//   event.preventDefault()
//   cor()
// })  

// function cor(){ 
//   if (newkey1.value === newkey2.value || !newemail.value.length){
//     users.push({
//       log: newemail.value,
//       pass: newkey1.value
      
//     }
//   );
//   location.href = 'enter.html'; 
//   } else{
//     alert('Пароли не совпадают')
//   }
// }
// console.log(users);
// let database
// fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
// .then((response) => response.json())
// .then((data) => database = data)






  
  




