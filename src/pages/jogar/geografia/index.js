import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles.css";

export default function Index() {
  const questions = [
    {
      questionText:
        "(UEA) Desde, no mínimo, o início dos anos 1960, a disponibilidade calórica mundial é mais que suficiente para alimentar, de maneira correta, todos os habitantes do globo. Hoje, a produção per capita é 18% superior a seu nível de 30 anos atrás. As informações apresentadas pelo excerto constroem um cenário diferente daquele imaginado pela teoria demográfica denominada:",
      answerOptions: [
        { answerText: "a) Reformista.", isCorrect: false },
        { answerText: "b) Neomalthusiana.", isCorrect: false },
        { answerText: "c) Malthusiana.", isCorrect: true },
        { answerText: "d) Natalista.", isCorrect: false }
      ]
    },
    {
      questionText:
        "(Unitau) Suponha um país com uma pirâmide etária de base larga e topo afunilado, assemelhando-se a um triângulo, apresentando sete a oito camadas de crescimento populacional. Sobre esse país, é possível afirmar que:",
      answerOptions: [
        {
          answerText: "a) apresenta uma alta expectativa de vida.",
          isCorrect: false
        },
        {
          answerText: "b) apresenta uma alta taxa de natalidade.",
          isCorrect: true
        },
        {
          answerText: "c) apresenta uma alta taxa de mortalidade infantil.",
          isCorrect: false
        },
        {
          answerText: "d) essa pirâmide é típica de países desenvolvidos.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem 2014) O uso intenso das águas subterrâneas sem planejamento tem causado sérios prejuízos à sociedade, ao usuário e ao meio ambiente. Em várias partes do mundo, percebe-se que a exploração de forma incorreta tem levado a perdas do próprio aquífero. No texto, apontam-se dificuldades associadas ao uso de um importante recurso natural. Um problema derivado de sua utilização e uma respectiva causa para sua ocorrência são:",
      answerOptions: [
        {
          answerText:
            "a) Contaminação do aquífero — Contenção imprópria do ingresso direto de água superficial.",
          isCorrect: true
        },
        {
          answerText:
            "b) Intrusão salina — Extração reduzida da água doce do subsolo.",
          isCorrect: false
        },
        {
          answerText:
            "c) Superexploração de poços — Construção ineficaz de captações subsuperficiais.",
          isCorrect: false
        },
        {
          answerText:
            "d) Rebaixamento do nível da água — Bombeamento do poço equivalente à reposição natural.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem 2019) A pegada ecológica gigante que estamos a deixar no planeta está a transformá-lo de tal forma que os especialistas consideram que já entramos numa nova época geológica, o Antropoceno. E muitos defendem que, se não travarmos a crise ambiental, mais rapidamente transformaremos a Terra em Vênus do que iremos a Marte. A expressão “Antropoceno” é atribuída ao químico e prêmio Nobel Paul Crutzen, que a propôs durante uma conferência em 2000, ao mesmo tempo que anunciou o fim do Holoceno — a época geológica em que os seres humanos se encontram há cerca de 12 mil anos, segundo a União Internacional das Ciências Geológicas (UICG), a entidade que define as unidades de tempo geológicas.",
      answerOptions: [
        { answerText: "a) eruptivos.", isCorrect: false },
        { answerText: "b) exógenos.", isCorrect: true },
        { answerText: "c) tectônicos.", isCorrect: false },
        { answerText: "d) magmáticos.", isCorrect: false }
      ]
    },
    {
      questionText:
        "A formação de blocos econômicos tem como principal objetivo a maximização das relações comerciais entre os países integrantes. Nesse sentido, os países da América do Norte formaram um dos blocos econômicos mais importantes do planeta. Marque a alternativa que corresponde a esse bloco econômico.",
      answerOptions: [
        { answerText: "a) Mercosul", isCorrect: false },
        { answerText: "b) Apec", isCorrect: false },
        { answerText: "c) União Europeia", isCorrect: false },
        { answerText: "d) Nafta", isCorrect: true }
      ]
    },
    {
      questionText:
        "A América do Norte é uma subdivisão do continente americano, sendo formada pelos países do México, Canadá e Estados Unidos. No entanto, outros dois territórios pertencentes a países europeus estão localizados nessa porção da América. Marque a alternativa que corresponde aos dois territórios localizados na América do Norte.",
      answerOptions: [
        { answerText: "a) Groelândia e Malvinas", isCorrect: false },
        { answerText: "b) Groelândia e Santa Helena", isCorrect: false },
        { answerText: "c) Bermudas e Groelândia", isCorrect: true },
        { answerText: "d) Bermudas e Alasca", isCorrect: false }
      ]
    },

    {
      questionText:
        "(PUC-PR) A industrialização europeia teve como base energética o uso do carvão mineral. Até hoje, mesmo com a ampliação do uso de petróleo, da energia hidrelétrica e das usinas nucleares, o carvão permanece como importante fonte energética, principalmente, nos países da Europa Oriental. Ocorre, porém, que a queima do carvão mineral, em grandes quantidades, pode provocar o aumento do volume do dióxido de enxofre na atmosfera e, com isso, o fenômeno:",
      answerOptions: [
        { answerText: "a) da chuva ácida.", isCorrect: true },
        { answerText: "b) do vento geotrópico.", isCorrect: false },
        { answerText: "c) da rarefação do ar.", isCorrect: false },
        { answerText: "d) d) desertificação.", isCorrect: false }
      ]
    },
    {
      questionText:
        "(UEG) A água da chuva é normalmente ácida. Porém a presença de poluentes no ar atmosférico (ácido sulfúrico, ácido clorídrico, trióxido de enxofre, dióxido de nitrogênio) torna a água da chuva mais ácida ainda. Sobre esse fenômeno, é INCORRETO afirmar:",
      answerOptions: [
        {
          answerText:
            "a) As áreas mais afetadas pelas chuvas ácidas estão no Hemisfério Norte, principalmente nos Estados Unidos, no Canadá e nos países europeus.",
          isCorrect: false
        },
        {
          answerText:
            "b) As indústrias na Alemanha, no Reino Unido e na França emitem grande quantidade de poluentes contribuindo para acidificar os lagos da Escandinávia.",
          isCorrect: false
        },
        {
          answerText:
            "c) No Brasil, esse fenômeno não ocorre de forma significativa em função do recente processo de industrialização e da desconcentração industrial.",
          isCorrect: true
        },
        {
          answerText:
            "d) As chuvas ácidas causam impactos também na cobertura vegetal; algumas florestas não estão resistindo a essa agressão, como é o caso da Floresta Negra.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "“As Nações Unidas, sendo uma organização internacional de caráter universalista, com um número muito grande de estados-membros, tenta equilibrar na sua estrutura o peso das grandes potências com o princípio da maioria. Por esse motivo, sua estrutura é chamada de bicéfala, contendo duas câmaras principais com poderes distintos”. As duas câmaras principais mencionadas pelo texto são:",
      answerOptions: [
        {
          answerText: "a) o Conselho de Segurança e a Assembleia Geral",
          isCorrect: true
        },
        {
          answerText:
            "b) o Secretariado das Nações Unidas e a Instância dos Países-membrosa",
          isCorrect: false
        },
        {
          answerText:
            "c) a Corte Internacional de Justiça e o Conselho de Segurança",
          isCorrect: false
        },
        {
          answerText: "d) a Assembleia Geral e o Conselho Econômico Social",
          isCorrect: false
        }
      ]
    },
    {
      questionText: "Entende-se por Conurbação:",
      answerOptions: [
        {
          answerText:
            "a) A expansão vertical das cidades, ocasionando problemas ambientais referentes à circulação do ar (ilhas de calor);",
          isCorrect: false
        },
        {
          answerText:
            "b) O encontro de duas ou mais cidades, formando grandes aglomerados urbanos intermunicipais;",
          isCorrect: true
        },
        {
          answerText:
            "c) problemas gerados pela grande população sem moradia nas cidades;",
          isCorrect: false
        },
        {
          answerText:
            "d) problemas urbanos referentes à ineficácia dos transportes públicos;",
          isCorrect: false
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
