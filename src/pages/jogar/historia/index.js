import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles.css";

export default function Index() {
  const questions = [
    {
      questionText:
        "(Enem/2013) É preciso ressaltar que, de todas as capitanias brasileiras, Minas era a mais urbanizada. Não havia ali hegemonia de um ou dois grandes centros. A região era repleta de vilas e arraiais, grandes e pequenos, em cujas ruas muita gente circulava. PAIVA, E. F. O ouro e as transformações na sociedade colonial. São Paulo: Atual, 1998. As regiões da América portuguesa tiveram distintas lógicas de ocupação. Uma explicação para a especificidade da região descrita no texto está identificada na:",
      answerOptions: [
        {
          answerText: "Apropriação cultural diante das influências externas.",
          isCorrect: false
        },
        {
          answerText: "Produção manufatureira diante do exclusivo comercial.",
          isCorrect: false
        },
        {
          answerText:
            "Insubordinação religiosa diante da hierarquia eclesiástica.",
          isCorrect: false
        },
        {
          answerText:
            "Fiscalização estatal diante das particularidades econômicas.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "(Enem/2016) No aniversário do primeiro decênio da Marcha sobre Roma, em outubro de 1932, Mussolini irá inaugurar sua Via dell Impero; a nova Via Sacra do Fascismo, ornada com estátuas de César, Augusto, Trajano, servirá ao culto do antigo e à glória do Império Romano e de espaço comemorativo do ufanismo italiano. Às sombras do passado recriado ergue-se a nova Roma, que pode vangloriar-se e celebrar seus imperadores e homens fortes; seus grandes poetas e apólogos como Horácio e Virgílio.",
      answerOptions: [
        {
          answerText:
            "Afirmar o ideário cristão para reconquistar a grandeza perdida.",
          isCorrect: false
        },
        {
          answerText:
            "Utilizar os vestígios restaurados para justificar o regime político.",
          isCorrect: true
        },
        {
          answerText:
            "Difundir os saberes ancestrais para moralizar os costumes sociais.",
          isCorrect: false
        },
        {
          answerText:
            "Refazer o urbanismo clássico para favorecer a participação política.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2016) É hoje a nossa festa nacional. O Brasil inteiro, da capital do Império à mais remota e insignificante de suas aldeolas, congrega-se unânime para comemorar o dia que o tirou dentre as nações dependentes para colocá-lo entre as nações soberanas, e entregou-lhes seus destinos, que até então haviam ficado a cargo de um povo estranho. Gazeta de Notícias, 7 set.1883. As festividades em torno da Independência do Brasil marcam o nosso calendário desde os anos imediatamente posteriores ao de setembro de 1822. Essa comemoração está diretamente relacionada com:",
      answerOptions: [
        {
          answerText:
            "a construção e manutenção de símbolos para a formação de uma identidade nacional.",
          isCorrect: true
        },
        {
          answerText:
            "o domínio da elite brasileira sobre os principais cargos políticos, que se efetivou logo após 1822.",
          isCorrect: false
        },
        {
          answerText:
            "os interesses de senhores de terras que, após a Independência, exigiram a abolição da escravidão.",
          isCorrect: false
        },
        {
          answerText:
            "o apoio popular às medidas tomadas pelo governo imperial para a expulsão de estrangeiros do país.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2010) Para o Paraguai, portanto, essa foi uma guerra pela sobrevivência. De todo modo, uma guerra contra dois gigantes estava fadada a ser um teste debilitante e severo para uma economia de base tão estreita. Lopez precisava de uma vitória rápida e, se não conseguisse vencer rapidamente, provavelmente não venceria nunca. LYNCH, J. As Repúblicas do Prata: da Independência à Guerra do Paraguai. BETHELL, Leslie (Org). História da América Latina: da Independência até 1870, v. III. São Paulo: Edusp , 2004. A Guerra do Paraguai teve consequências políticas importantes para o Brasil, pois:",
      answerOptions: [
        {
          answerText:
            "representou a afirmação do Exército Brasileiro como um ator político de primeira ordem.",
          isCorrect: true
        },
        {
          answerText:
            "confirmou a conquista da hegemonia brasileira sobre a Bacia Platina.",
          isCorrect: false
        },
        {
          answerText: "concretizou a emancipação dos escravos negros.",
          isCorrect: false
        },
        {
          answerText:
            "incentivou a adoção de um regime constitucional monárquico.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2011) Se a mania de fechar, verdadeiro habitus(tendências que organizam as formas pelas quais os indivíduos percebem o mundo social ao seu redor e a ele reagem) da mentalidade medieval nascido talvez de um profundo sentimento de insegurança, estava difundida no mundo rural, estava do mesmo modo no meio urbano, pois que uma das características da cidade era de ser limitada por portas e por uma muralha. DUBY, G. et al. “Séculos XIV-XV”. In: ARIÈS, P.; DUBY, G. História da vida privada da Europa Feudal à Renascença. São Paulo: Cia. das Letras, 1990 (adaptado). As práticas e os usos das muralhas sofreram importantes mudanças no final da Idade Média, quando elas assumiram a função de pontos de passagem ou pórticos. Este processo está diretamente relacionado com:",
      answerOptions: [
        {
          answerText: "o crescimento das atividades comerciais e urbanas.",
          isCorrect: true
        },
        {
          answerText: "a migração de camponeses e artesãos.",
          isCorrect: false
        },
        {
          answerText: "a expansão dos parques industriais e fabris.",
          isCorrect: false
        },
        {
          answerText: "o aumento do número de castelos e feudos.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2016) A Lei das Doze Tábuas, de meados do século V a.C., fixou por escrito um velho direito costumeiro. No relativo às dívidas não pagas, o código permitia, em última análise, matar o devedor; ou vendê-lo como escravo “do outro lado do Tibre” — isto é, fora do território de Roma. CARDOSO, C. F. S. O trabalho compulsório na Antiguidade. Rio de Janeiro: Graal, 1984. A referida lei foi um marco na luta por direitos na Roma Antiga, pois possibilitou que os plebeus:",
      answerOptions: [
        {
          answerText:
            "modificassem a estrutura agrária assentada no latifúndio.",
          isCorrect: false
        },
        {
          answerText:
            "conquistassem a possibilidade de casamento com os patrícios.",
          isCorrect: false
        },
        {
          answerText:
            "ampliassem a participação política nos cargos políticos públicos.",
          isCorrect: false
        },
        {
          answerText:
            "reivindicassem as mudanças sociais com base no conhecimento das leis.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "(Enem/2012) É verdade que nas democracias o povo parece fazer o que quer; mas a liberdade política não consiste nisso. Deve-se ter sempre presente em mente o que é independência e o que é liberdade. A liberdade é o direito de fazer tudo o que as leis permitem; se um cidadão pudesse fazer tudo o que elas proíbem, não teria mais liberdade, porque os outros também teriam tal poder. MONTESQUIEU. Do Espírito das Leis. São Paulo: Editora Nova Cultural, 1997 (adaptado). A característica de democracia ressaltada por Montesquieu diz respeito:",
      answerOptions: [
        {
          answerText:
            "ao status de cidadania que o indivíduo adquire ao tomar as decisões por si mesmo.",
          isCorrect: false
        },
        {
          answerText:
            "ao condicionamento da liberdade dos cidadãos à conformidade às leis.",
          isCorrect: true
        },
        {
          answerText:
            "à possibilidade de o cidadão participar no poder e, nesse caso, livre da submissão às leis.",
          isCorrect: false
        },
        {
          answerText:
            "ao livre-arbítrio do cidadão em relação àquilo que é proibido, desde que ciente das consequências.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2014) As relações do Estado brasileiro com o movimento operário e sindical, bem como as políticas públicas voltadas para as questões sociais durante o primeiro governo da Era Vargas (1930-1945), são temas amplamente estudados pela academia brasileira em seus vários aspectos. São também os temas mais lembrados pela sociedade quando se pensa no legado varguista. D'ARAUJO M. C. Estado, classe trabalhadora e políticas sociais. In: FERREIRA J.; DELGADO L. A. (Org.). O tempo do nacional-estatismo: Do início ao apogeu do Estado Novo. Rio de Janeiro: Civilização Brasileira, 2007. Durante o governo de Getúlio Vargas, foram desenvolvidas ações de cunho social, dentre as quais se destaca a:",
      answerOptions: [
        {
          answerText:
            "disseminação de organizações paramilitares inspiradas nos regimes fascistas europeus.",
          isCorrect: false
        },
        {
          answerText:
            "aprovação de normas que buscavam garantir a posse das terras aos pequenos agricultores.",
          isCorrect: false
        },
        {
          answerText:
            "criação de um conjunto de leis trabalhistas associadas ao controle das representações sindicais.",
          isCorrect: true
        },
        {
          answerText:
            "implementação de um sistema de previdência e seguridade para atender aos trabalhadores rurais.",
          isCorrect: false
        }
      ]
    },
    {
      questionText:
        "(Enem/2010) A Inglaterra pedia lucros e recebia lucros. Tudo se transformava em lucro. As cidades tinham sua sujeira lucrativa, suas favelas lucrativas, sua fumaça lucrativa, sua desordem lucrativa, sua ignorância lucrativa, seu desespero lucrativo. As novas fábricas e os novos altos-fornos eram como as Pirâmides, mostrando mais a escravização do homem que seu poder. DEANE. P. A Revolução Industrial. Rio de Janeiro: Zahar, 1979 (adaptado). Qual relação é estabelecida no texto entre os avanços tecnológicos ocorridos no contexto da Revolução Industrial Inglesa e as características das cidades industriais no início do século XIX?",
      answerOptions: [
        {
          answerText:
            "A facilidade em se estabelecer relações lucrativas transformava as cidades em espaços privilegiados para a livre iniciativa, característica da nova sociedade capitalista.",
          isCorrect: false
        },
        {
          answerText:
            "O desenvolvimento de métodos de planejamento urbano aumentava a eficiência do trabalho industrial",
          isCorrect: false
        },
        {
          answerText:
            "A construção de núcleos urbanos integrados por meios de transporte facilitava o deslocamento dos trabalhadores das periferias até as fábricas.",
          isCorrect: false
        },
        {
          answerText:
            "O alto nível de exploração dos trabalhadores industriais ocasionava o surgimento de aglomerados urbanos marcados por péssimas condições de moradia, saúde e higiene.",
          isCorrect: true
        }
      ]
    },
    {
      questionText:
        "(Enem/2011) Acompanhando a intenção da burguesia renascentista de ampliar seu domínio sobre a natureza e sobre o espaço geográfico, através da pesquisa científica e da invenção tecnológica, os cientistas também iriam se atirar nessa aventura, tentando conquistar a forma, o movimento, o espaço, a luz, a cor e mesmo a expressão e o sentimento. (SEVCENKO, N. O Renascimento, Campinas, Unicamp, 1984). O texto apresenta um espírito de época que afetou também a produção artística, marcada pela constante relação entre:",
      answerOptions: [
        { answerText: "fé e misticismo.", isCorrect: false },
        { answerText: "ciência e arte.", isCorrect: true },
        { answerText: "cultura e comércio.", isCorrect: false },
        { answerText: "política e economia.", isCorrect: false }
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
