botaoQuestao1 = document.querySelector("#btn")
refresh = document.querySelector("#refresh")
refresh.style.visibility = "hidden";

botaoQuestao1.addEventListener("click", function(event){
    event.preventDefault()
    botaoQuestao1.style.visibility="hidden";
    refresh.style.visibility = "visible";
    pontuacao = 0;
    
    let radios1 = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    questao1Marcada = false;

    for (let i = 0, length = radios1.length; i < length; i++) {
        if (radios1[i].checked) {
            questao1Marcada = true;
            if(radios1[i].value == 'd'){
                gabarito1.textContent = "Gabarito D. Resposta certa"
                radios1[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito1.textContent = "Gabarito D. Resposta errada"
                radios1[i].parentElement.classList.add("errada")
            }
            
            break;
        }
    }

    
    let radios2 = document.getElementsByName("questao2")
    let gabarito2 = document.getElementById("gabarito2")
    questao2Marcada = false;
    for (let i = 0, length = radios2.length; i < length; i++) {
        if (radios2[i].checked) {
            questao2Marcada = true;
            if(radios2[i].value == 'b'){
                gabarito2.textContent = "Gabarito B. Resposta certa"
                radios2[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito2.textContent = "Gabarito B. Resposta errada"
                radios2[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios3 = document.getElementsByName("questao3")
    let gabarito3 = document.getElementById("gabarito3")
    questao3Marcada = false;

    for (let i = 0, length = radios3.length; i < length; i++) {
        if (radios3[i].checked) {
            questao3Marcada = true;
            if(radios3[i].value == 'd'){
                gabarito3.textContent = "Gabarito D. Resposta certa"
                radios3[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito3.textContent = "Gabarito D. Resposta errada"
                radios3[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios4 = document.getElementsByName("questao4")
    let gabarito4 = document.getElementById("gabarito4")
    questao4Marcada = false;

    for (let i = 0, length = radios4.length; i < length; i++) {
        if (radios4[i].checked) {
            questao4Marcada = true;
            if(radios4[i].value == 'b'){
                gabarito4.textContent = "Gabarito B. Resposta certa"
                radios4[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito4.textContent = "Gabarito B. Resposta errada"
                radios4[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios5 = document.getElementsByName("questao5")
    let gabarito5 = document.getElementById("gabarito5")
    questao5Marcada = false;

    for (let i = 0, length = radios5.length; i < length; i++) {
        if (radios5[i].checked) {
            questao5Marcada = true;
            if(radios5[i].value == 'd'){
                gabarito5.textContent = "Gabarito D. Resposta certa"
                radios5[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito5.textContent = "Gabarito D. Resposta errada"
                radios5[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios6 = document.getElementsByName("questao6")
    let gabarito6 = document.getElementById("gabarito6")
    questao6Marcada = false;

    for (let i = 0, length = radios6.length; i < length; i++) {
        if (radios6[i].checked) {
            questao6Marcada = true;
            if(radios6[i].value == 'c'){
                gabarito6.textContent = "Gabarito C. Resposta certa"
                radios6[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito6.textContent = "Gabarito C. Resposta errada"
                radios6[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios7 = document.getElementsByName("questao7")
    let gabarito7 = document.getElementById("gabarito7")
    questao7Marcada = false;
    for (let i = 0, length = radios7.length; i < length; i++) {
        if (radios7[i].checked) {
            questao7Marcada = true;
            if(radios7[i].value == 'e'){
                gabarito7.textContent = "Gabarito E. Resposta certa"
                radios7[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito7.textContent = "Gabarito E. Resposta errada"
                radios7[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios8 = document.getElementsByName("questao8")
    let gabarito8 = document.getElementById("gabarito8")
    questao8Marcada = false;
    for (let i = 0, length = radios8.length; i < length; i++) {
        if (radios8[i].checked) {
            questao8Marcada = true;
            if(radios8[i].value == 'e'){
                gabarito8.textContent = "Gabarito E. Resposta certa"
                radios8[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito8.textContent = "Gabarito E. Resposta errada"
                radios8[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios9 = document.getElementsByName("questao9")
    let gabarito9 = document.getElementById("gabarito9")
    questao9Marcada = false;
    for (let i = 0, length = radios9.length; i < length; i++) {
        if (radios9[i].checked) {
            questao9Marcada = true;
            if(radios9[i].value == 'e'){
                gabarito9.textContent = "Gabarito E. Resposta certa"
                radios9[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito9.textContent = "Gabarito E. Resposta errada"
                radios9[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    let radios10 = document.getElementsByName("questao10")
    let gabarito10 = document.getElementById("gabarito10")
    questao10Marcada = false;
    for (let i = 0, length = radios10.length; i < length; i++) {
        if (radios10[i].checked) {
            questao10Marcada = true;
            if(radios10[i].value == 'e'){
                gabarito10.textContent = "Gabarito E. Resposta certa"
                radios10[i].parentElement.classList.add("certa")
                pontuacao++
            }else{
                gabarito10.textContent = "Gabarito E. Resposta errada"
                radios10[i].parentElement.classList.add("errada")
            }
            
           break;
        }
    }

    if (!questao1Marcada || !questao2Marcada || !questao3Marcada || !questao4Marcada || !questao5Marcada || !questao6Marcada || !questao7Marcada || !questao8Marcada || !questao9Marcada || !questao10Marcada) {
        alert("Responda todas as questões antes de verificar as respostas!");
        mensagem.textContent="";
        botaoQuestao1.style.visibility="visible";
        refresh.style.visibility = "hidden";
        for (let i = 0, length = radios1.length; i < length; i++) {
            radios1[i].parentElement.classList.remove("certa");
            radios1[i].parentElement.classList.remove("errada");
            gabarito1.textContent = ""
            
        }

       for (let i = 0, length = radios2.length; i < length; i++) {
            radios2[i].parentElement.classList.remove("certa");
            radios2[i].parentElement.classList.remove("errada");
            gabarito2.textContent = ""
         
        }

        for (let i = 0, length = radios3.length; i < length; i++) {
            radios3[i].parentElement.classList.remove("certa");
            radios3[i].parentElement.classList.remove("errada");
            gabarito3.textContent = ""
              
        }

        for (let i = 0, length = radios4.length; i < length; i++) {
            radios4[i].parentElement.classList.remove("certa");
            radios4[i].parentElement.classList.remove("errada");
            gabarito4.textContent = ""
        }

        for (let i = 0, length = radios5.length; i < length; i++) {
            radios5[i].parentElement.classList.remove("certa");
            radios5[i].parentElement.classList.remove("errada");
            gabarito5.textContent = ""
        }

        for (let i = 0, length = radios6.length; i < length; i++) {
            radios6[i].parentElement.classList.remove("certa");
            radios6[i].parentElement.classList.remove("errada");
            gabarito6.textContent = ""
        }

        for (let i = 0, length = radios7.length; i < length; i++) {
            radios7[i].parentElement.classList.remove("certa");
            radios7[i].parentElement.classList.remove("errada");
            gabarito7.textContent = ""
        }

        for (let i = 0, length = radios8.length; i < length; i++) {
            radios8[i].parentElement.classList.remove("certa");
            radios8[i].parentElement.classList.remove("errada");
            gabarito8.textContent = ""
        }

        for (let i = 0, length = radios9.length; i < length; i++) {
            radios9[i].parentElement.classList.remove("certa");
            radios9[i].parentElement.classList.remove("errada");
            gabarito9.textContent = ""
        }

        for (let i = 0, length = radios10.length; i < length; i++) {
            radios10[i].parentElement.classList.remove("certa");
            radios10[i].parentElement.classList.remove("errada");
            gabarito10.textContent = ""
        }

    } else{
        mensagem=document.getElementById('mensagem');
        mensagem.textContent=`pontuação: ${pontuacao}/10`;  
    }

   
})

refresh.addEventListener("click", function () {
    location.reload()
})