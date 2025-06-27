let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");
let rodape = document.querySelector("#rodape");

    botao.addEventListener('click', mudanca)
    function mudanca(){
        mensagem.innerHTML="Não adie mais a vida para a qual você está destinado. Assuma a responsabilidade e a construa!";
        rodape.style.height="15vh";
        botao.style.display="none";
    }