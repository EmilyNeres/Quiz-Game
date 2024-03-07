import { useState } from 'react'
import './App.css'

function App () {
  const[perguntaAtual, setPerguntaAtual]= useState(0);
  const[pontuacao, setPontuacao] = useState(0);

  const perguntas = [
    {
      pergunta: " Qual tag é usada para criar um link em HTML?",
      opcoes:["<a>", "<link>","<href>","<url>"],
      respostaCorreta: "<a>"

  },
    
  {
    pergunta: "Qual é a propriedade CSS usada para alterar a cor do texto?",
    opcoes:["font-color", "color","text-color","text"],
    respostaCorreta: "color"

},
  
{
  pergunta: "Qual elemento HTML é usado para definir o título de uma página?",
  opcoes:["<head>", "<h1>","<title>","<header>"],
  respostaCorreta: "<title>"

},
{
  pergunta: "Qual propriedade CSS é usada para alterar a largura de um elemento? ",
  opcoes:["width", "size","length","resize"],
  respostaCorreta: "width"

},
{
  pergunta: "Qual é a sintaxe correta para comentar um bloco de código em CSS?",
  opcoes:["<!-- comentário -->", "/* comentário */","// comentário ","<-- comentário -->"],
  respostaCorreta: "/* comentário */"

},
{
  pergunta: " Qual é a tag HTML usada para criar uma lista ordenada?",
  opcoes:["<ol>", "<li>","<ul>","<list>"],
  respostaCorreta: "<ol>"

},
{
  pergunta: "Qual propriedade CSS é usada para definir o estilo de fonte negrito? ",
  opcoes:["font-style", "text-decoration","font-weight","font-variant"],
  respostaCorreta: "font-weight"

},



{
  pergunta: "Qual elemento HTML é usado para definir um parágrafo?",
  opcoes:["<paragraph>", "<p>","<par>","<text>"],
  respostaCorreta: "<p>"

},
{
  pergunta: "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
  opcoes:["background-color", "bg-color","color","background"],
  respostaCorreta: "background-color"

},
{
  pergunta: "Qual é a tag HTML usada para definir uma imagem?",
  opcoes:["<img>", "<image>","<picture>","<figure>"],
  respostaCorreta: "<img>"
},

  ];

  const handleResposta = (opcaoSelecionada)=>{
    if (opcaoSelecionada === perguntas [perguntaAtual].respostaCorreta){
      setPontuacao(pontuacao + 1);
    }

    setTimeout(() =>{
      if(perguntaAtual < perguntas.length -1){
        setPerguntaAtual (perguntaAtual + 1);
      }else{
        console.log("Fim de jogo. Pontuação final: ", pontuacao);
        reiniciarJogo();
      }
    }, 1000);
  };

  const reiniciarJogo = ()=> {
    setPerguntaAtual(0);
    setPontuacao(0);
  };

  return (
    <div className='container'>
      <h1>Quiz Game</h1>
      <h2>Pergunta {perguntaAtual + 1}</h2>
      <p>{perguntas[perguntaAtual].pergunta}</p>

     <ul>
      {perguntas[perguntaAtual].opcoes.map((opcao, index) =>(
        <li key={index}>
          <button onClick={() => handleResposta(opcao)}>{opcao}</button>
        </li>
      ))}
     </ul>
      <p>Pontuação: {pontuacao}</p>
    </div>
  );
}

export default App;
