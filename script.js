function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
   window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    const fsex = document.getElementsByName('radsex')
    const idade = ano - Number(fano.value)
    const gênero = ''
    const img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
       gênero = 'Homem'
    if ( idade >=0 && idade < 10){
      //Criança
      img.setAttribute('src', 'img/menino.png')
    } 
     else if ( idade < 21){
       //Jovem
     img.setAttribute('src', 'img/homemjovem.png')
     }
       else if (idade < 50 ){
         //Adulto  
         img.setAttribute('src', 'img/homem.png')
    }
       else {
         //idoso
           img.setAttribute('src','img/idoso.png')
       }
  }else if (fsex[1].checked){
       gênero = 'Mulher'
     if ( idade >=0 && idade < 10){
      //Criança
        img.setAttribute('src', 'img/menina.png')
    } 
     else if ( idade < 21){
       //Jovem
           img.setAttribute('src', 'img/mulherjovem.png')
     }
       else if (idade < 50 ){
         //Adulto  
              img.setAttribute('src', 'img/mulher.png')
    }
       else {
         //idoso
         img.setAttribute('src', 'img/idosa.png')
       }
  }
    res.style.textAlign = "center"
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   res.appendChild(img)
   }
     }
