btnlogin = document.getElementById("btnlogin")
nome = document.getElementById("nome")
senha = document.getElementById("senha")


btnlogin.addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value == "admin" && senha.value == "admin"){
        mensagem.classList.remove("mensagem-incorreta")
        mensagem.innerHTML = "Login realizado com sucesso"        
        mensagem.classList.add("mensagem-sucesso")

    }  else {
        mensagem.innerHTML = "Login ou Senha incorreta"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-incorreta")
    }
})
