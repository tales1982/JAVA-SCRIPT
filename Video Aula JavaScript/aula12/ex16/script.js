function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('Impossivel Contar')
        alert.apply('[ERRO!!] Faltam Dados')
    }else {
        res.innerHTML = 'Contador:<br>'
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p <= 0) {
            alert('Passo Invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem cresente
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            //contagen regressiva
            for(let c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F499}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}