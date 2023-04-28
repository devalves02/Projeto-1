let contar = 0

 function cont(){   
    contar++
    conte = window.document.getElementById('conte')
    conte.innerHTML=`<p>você clicou ${contar} vez!</p> `

    if(contar>1){
        conte.innerHTML=`<p>você clicou ${contar} vezes!</p> `
    }
    }

    function limpar(){

        conte = window.document.getElementById('conte')
        contar= 0
        conte.innerHTML=`<p>você clicou ${contar} vezes!</p> `
    }

