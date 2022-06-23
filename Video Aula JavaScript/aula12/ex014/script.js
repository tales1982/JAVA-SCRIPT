function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom Dia
        img.src = 'dia.png'
        document.body.style.background = '#527b94'
    }else if (hora >= 12 && hora < 18){
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ffb03c'
    }else {
        //Boa Noite
        img.src = 'noite.png'
        document.body.style.background = '#2d2d2d'
    }
}
