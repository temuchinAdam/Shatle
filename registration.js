let newkey1 = document.getElementById('newkey1');
let newkey2 = document.getElementById('newkey2');
let button = document.getElementById('btn')

let newemail = document.getElementById('newemail');
let newkey1 = document.getElementById('newkey1');
let newkey2 = document.getElementById('newkey2');
let button = document.getElementById('btn')
let reg = document.getElementById('reg')
let btn = document.getElementById('btn')


button.onclick = function(){ 
if (newkey1.value === newkey2.value){
    alert('true');
}
    else{alert('false')}
}