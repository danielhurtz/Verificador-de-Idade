function verificar() {
    let data = new Date()
    let ano_atual = new Date().getFullYear();
    let anoF = document.getElementById('anoInfo')
    var res = document.querySelector('div#res')

    if (anoF.value.lenght == 0 || anoF.value > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sexF = document.getElementsByName('radsex')
        let idade = ano_atual - Number(anoF.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto') // pode ser feito no HTML

        if (sexF[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // Bebe 
                img.setAttribute('src', './img/H1.png')
            } else if (idade < 12) {
                // Crianca
                img.setAttribute('src', './img/H2.png')
            } else if (idade < 19) {
                // Adolescente
                img.setAttribute('src', './img/H3.png')
            } else if (idade < 30) {
                // Adulto
                img.setAttribute('src', './img/H4.png')
            } else if (idade < 40) {
                // Adulto + velho
                img.setAttribute('src', './img/H5.png')
            } else if (idade < 60) {
                // Adulto ++velho
                img.setAttribute('src', './img/H6.png')
            } else {
                // Idoso
                img.setAttribute('src', './img/H7.png')
            }

        } else if (sexF[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // Bebe 
                img.setAttribute('src', './img/M1.png')
            } else if (idade < 12) {
                // Crianca
                img.setAttribute('src', './img/M2.png')
            } else if (idade < 19) {
                // Adolescente
                img.setAttribute('src', './img/M3.png')
            } else if (idade < 30) {
                // Adulta
                img.setAttribute('src', './img/M4.png')
            } else if (idade < 40) {
                // Adulta + velha
                img.setAttribute('src', './img/M5.png')
            } else if (idade < 60) {
                // Adulta ++velha
                img.setAttribute('src', './img/M6.png')
            } else {
                // Idosa
                img.setAttribute('src', './img/M7.png')
            }
        }

        res.style.textAlign = 'center' // Alinhar texto 'res'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}