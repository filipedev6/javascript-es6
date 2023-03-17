const contato = document.forms.contato;
const text = document.querySelector('.texto');

function handleChange(event) {
    if(event.target.checked)
    console.log(event.target.value);
}

contato.addEventListener("change", handleChange);