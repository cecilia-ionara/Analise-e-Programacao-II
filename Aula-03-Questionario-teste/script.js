let texto= document.getElementById("texto_nome") /* variavel */
const btnNome = document.getElementById("btn_nome") /* guarda o valor digitado no input, após o botao ser clicado e não se altera(constante) */

btnNome.addEventListener("click", function(event){
    event.preventDefault() /* impede que a pagina seja recarregada após o envio*/
    let nome = document.getElementById("nome").value /*armazena o valor*/
    texto.innerHTML = "Olá " + nome +" !" /* escreve o texto na tela*/
}) /* vai enviar o que foi digitado para o servidor*/ 

const btn_ano = document.getElementById("btn_ano")
btn_ano.addEventListener("click", function(event){
    event.preventDefault()
    let ano = document.getElementById("ano").value 
    idade = 2023 - ano 
    let textoIdade = document.getElementById("texto_idade")
    Idade.innerHTML = "Sabemos que você tem " + idade + " anos"})

const btnEmoji = document.getElementById("btn_emoji")
let valor = 0 
btnEmoji.addEventListener("click", function(event){
    event.preventDefault()
    valor = valor + 1
    let imagem = document.getElementById("imagem")
    imagem.src = 'imagens/${valor}.png' 
})