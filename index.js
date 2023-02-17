const nombre = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const form = document.getElementById('form');
const warnings = document.getElementById('warnings');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(number.value.length < 6){
        warnings += `el numero no  tiene 6 cifras <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

const inputRandomNumber = document.getElementById('inputRandom');


window.addEventListener('load', () => {
    getRandomNumber();
});


function getRandomNumber(){
    let RandomNumber =math.random().toString().slice(2, 8);
    inputRandomNumber.value= randomNumber;
}