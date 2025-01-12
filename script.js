const speed = 0; // Velocidad de escritura

// Función para escribir texto con efecto de máquina de escribir
function typeWriter(text, elementId, callback) {
    let i = 0;
    function writeChar() {
        if (i < text.length) {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(writeChar, speed);
            } else {
                callback();
            }
        } else if (callback) {
            callback();
        }
    }
    writeChar();
}

function showNextPage() {
    const text = "Te quería felicitar por ser tu cumpleaños, eres una chica muy linda y agradable. No te puedo dar un regalo con mi dinero porque lamentablemente no tengo, y no puedo conseguir porque estoy ayudando en mi casa a trabajar, así que te hice una página de regalo jejeje.";
    document.getElementById('text1').style.display = 'block';
    typeWriter(text, "textContent1", () => {
        document.getElementById("button1").style.display = "block";
    });
}

function showMoreText() {
    // Oculta la sección anterior
    document.getElementById('text1').style.display = 'none';

    const text2 = "El hecho de que no te dé un regalo físico o con dinero no significa que no te quiera, solo que no tengo el dinero. Aun así, te hago esto para intentar darte a entender que te amo mucho.";
    const text3 = "Hay muchas cosas que quisiera decirte. Tú eres una niña muy bonita y amable conmigo. Haces que estar contigo sea muy agradable y me siento muy cómodo cuando te abrazo. Haces que cada momento contigo valga la pena, incluso cuando estoy en momentos de tiempo limitado puedo aguantar uno que otro regaño solo por verte más tiempo.";

    document.getElementById('text2').style.display = 'block';
    typeWriter(text2, "textContent2", () => {
        typeWriter(text3, "textContent3", () => {
            document.getElementById("button2").style.display = "block";
        });
    });
}

function showFinalText() {
    // Oculta la sección anterior
    document.getElementById('text2').style.display = 'none';

    const text4 = "Desde mucho antes de que te me declararas, ya me gustabas. Siempre hubo algo en ti que me hacía pensar en lo especial que eres. Sé que las cosas no siempre salen como uno espera, y aunque tal vez no sea el mejor chico que podrías tener, quiero que me des la oportunidad de intentar una relación contigo.";
    const text5 = "La verdad, me da miedo empezar una relación, las experiencias pasadas me dejaron traumitas jeje. Pero contigo, siento que vale la pena arriesgarme. Quiero apostar por algo bonito, algo que podamos construir juntos. ¿Me darías la oportunidad de ser tu novio y descubrir juntos qué tan lejos podemos llegar?";

    document.getElementById('text3').style.display = 'block';
    typeWriter(text4, "textContent4", () => {
        typeWriter(text5, "textContent5", () => {
            document.getElementById("button3").style.display = "block";
        });
    });
}

function goToQuestion() {
    window.location.href = "pregunta.html";
}

// Iniciar el texto al cargar la página
window.onload = showNextPage;
