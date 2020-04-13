let listaNome = document.querySelector('input#textoAdicionar')
let lista = document.querySelector('select#formLista')
let resultado = document.querySelector('div#sortear')
let valores = []

function inLista(nome, listaNome){
    if (listaNome.indexOf(nome) === -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(inLista(listaNome.value, valores)){
    valores.push(listaNome.value)
    let item = document.createElement('option')
    item.text = `${listaNome.value}`
    lista.appendChild(item)
    } else{
        window.alert('Valor inválido ou já  encontrado na lista.')
    }
    listaNome.value = ''
    listaNome.focus()
}

function sortear(){
    if (valores.length != 0){
       let ganhador = Math.floor(Math.random() * valores.length)
       resultado.innerHTML = `O ganhador foi <strom> ${valores[ganhador]} </strong> `
     }else {
        alert('Adicione valores antes de finalizar!')
     }
}