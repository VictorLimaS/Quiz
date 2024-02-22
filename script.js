// Array de objetos contendo as perguntas, respostas e as respostas corretas
const perguntas =
  [{
    pergunta: "O que significa AWS?",
    respostas: [
      "Advanced Web Services",
      "Amazon Web Services",
      "Automated Web Solutions",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenamento de objetos?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "Amazon RDS",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para escalonamento automático de recursos?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "AWS Auto Scaling",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para hospedar sites estáticos?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para executar código sem provisionar ou gerenciar servidores?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para monitorar e coletar métricas de recursos da AWS?",
    respostas: [
      "Amazon CloudWatch",
      "Amazon S3",
      "Amazon EC2",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para provisionar e gerenciar bancos de dados relacionais?",
    respostas: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenamento de dados em cache?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "Amazon ElastiCache",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para distribuir conteúdo para usuários finais com baixa latência?",
    respostas: [
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon Route 53",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para conectar instâncias EC2 a uma rede virtual privada (VPC)?",
    respostas: [
      "Amazon Route 53",
      "Amazon VPC",
      "AWS Direct Connect",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para monitorar e auditar o acesso aos recursos da AWS?",
    respostas: [
      "AWS IAM",
      "AWS KMS",
      "AWS CloudTrail",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para gerenciar chaves de criptografia?",
    respostas: [
      "AWS IAM",
      "AWS KMS",
      "AWS CloudHSM",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para criar e gerenciar clusters de contêineres?",
    respostas: [
      "Amazon ECS",
      "AWS Elastic Beanstalk",
      "AWS Fargate",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para fazer análises de Big Data?",
    respostas: [
      "Amazon S3",
      "Amazon EMR",
      "Amazon Redshift",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para transcodificação de vídeos?",
    respostas: [
      "Amazon S3",
      "Amazon Elastic Transcoder",
      "Amazon CloudFront",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para realizar testes de carga em aplicações web?",
    respostas: [
      "AWS CodeDeploy",
      "AWS CodePipeline",
      "AWS Device Farm",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para realizar análises de segurança em tempo real?",
    respostas: [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Shield",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para automatizar o processo de deployment de aplicações?",
    respostas: [
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "AWS CodeBuild",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para orquestrar e gerenciar contêineres Docker?",
    respostas: [
      "Amazon ECS",
      "AWS Elastic Beanstalk",
      "AWS Fargate",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para análises de Business Intelligence (BI)?",
    respostas: [
      "Amazon S3",
      "Amazon Redshift",
      "Amazon QuickSight",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para provisionar e gerenciar máquinas virtuais?",
    respostas: [
      "Amazon S3",
      "Amazon EC2",
      "Amazon RDS",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para armazenamento de dados em um data warehouse?",
    respostas: [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para monitorar e gerenciar redes?",
    respostas: [
      "Amazon Route 53",
      "Amazon VPC",
      "AWS Direct Connect",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para fazer backup e recuperação de dados?",
    respostas: [
      "Amazon S3",
      "Amazon Glacier",
      "AWS Backup",
    ],
    correta: 2
  },
  {
    pergunta: "Qual serviço da AWS é usado para entrega de emails em escala?",
    respostas: [
      "Amazon SES",
      "Amazon SNS",
      "Amazon SQS",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para análises de segurança de dados em tempo real?",
    respostas: [
      "Amazon Macie",
      "AWS Security Hub",
      "Amazon Inspector",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para registrar nomes de domínio?",
    respostas: [
      "Amazon Route 53",
      "Amazon S3",
      "Amazon CloudFront",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para implantação contínua de aplicações?",
    respostas: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS CodeBuild",
    ],
    correta: 1
  },
  {
    pergunta: "Qual serviço da AWS é usado para análises de dados de streaming em tempo real?",
    respostas: [
      "Amazon Kinesis",
      "Amazon SQS",
      "Amazon SNS",
    ],
    correta: 0
  },
  {
    pergunta: "Qual serviço da AWS é usado para monitorar e gerenciar APIs?",
    respostas: [
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon Cognito",
    ],
    correta: 0
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
