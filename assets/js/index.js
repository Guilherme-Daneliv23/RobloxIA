const quiz = [
    {
        question: "Atualmente há leis bem definidas para o uso da IA em todos os países?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "B",
        feedbackCorreto: "Você acertou! A maioria dos países ainda está tentando se adaptar aos avanços ocasionados pelas novas tecnologias de IA, como por exemplo o Brasil que já tem inúmeros projetos de lei que tratam de limites e definições do tema.",
        feedbackIncorreto: "Você errou! A maioria dos países ainda está tentando se adaptar aos avanços ocasionados pelas novas tecnologias de IA, como por exemplo o Brasil que já tem inúmeros projetos de lei que tratam de limites e definições do tema.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo01.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo01.jpg",
        referencia: "https://oglobo.globo.com/economia/tecnologia/noticia/2024/03/13/uniao-europeia-aprova-legislacao-pioneira-sobre-inteligencia-artificial.ghtml"
        
    },
    {
        question: "A IA pode ajudar na identificação de plágio em conteúdos digitais?",
        answers: {
            A: "Sim, tendo 100% de eficiência",
            B: "Sim, apesar de não ser 100% eficiente", 
            C: "Não"
        },
        correctAnswer: "B",
        feedbackCorreto: "Você acertou! A IA pode ser sim utilizada na identificação de plágio pois tem facilidade em identificar o mesmo, porém, claro que ainda há falhas e deve ser unida a mais análises feitas de outras formas.",
        feedbackIncorreto: "Você errou! A IA pode ser sim utilizada na identificação de plágio pois tem facilidade em identificar o mesmo, porém, claro que ainda há falhas e deve ser unida a mais análises feitas de outras formas",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo02.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo02.gif",
        referencia: ""
    },
    {
        question: "No Brasil, já há algum projeto de lei que busque regulamentar a IA?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "A",
        feedbackCorreto: "Você acertou! Já estão sendo desenvolvidos projetos de lei contendo obrigações, direitos e desenvolvimento de qualquer sistema de inteligência artificial.",
        feedbackIncorreto: "Você errou! Já estão sendo desenvolvidos projetos de lei contendo obrigações, direitos e desenvolvimento de qualquer sistema de inteligência artificial.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo03.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo03.gif",
        referencia: "https://www12.senado.leg.br/noticias/materias/2024/06/03/senado-vota-em-julho-projeto-que-regulamenta-uso-da-inteligencia-artificial"
    },
    {
        question: "O treinamento das IA's ocorre até mesmo com materiais que possuam direitos autorais?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "A",
        feedbackCorreto: "Você acertou! Recentemente a New York Times processou a OpenAI e a Microsoft: O jornal alegou que milhões de suas reportagens foram usadas sem autorização para treinar programas de inteligência artificial",
        feedbackIncorreto: "Você errou! Recentemente a New York Times processou a OpenAI e a Microsoft: O jornal alegou que milhões de suas reportagens foram usadas sem autorização para treinar programas de inteligência artificial",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo04.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo04.jpg",
        referencia: "https://g1.globo.com/tecnologia/noticia/2023/12/27/the-new-york-times-processa-openai-e-microsoft-por-violacao-de-direitos-autorais.ghtml"
    },
    {
        question: "Uma máquina pode ser titular de direito autoral?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "B",
        feedbackCorreto: "Você acertou! De acordo com o artigo “O dilema jurídico da propriedade intelectual na inteligência artificial: a máquina poderá ser titular de direito autoral?”, o debate gira em torno da reprodução ilícita de obras, não da criação por tecnologias de inteligência artificial. Portanto, atualmente, uma máquina não pode ser titular de direito autoral.",
        feedbackIncorreto: "Você errou! De acordo com o artigo “O dilema jurídico da propriedade intelectual na inteligência artificial: a máquina poderá ser titular de direito autoral?”, o debate gira em torno da reprodução ilícita de obras, não da criação por tecnologias de inteligência artificial. Portanto, atualmente, uma máquina não pode ser titular de direito autoral.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo05.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo05.jpg",
        referencia: "https://indexlaw.org/index.php/revistadipic/article/view/8086/pdf"
    },
    {
        question: "A Inteligência Artificial pode ser legalmente reconhecida como inventora?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "B",
        feedbackCorreto: "Você acertou! Conforme discutido no artigo “The Impact of Artificial Intelligence on Intellectual Property Rights”, as leis de patentes atuais são baseadas na premissa de que apenas humanos podem ser inventores. Reconhecer a IA como inventora exigiria mudanças legais significativas.",
        feedbackIncorreto: "Você errou! Conforme discutido no artigo “The Impact of Artificial Intelligence on Intellectual Property Rights”, as leis de patentes atuais são baseadas na premissa de que apenas humanos podem ser inventores. Reconhecer a IA como inventora exigiria mudanças legais significativas.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo06.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo06.jpg",
        referencia: "https://ijhs.com.pk/index.php/IJHS/article/view/330"
    },
    {
        question: "Os desenvolvedores e adquirentes de algoritmos autônomos (IA) conseguem prever totalmente as obras que serão produzidas?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "B",
        feedbackCorreto: "Você acertou! Como mencionado no artigo “O dilema jurídico da propriedade intelectual na inteligência artificial: a máquina poderá ser titular de direito autoral?”, nem os desenvolvedores nem os adquirentes conseguem prever totalmente o que um software autônomo poderá produzir, o que ressalta a complexidade e imprevisibilidade da interação entre propriedade intelectual e inteligência artificial.",
        feedbackIncorreto: "Você errou! Como mencionado no artigo “O dilema jurídico da propriedade intelectual na inteligência artificial: a máquina poderá ser titular de direito autoral?”, nem os desenvolvedores nem os adquirentes conseguem prever totalmente o que um software autônomo poderá produzir, o que ressalta a complexidade e imprevisibilidade da interação entre propriedade intelectual e inteligência artificial.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo07.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo07.jpg",
        referencia: "https://indexlaw.org/index.php/revistadipic/article/view/8086/pdf"
    },
    {
        question: "As leis de propriedade intelectual devem incentivar o desenvolvimento de tecnologias de IA enquanto garantem a concorrência justa?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "A",
        feedbackCorreto: "Você acertou! O artigo “The Impact of Artificial Intelligence on Intellectual Property Rights” sugere que as leis de PI (propriedade intelectual) devem incentivar o desenvolvimento de tecnologias de IA, ao mesmo tempo em que garantem a concorrência justa e evitam monopólios.",
        feedbackIncorreto: "Você errou! O artigo “The Impact of Artificial Intelligence on Intellectual Property Rights” sugere que as leis de PI (propriedade intelectual) devem incentivar o desenvolvimento de tecnologias de IA, ao mesmo tempo em que garantem a concorrência justa e evitam monopólios.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo08.jpg",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo08.jpg",
        referencia: "https://ijhs.com.pk/index.php/IJHS/article/view/330"
    },
    {
        question: "O uso de IA para criar deepfakes é considerado uma violação de direitos autorais?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "A",
        feedbackCorreto: "Você acertou! Deepfakes frequentemente utilizam imagens e vídeos protegidos por direitos autorais sem permissão, constituindo uma violação dos direitos dos autores originais das obras utilizadas, como é citado no artigo “Deepfakes: The Legal Implications”.",
        feedbackIncorreto: "Você errou! Deepfakes frequentemente utilizam imagens e vídeos protegidos por direitos autorais sem permissão, constituindo uma violação dos direitos dos autores originais das obras utilizadas, como é citado no artigo “Deepfakes: The Legal Implications”.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo09.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo09.jpg",
        referencia: "https://papers.academic-conferences.org/index.php/iccws/article/view/2099"
    },
    {
        question: "O uso de deepfakes em filmes para recriar atores falecidos pode ser legal?",
        answers: {
            A: "Sim",
            B: "Não"
        },
        correctAnswer: "A",
        feedbackCorreto: "Você acertou! Segundo o artigo “Mission Impossible: The Legal Implications of Managing Deepfake Celebrity Videos”, o uso de deepfakes para recriar atores falecidos em filmes é considerado uma aplicação legítima e pode ser realizado com a devida permissão dos detentores dos direitos de imagem dos atores Esse uso é visto como uma inovação na indústria de efeitos especiais.",
        feedbackIncorreto: "Você errou! Segundo o artigo “Mission Impossible: The Legal Implications of Managing Deepfake Celebrity Videos”, o uso de deepfakes para recriar atores falecidos em filmes é considerado uma aplicação legítima e pode ser realizado com a devida permissão dos detentores dos direitos de imagem dos atores Esse uso é visto como uma inovação na indústria de efeitos especiais.",
        imagemCorreto: "./assets/img/feedbackpositivo/positivo10.gif",
        imagemIncorreto: "./assets/img/feedbacknegativo/negativo10.gif",
        referencia: "https://journals.law.harvard.edu/jsel/2021/03/mission-impossible-the-legal-implications-of-managing-deepfake-celebrity-videos/"
    }
];

