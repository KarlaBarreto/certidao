var nasc = document.getElementById('inasc')
var res = document.getElementById('resultado')

nasc.addEventListener('click', selecionar)

function selecionar() {
    res.innerHTML = `Você é Brasileiro.` 
    
   if(nasc.value === 'bra') {
    res.innerHTML = `Você é Brasileiro(a)`
   } else {
    res.innerHTML = `Você é Estrangeiro.`
   }
}