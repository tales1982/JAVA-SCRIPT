function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.legnth == 0  || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-M.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','jovem-M.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src','homen.png')
            }else {
                //Velho
                img.setAttribute('src','velho.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-F.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','jovem-F.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src','mulher.png')
            }else {
                //Velha
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}