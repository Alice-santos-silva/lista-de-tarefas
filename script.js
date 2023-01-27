let input = document.querySelector('input')
let lista = document.querySelector('ul')

/**criar um evento dentro do input, um evento de teclado para verificar se o usuário usou a tecla enter:*/

/**função para saber se o enter foi usado:*/
function handleKeyUp(e){
    if(e.key === 'Enter'){
         const newLi = document.createElement('li')
         newLi.innerHTML = input.value
         lista.appendChild(newLi)

         //como 'zerar' o campo de texto para novos ítens:
         input.value = ''
    }
}

/**evento:; */
input.addEventListener('keyup', handleKeyUp)
