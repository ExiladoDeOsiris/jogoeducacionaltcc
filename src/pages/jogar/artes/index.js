import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles.css";

export default function Index() {
  const questions = [
    {
      questionText:
        "TEXTO1 A body art põe o corpo tão em evidência e o submete a experimentações tão variadas, que sua influência estende-se aos dias de hoje. Se na arte atual as possibilidades de investigação do corpo parecem ilimitadas - pode-se escolher entre representar, apresentar, ou ainda apenas evocar o corpo - isso ocorre graças ao legado dos artistas pioneiros. No texto, a concepção de body art está relacionada à intenção de: ",
      answerOptions: [
        {
          answerText: " estabelecer limites entre o corpo e a composição.",
          isCorrect: false
        },
        {
          answerText: "compreender a autonomia do corpo no contexto da obra",
          isCorrect: false
        },
        {
          answerText:
            "discutir políticas e ideologias sobre o corpo como arte.",
          isCorrect: false
        },
        {
          answerText: "fazer do corpo um suporte privilegiado de expressão.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "O grupo O Teatro Mágico apresenta composições autorais que têm referências estéticas do rock, do pop e da música folclórica brasileira. A originalidade dos seus shows tem relação com a ópera europeia do século XIX a partir da:",
      answerOptions: [
        {
          answerText: "sobreposição entre música e texto literário.",
          isCorrect: false
        },
        {
          answerText: "integração de diversas linguagens artísticas.",
          isCorrect: true
        },
        {
          answerText: "disposição cênica dos artistas no espaço teatral",
          isCorrect: false
        },
        {
          answerText: "adoção de um enredo como fio condutor.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "TEXTO 1 Stephen Lund, artista canadense, morador em Victoria, capital da Colúmbia Britânica (Canadá), transformou-se em fenômeno mundial produzindo obras de arte virtuais pedalando sua bike. Seguindo rotas traçadas com o auxílio de um dispositivo de GPS, ele calcula ter percorrido mais de 10 mil quilômetros.O texto destacam a inovação artística proposta por Stephen Lund a partir do(a):",
      answerOptions: [
        {
          answerText: "deslocamento das tecnologias de suas funções habituais.",
          isCorrect: true
        },
        {
          answerText: " perspectiva de funcionamento do dispositivo de GPS",
          isCorrect: false
        },
        {
          answerText: "ato de guiar sua bicicleta pelas ruas da cidade.",
          isCorrect: false
        },
        {
          answerText: "foco na promoção cultural da sua cidade",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "TEXTO 1 Ao ser questionado sobre seu processo de criação de ready-mades, Marcel Duchamp afirmou:  — Isto dependia do objeto; em geral, era preciso tomar cuidado com o seu look . É muito difícil escolher um objeto porque depois de quinze dias você começa a gostar dele ou a detestá-lo. É preciso chegar a qualquer coisa com uma indiferença tal que você não tenha nenhuma emoção estética. A escolha do ready-made é sempre baseada na indiferença visual e, ao mesmo tempo, numa ausência total de bom ou mau gosto. O texto entende-se que o artista Marcel Duchamp, ao criar os ready-mades, inaugurou um modo de fazer arte que consiste em:",
      answerOptions: [
        {
          answerText:
            " designar ao artista de vanguarda a tarefa de ser o artificie do século XX.",
          isCorrect: false
        },
        {
          answerText:
            " considerar a forma dos objetos como elemento essencial da obra de arte",
          isCorrect: false
        },
        {
          answerText:
            "revitalizar de maneira radical o conceito clássico do belo na arte.",
          isCorrect: false
        },
        {
          answerText:
            " criticar os princípios que determinam o que é uma obra de arte.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "Em 1956, o artista Flávio de Resende Carvalho desfilou pela Avenida Paulista com o traje New Look uma proposta tropical para o guarda-roupa masculino. Suas obras mais conhecidas são relacionadas às performances. A imagem permite relacionar como características dessa manifestação artística o uso:",
      answerOptions: [
        { answerText: "do corpo, da provocação e da moda.", isCorrect: true },
        {
          answerText: "da intimidade, da política e do corpo.",
          isCorrect: false
        },
        {
          answerText: "do espaço urbano, da intimidade e do drama.",
          isCorrect: false
        },
        { answerText: "do público, da ironia e da dor.", isCorrect: false }
      ]
    },
    {
      questionText:
        "TEXTO 1 SpetoPaulo César Silva, mais conhecido como Speto, é um grafiteiro paulista envolvido com o skate e a música. O fortalecimento de sua arte ocorreu, em 1999, pela oportunidade de ver de perto as referências que trazia há tempos, ao passar por diversas cidades do Norte do Brasil em uma turnê com a banda O Rappa. ",
      answerOptions: [
        {
          answerText: " nos traços marcados pela xilogravura nordestina.",
          isCorrect: true
        },
        {
          answerText: "na influência da expressão abstrata.",
          isCorrect: false
        },
        {
          answerText: " na representação de lendas nacionais",
          isCorrect: false
        },
        {
          answerText: "nos usos característicos de grafismos dos skates.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem - 2019)Para que a passagem da produção ininterrupta de novidade a seu consumo seja feita continuamente, há necessidade de mecanismos, de engrenagens.  seja feita continuamente, há necessidade de mecanismos, de engrenagens. Uma espécie de grande máquina industrial, incitante, tentacular, entra em ação. Mas bem depressa a simples lei da oferta e da procura segundo as necessidades não vale mais: é preciso excitar a demanda, excitar o acontecimento, provocá-lo, espicaçá-lo, fabricá-lo, pois a modernidade se alimenta disso. No contexto da arte contemporânea, o texto da autora Anne Cauquelin reflete ações que explicitam: ",
      answerOptions: [
        {
          answerText: "investimentos realizados por mecenas.",
          isCorrect: false
        },
        {
          answerText: "métodos utilizados pelo mercado de arte.",
          isCorrect: true
        },
        { answerText: "interesses do consumidor de arte.", isCorrect: false },
        { answerText: "fomentos públicos à cultura.", isCorrect: false }
      ]
    },
    {
      questionText:
        "Na exposição “A Artista Está Presente”, no MoMa, em Nova Iorque, a performer Marina Abramovic fez uma retrospectiva de sua carreira. No meio desta, protagonizou uma performance marcante. Em 2010, de 14 de março a 31 de maio, seis dias por semana, num total de 736 horas, ela repetia a mesma postura. Sentada numa sala, recebia os visitantes, um a um, e trocava com cada um deles um longo olhar sem palavras. Ao redor, o público assistia a essas cenas recorrentes. O texto apresenta uma obra da artista Marina Abramovic, cuja performance se alinha a tendências contemporâneas e se caracteriza pela:",
      answerOptions: [
        {
          answerText:
            " inovação de uma proposta de arte relacional que adentra um museu.",
          isCorrect: false
        },
        {
          answerText:
            "Negociação colaborativa de sentidos entre a artista e a pessoa com quem interage",
          isCorrect: true
        },
        {
          answerText:
            "abordagem educacional estabelecida na relação da artista com o público.",
          isCorrect: false
        },
        {
          answerText:
            "redistribuição do espaço do museu, que integra diversas linguagens artísticas.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "TEXTO1 Stephen Lund, artista canadense, morador em Victoria, capital da Colúmbia Britânica (Canadá), transformou-se em fenômeno mundial produzindo obras de arte virtuais pedalando sua bike. Seguindo rotas traçadas com o auxílio de um dispositivo de GPS, ele calcula ter percorrido mais de 10 mil quilômetros. O texto destacam a inovação artística proposta por Stephen Lund a partir do(a):",
      answerOptions: [
        {
          answerText: "perspectiva de funcionamento do dispositivo de GPS",
          isCorrect: false
        },
        {
          answerText: "deslocamento das tecnologias de suas funções habituais",
          isCorrect: true
        },
        {
          answerText: "ato de guiar sua bicicleta pelas ruas da cidade",
          isCorrect: false
        },
        {
          answerText: "análise dos problemas de mobilidade urbana.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "Também chamados impressões ou imagens fotogramáticas […], os fotogramas são, numa definição genérica, imagens realizadas sem a utilização da câmera fotográfica, por contato direto de um objeto ou material com uma superfície fotossensível exposta a uma fonte de luz. Essa técnica, que nasceu junto com a fotografia e serviu de modelo a muitas discussões sobre a ontologia da imagem fotográfica, foi profundamente transformada pelos artistas da vanguarda, nas primeiras décadas do século XX. Representou mesmo, ao lado das colagens, fotomontagens e outros procedimentos técnicos, a incorporação definitiva da fotografa à arte moderna e seu distanciamento da representação figurativa. No fotograma de Man Ray, o “distanciamento da representação figurativa” a que se refere o Texto I manifesta-se na:",
      answerOptions: [
        {
          answerText:
            "ressignificação do jogo de luz e sombra, nos moldes surrealistas.",
          isCorrect: false
        },
        {
          answerText:
            "composição experimental, fragmentada e de contornos difusos.",
          isCorrect: true
        },
        {
          answerText:
            "abstração radical, voltada para a própria linguagem fotográfica",
          isCorrect: false
        },
        {
          answerText:
            "imitação de formas humanas, com base em diferentes objetos.",
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