let currentQuestionIndex = 0;
let acertos = 0;
const botaoResultados = document.getElementById('botao-resultados');
const paragrafoResultados = document.getElementById('paragrafo-resultados');
const imagemResultados = document.getElementById('imagem-resultados');
botaoResultados.style.display = 'none';
paragrafoResultados.style.display = 'none';
imagemResultados.style.display = 'none';

function loadQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    document.getElementById('question').innerHTML = currentQuestion.question;
    const answersUl = document.getElementById('answers');
    answersUl.innerHTML = '';
    for (const [key, value] of Object.entries(currentQuestion.answers)) {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="radio" name="answer" value="${key}"> ${value}</label>`;
        answersUl.appendChild(li);
    }
    document.getElementById('feedback').style.display = 'none';
}

function submitAnswer() {
    const currentQuestion = quiz[currentQuestionIndex];
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedbackDiv = document.getElementById('feedback');
    const botaoFeedback = document.getElementById('botao');
    const imagem = document.getElementById('imagem');
    const referencia = document.getElementById('referencia');
    const botaoSubmit = document.getElementById('botao-submit');
    const questionCard = document.getElementById('question-card');

    if (selectedAnswer) {
        if (selectedAnswer.value === quiz[currentQuestionIndex].correctAnswer) {
            feedbackDiv.innerHTML = currentQuestion.feedbackCorreto;
            imagem.src = currentQuestion.imagemCorreto;
            feedbackDiv.className = 'feedback correct';
            acertos = acertos + 1;
        } else {
            feedbackDiv.innerHTML = currentQuestion.feedbackIncorreto;
            imagem.src = currentQuestion.imagemIncorreto;
            feedbackDiv.className = 'feedback wrong';
        }
        referencia.style.display = 'block';
        referencia.href = currentQuestion.referencia;
        feedbackDiv.style.display = 'block';
        imagem.style.display = 'block';
        botaoFeedback.style.display = 'block';
        botaoSubmit.style.display = 'none';
        
        if (currentQuestionIndex < quiz.length - 1) {
            currentQuestionIndex++;
            botaoFeedback.addEventListener('click', () =>   {
                feedbackDiv.style.display = 'none';
                imagem.style.display = 'none';
                referencia.style.display = 'none';
                loadQuestion();
                botaoFeedback.style.display = 'none';
                botaoSubmit.style.display = 'block';
            })
            // setTimeout(() => {
            //     
            // }, 2000);
        } else {
            feedbackDiv.style.display = 'block';
            imagem.style.display = 'block';
            referencia.style.display = 'block';
            referencia.href = currentQuestion.referencia;
            botaoFeedback.addEventListener('click', () =>   {
                feedbackDiv.style.display = 'none';
                imagem.style.display = 'none';
                referencia.style.display = 'none';
                botaoFeedback.style.display = 'none';
                botaoSubmit.style.display = 'none';
                questionCard.style.display = 'none';
                botaoResultados.style.display = 'block';

                // RETORNA OS PONTOS FEITOS NO JOGO PARA O HTML

                paragrafoResultados.style.display = 'block';
                paragrafoResultados.innerHTML = acertos.toString() + " acertos de " + (quiz.length).toString() + " questões";
                imagemResultados.style.display = 'block';

                // RETORNA OS ÚLTIMOS FEEDBACKS DEPENDENDO DA QUANTIDADE DE ACERTO

                if(acertos > 5) {
                    imagemResultados.src = "./assets/img/feedbackpositivo/positivo01.gif";
                } else {
                    imagemResultados.src = "./assets/img/feedbacknegativo/negativo01.jpg";
                }
            })

        }
    } else {
        feedbackDiv.textContent = 'Por favor, selecione uma resposta.';
        feedbackDiv.className = 'feedback';
        feedbackDiv.style.display = 'block';
    }
}

loadQuestion();