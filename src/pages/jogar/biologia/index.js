import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles.css";

export default function Index() {
  const questions = [
    {
      questionText:
        "Corredores ecológicos visam mitigar os efeitos da fragmentação dos ecossistemas promovendo a ligação entre diferentes áreas, com o objetivo de proporcionar o deslocamento de animais, a dispersão de sementes e o aumento da cobertura vegetal. São instituídos com base em informações como estudos sobre o deslocamento de espécies, sua área de vida (área necessária para o suprimento de suas necessidades vitais e reprodutivas) e a distribuição de suas populações. Nessa estratégia, a recuperação da biodiversidade é efetiva porque",
      answerOptions: [
        {
          answerText: "aumenta o número de indivíduos nas populações",
          isCorrect: false
        },
        { answerText: "intensifica o manejo de espécies.", isCorrect: false },
        { answerText: " propicia o fluxo gênico.", isCorrect: true },
        { answerText: "amplia o processo de ocupação humana", isCorrect: false }
      ]
    },
    {
      questionText:
        "Insetos podem apresentar três tipos de desenvolvimento. Um deles, a holometabolia (desenvolvimento completo), é constituído pelas fases de ovo, larva, pupa e adulto sexualmente maduro, que ocupam diversos hábitats. Os insetos com holometabolia pertencem às ordens mais numerosas em termos de espécies conhecidas. Esse tipo de desenvolvimento está relacionado a um maior número de espécies em razão da:",
      answerOptions: [
        {
          answerText:
            "proteção na fase de pupa, favorecendo a sobrevivência de adultos férteis.",
          isCorrect: false
        },
        {
          answerText:
            "exploração de diferentes nichos, evitando a competição entre as fases da vida",
          isCorrect: true
        },
        {
          answerText:
            "ingestão de alimentos em todas as fases de vida, garantindo o surgimentos do adulto.",
          isCorrect: false
        },
        {
          answerText:
            "utilização do mesmo alimento em todas as fases, otimizando a nutrição do organismo",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "A polinização, que viabiliza o transporte do grão de pólen de uma planta até o estigma de outra, pode serrealizada biótica ou abioticamente. Nos processos abióticos, as plantas dependem de fatores como o vento e a água.   A estratégia evolutiva que resulta em polinização mais eficiente quando esta depende do vento é o(a):",
      answerOptions: [
        { answerText: " aumento do número de estames. ", isCorrect: true },
        { answerText: "diminuição do cálice", isCorrect: false },
        { answerText: "alongamento do ovário", isCorrect: false },
        { answerText: "disponibilização do néctar.", isCorrect: false }
      ]
    },
    {
      questionText:
        "Para serem absorvidos pelas células do intestino humano, os lipídios ingeridos precisam ser primeiramente emulsificados. Nessa etapa da digestão, torna-se necessária a ação dos ácidos biliares, visto que os lipídios apresentam uma natureza apolar e são insolúveis em água. Esses ácidos atuam no processo de modo a:",
      answerOptions: [
        {
          answerText: "estimular o trânsito intestinal dos lipídios. ",
          isCorrect: false
        },
        { answerText: "promover a secreção de lipases", isCorrect: false },
        { answerText: "agir como detergentes", isCorrect: false },
        { answerText: "tornar os lipídios anfifílicos", isCorrect: true }
      ]
    },
    {
      questionText:
        "O deserto é um bioma que se localiza em regiões de pouca umidade. A fauna é, predominantemente, composta por animais roedores, aves, répteis e artrópodes. Uma adaptação, associada a esse bioma, presente nos seres vivos dos grupos citados é o(a):",
      answerOptions: [
        {
          answerText:
            "eliminação de excretas nitrogenadas de forma concentrada.",
          isCorrect: true
        },
        {
          answerText:
            "existência de numerosas glândulas sudoríparas na epiderme",
          isCorrect: false
        },
        {
          answerText:
            "desenvolvimento do embrião no interior de ovo com casca.",
          isCorrect: false
        },
        {
          answerText: "capacidade de controlar a temperatura corporal.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "A utilização de extratos de origem natural tem recebido a atenção de pesquisadores em todo o mundo, principalmente nos países em desenvolvimento que são altamente acometidos por doenças infecciosas e parasitárias. Um bom exemplo dessa utilização são os produtos de origem botânica que combatem insetos.",
      answerOptions: [
        { answerText: "leishmaniose.", isCorrect: true },
        { answerText: "aids.", isCorrect: false },
        { answerText: "esquistossomose", isCorrect: false },
        { answerText: "hanseníase.", isCorrect: false }
      ]
    },
    {
      questionText:
        "A terapia celular tem sido amplamente divulgada como revolucionária, por emitir a regeneração de tecidos a partir de células novas. Entretanto, a técnica de se introduzirem novas células em um tecido, para o tratamento de enfermidades em indivíduos, já era aplicada rotineiramente em hospitais. A que técnica refere-se o texto? ",
      answerOptions: [
        { answerText: "transfusão de sangue.", isCorrect: true },
        { answerText: "biópsia.", isCorrect: false },
        { answerText: "vacina.", isCorrect: false },
        { answerText: "quimioterapia.", isCorrect: false }
      ]
    },
    {
      questionText:
        "No ciclo celular atuam moléculas reguladoras. Dentre elas, a proteína p53 é ativada em resposta a mutações no DNA, evitando a progressão do ciclo até que os danos sejam reparados, ou induzindo a célula à auto destruição.A ausência dessa proteína poderá favorecer a:",
      answerOptions: [
        {
          answerText:
            "saída imediatada do ciclo celular, antecipando a proteção do DNA.",
          isCorrect: false
        },
        {
          answerText:
            "ativação de outras proteínas reguladoras, induzindo a apoptose.",
          isCorrect: false
        },
        {
          answerText:
            "manutenção da estabilidade genética, favorecendo a longevidade",
          isCorrect: false
        },
        {
          answerText:
            "proliferação celular exagerada, resultando na formação de um tumor.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "Um estudante relatou que o mapeamento do DNA da cevada foi quase todo concluído e seu código genético desvendado. Chamou a atenção para o número de genes que compõem esse código genético e que a semente da cevada, apesar de pequena, possui um genoma mais complexo que o humano, sendo boa parte desse código constituída de sequências repetidas. Nesse contexto, o conceito de código genético está abordado de forma equivocada. Cientificamente esse conceito é definido como:",
      answerOptions: [
        {
          answerText: "trincas de nucleotídeos que codificam os aminoácidos",
          isCorrect: true
        },
        {
          answerText: "localização de todos os genes encontrados em um genoma.",
          isCorrect: false
        },
        {
          answerText:
            "codificação de sequências repetidas presentes em um genoma",
          isCorrect: false
        },
        {
          answerText:
            "conjunto de todos os RNAs mensageiros transcritos em um organismo",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "A distrofia muscular Duchenne (DMD) é uma doença causada por uma mutação em um gene localizado no cromossomo X. Pesquisadores estudaram uma família na qual gêmeas monozigóticas eram portadoras de um alelo mutante recessivo para esse gene (heterozigóticas). O interessante é que uma das gêmeas apresentava o fenótipo relacionado ao alelo mutante, isto é, DMD, enquanto a sua irmã apresentava fenótipo normal. A diferença na manifestação da DMD entre as gêmeas pode ser explicada pela:",
      answerOptions: [
        {
          answerText:
            "dominância incompleta do alelo mutante em relação ao alelo normal.",
          isCorrect: false
        },
        {
          answerText:
            "falha na separação dos cromossomos X no momento da separação dos dois embriões.",
          isCorrect: false
        },
        {
          answerText:
            "recombinação cromossômica em uma divisão celular embrionária anterior à separação dos dois embriões.",
          isCorrect: false
        },
        {
          answerText:
            "inativação aleatória de um dos cromossomos X em fase posterior à divisão que resulta nos dois embriões.",
          isCorrect: true
        }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length} questões
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <p />
      <Button as={Link} to="/">
        {" "}
        Sair{" "}
      </Button>
    </div>
  );
}
