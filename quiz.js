const quiz =
    document.getElementById("travelQuiz");

const result =
    document.getElementById("quizResult");


if (quiz) {

    quiz.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const answers =
                [...new FormData(quiz).values()];


            /* VERIFICA SE RESPONDEU TUDO */

            if (answers.length < 3) {

                result.hidden = false;

                result.innerHTML = `

                    <h2>
                        Ops! 😅
                    </h2>

                    <p>
                        Responda todas as perguntas
                        antes de descobrir seu resultado.
                    </p>

                `;

                return;
            }


            /* CONTAGEM */

            const points = {

                praia: 0,

                natureza: 0,

                cidade: 0

            };


            answers.forEach(answer => {

                points[answer]++;

            });


            /* DESCOBRE O MAIOR */

            const winner =
                Object.keys(points)
                    .sort(
                        (a, b) =>
                            points[b] - points[a]
                    )[0];


            /* RESULTADOS */

            const destinations = {

                praia: {

                    title:
                        "Seu estilo é 🌊 PRAIA!",

                    place:
                        "Fernando de Noronha",

                    text:
                        "Você combina com lugares tranquilos, mar, paisagens tropicais e muita natureza."

                },


                natureza: {

                    title:
                        "Seu estilo é 🌿 AVENTURA!",

                    place:
                        "Foz do Iguaçu",

                    text:
                        "Você parece gostar de explorar, fazer descobertas e ficar perto de paisagens naturais."

                },


                cidade: {

                    title:
                        "Seu estilo é 🏙️ CULTURA!",

                    place:
                        "Rio de Janeiro",

                    text:
                        "Você combina com cidades cheias de cultura, paisagens, atrações e movimento."

                }

            };


            const data =
                destinations[winner];


            /* MOSTRA RESULTADO */

            result.hidden = false;


            result.innerHTML = `

                <h2>
                    ${data.title}
                </h2>

                <p>
                    <strong>
                        Destino sugerido:
                        ${data.place}
                    </strong>
                </p>

                <p>
                    ${data.text}
                </p>

            `;


            result.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }
    );

}
