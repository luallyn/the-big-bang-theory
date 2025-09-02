document.addEventListener('DOMContentLoaded', function(){
    // --- ACESSIBILIDADE ---
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })
 
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')
 
    let tamanhoAtualFonte = 1;
 
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
 
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
 
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })


    // --- QUIZ THE BIG BANG THEORY ---
    const perguntas = [
        {
            pergunta: "Qual é a profissão do Sheldon Cooper?",
            opcoes: ["Engenheiro", "Físico teórico", "Astrônomo", "Biólogo"],
            resposta: 1
        },
        {
            pergunta: "Qual é o nome da vizinha de Sheldon e Leonard?",
            opcoes: ["Amy", "Penny", "Bernadette", "Emily"],
            resposta: 1
        },
        {
            pergunta: "Qual desses personagens não tem doutorado?",
            opcoes: ["Sheldon", "Leonard", "Howard", "Raj"],
            resposta: 2
        },
        {
            pergunta: "Em qual cidade se passa a série?",
            opcoes: ["Nova York", "Los Angeles", "Pasadena", "San Francisco"],
            resposta: 2
        }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const resultado = document.getElementById("resultado");

    if(quizContainer){ // só roda se existir quiz no HTML
        perguntas.forEach((q, index) => {
            const div = document.createElement("div");
            div.classList.add("pergunta");

            const titulo = document.createElement("h4");
            titulo.textContent = q.pergunta;
            div.appendChild(titulo);

            q.opcoes.forEach((opcao, i) => {
                const label = document.createElement("label");
                label.style.display = "block";

                const input = document.createElement("input");
                input.type = "radio";
                input.name = "pergunta" + index;
                input.value = i;

                label.appendChild(input);
                label.appendChild(document.createTextNode(" " + opcao));
                div.appendChild(label);
            });

            quizContainer.appendChild(div);
        });

        document.getElementById("enviar-quiz").addEventListener("click", function () {
            let pontos = 0;

            perguntas.forEach((q, index) => {
                const resposta = document.querySelector(
                    `input[name="pergunta${index}"]:checked`
                );
                if (resposta && parseInt(resposta.value) === q.resposta) {
                    pontos++;
                }
            });

            resultado.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
        });
    }

})
 
// --- ANIMAÇÕES ---
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#sobre', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#quiz', { delay: 500 });