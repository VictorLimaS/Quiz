// Array de objetos contendo as perguntas, respostas e as respostas corretas
const perguntas =
  [ {
    pergunta: "Qual é o nome do primeiro jogo da série Call of Duty?",
    respostas: [
      "Call of Duty: Modern Warfare",
      "Call of Duty: Black Ops",
      "Call of Duty",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do protagonista da série Modern Warfare?",
    respostas: [
      "Captain Price",
      "Soap MacTavish",
      "Ghost",
    ],
    correta: 1
  },
  {
    pergunta: "Qual empresa desenvolveu a série Call of Duty?",
    respostas: [
      "Activision",
      "EA Sports",
      "Ubisoft",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o modo de jogo mais popular na série Call of Duty?",
    respostas: [
      "Campanha",
      "Multijogador",
      "Zumbis",
    ],
    correta: 1
  },
  {
    pergunta: "Em qual conflito histórico é ambientado o jogo Call of Duty: World at War?",
    respostas: [
      "Segunda Guerra Mundial",
      "Guerra Fria",
      "Primeira Guerra Mundial",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do jogo que introduziu o modo Battle Royale em Call of Duty?",
    respostas: [
      "Call of Duty: Black Ops 4",
      "Call of Duty: Warzone",
      "Call of Duty: Advanced Warfare",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a facção inimiga principal em Call of Duty: Modern Warfare 2?",
    respostas: [
      "Ultranacionalistas russos",
      "Exército dos EUA",
      "Terroristas árabes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o título mais recente da série Call of Duty lançado em 2021?",
    respostas: [
      "Call of Duty: Black Ops Cold War",
      "Call of Duty: Vanguard",
      "Call of Duty: Modern Warfare",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do estúdio que desenvolveu Call of Duty: World War II?",
    respostas: [
      "Sledgehammer Games",
      "Treyarch",
      "Infinity Ward",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a ambientação principal da série Call of Duty: Black Ops?",
    respostas: [
      "Guerra do Vietnã",
      "Guerra Fria",
      "Segunda Guerra Mundial",
    ],
    correta: 1
  }
];

// Seleciona o elemento HTML com o id 'quiz'
const quiz = document.querySelector('#quiz');

// Seleciona o elemento HTML 'template'
const template = document.querySelector('template');

// Cria um novo conjunto para armazenar as respostas corretas
const corretas = new Set();

// Armazena o total de perguntas
const totalDePerguntas = perguntas.length;

// Seleciona o elemento HTML com o id 'acertos' e uma tag 'span'
const mostrarTotal = document.querySelector('#acertos span');

// Atualiza o conteúdo do elemento 'mostrarTotal' com o número de respostas corretas e o total de perguntas
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

// Loop que percorre cada item (pergunta) no array 'perguntas'
for (const item of perguntas) {
  // Clona o conteúdo do elemento 'template'
  const quizItem = template.content.cloneNode(true);

  // Define o texto da pergunta dentro do elemento 'h3' do quizItem
  quizItem.querySelector('h3').textContent = item.pergunta;

  // Loop que percorre cada resposta dentro do array 'respostas' do item
  for (let resposta of item.respostas) {
    // Clona o elemento 'dt' que contém a estrutura de uma resposta
    const dt = quizItem.querySelector('dl dt').cloneNode(true);

    // Define o texto da resposta dentro do elemento 'span' dentro do 'dt'
    dt.querySelector('span').textContent = resposta;

    // Define o atributo 'name' e o valor do atributo 'value' do input
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    // Adiciona um evento de mudança ('change') ao input
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta; // Verifica se a resposta selecionada é a correta

      corretas.delete(item); // Remove a pergunta do conjunto de respostas corretas
      if (estaCorreta) { // Se a resposta selecionada estiver correta
        corretas.add(item); // Adiciona a pergunta ao conjunto de respostas corretas
      }

      // Atualiza o texto do elemento 'mostrarTotal' com o número de respostas corretas e o total de perguntas
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    // Adiciona a resposta (dt) ao quizItem
    quizItem.querySelector('dl').appendChild(dt);
  }

  // Remove o primeiro elemento 'dt' do quizItem
  quizItem.querySelector('dl dt').remove();

  // Adiciona o quizItem ao elemento 'quiz'
  quiz.appendChild(quizItem);
}
