 
//  var valor =  document.querySelector('.barra');
//   if(valor){
//   var numero = document.querySelector('#etiqueta');
//   if(numero) {
//     numero.innerHTML = valor.value;
//     console.log(numero, 'este es ', valor)
//     valor.addEventListener('barra', function(){
//       etiqueta.innerHTML = valor.value;}, false);
//     }
//   }


const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));