function contar() {
    var inicio = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pulando = document.querySelector('#txtp')
    var resultado = document.querySelector('#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || pulando.value.length == 0){
        resultado.innerHTML = ' Impossível contar!'

    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulando.value)

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i<f){            // Contagem crescente
            for(let c=i; c<=f; c+=p){
                resultado.innerHTML += `\u{1F449} ${c}`
            }

        } else if (i>f){    // Contagem regressiva
            for(let c=i; c>=f; c-=p){
                resultado.innerHTML += `\u{1F449} ${c}`
            }
        }
    }
}
