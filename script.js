// =========================
// CONFIGURACIÓN
// =========================

const carta = `HOLA MAMOR ❤️

Con tu sonrisa llegaste a iluminar momentos que antes parecían normales, convirtiendo pequeños instantes en recuerdos que ahora guardo con mucho cariño dentro de mi corazón.

A tu lado he descubierto que el amor también vive en los detalles más sencillos, en una conversación, una mirada, una risa y en cada momento que puedo compartir contigo.

Nunca imaginé encontrar a una persona que pudiera traer tanta tranquilidad y alegría a mi vida, pero llegaste tú, con tu forma única de ser y con esa manera tan especial de hacerme feliz.

Desde que formas parte de mi historia, mis días tienen un motivo más para sonreír, porque sé que tengo a alguien con quien compartir sueños, momentos y nuevos caminos por recorrer.

Y eres esa persona especial que mi corazón eligió, alguien que admiro, valoro y quiero cuidar, porque entre tantas personas en este mundo tuve la fortuna de encontrarte a ti, Candy.

Candy, tu nombre se volvió una de mis palabras favoritas, no solamente por cómo suena, sino por todo lo que representa: una persona que llegó a mi vida para dejar huellas bonitas, momentos inolvidables y un cariño que deseo seguir construyendo cada día contigo.
🌹❤️`;

//==========================

const intro = document.getElementById("intro");
const roseContainer = document.getElementById("roseContainer");
const letterContainer = document.getElementById("letterContainer");
const typing = document.getElementById("typing");
const stars = document.getElementById("stars");

//==========================

// Crear estrellas

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.style.position="absolute";

    star.style.width="2px";

    star.style.height="2px";

    star.style.background="white";

    star.style.borderRadius="50%";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.opacity=Math.random();

    star.style.animation="twinkle "+(2+Math.random()*5)+"s infinite";

    stars.appendChild(star);

}

//==========================

document.body.addEventListener("click", iniciar, {once:true});

//==========================

function iniciar(){

    intro.style.display="none";

    lluviaPetalos();

    formarRamo();

}

//==========================

function lluviaPetalos(){

    setInterval(()=>{

        const p=document.createElement("div");

        p.innerHTML="🌸";

        p.style.position="absolute";

        p.style.left=Math.random()*100+"vw";

        p.style.top="-50px";

        p.style.fontSize=(20+Math.random()*30)+"px";

        p.style.animation="caer "+(5+Math.random()*4)+"s linear";

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },9000);

    },120);

}

//==========================

function formarRamo(){

    let total=30;

    let actual=0;

    let texto="";

    const crear=setInterval(()=>{

        texto+="🌹 ";

        roseContainer.innerHTML=texto;

        actual++;

        if(actual>=total){

            clearInterval(crear);

            setTimeout(mostrarCarta,2000);

        }

    },180);

}

//==========================

function mostrarCarta(){

    letterContainer.style.display="block";

    escribir();

}

//==========================

function escribir(){

    let i=0;

    const efecto=setInterval(()=>{

        typing.innerHTML+=carta.charAt(i);

        i++;

        if(i>=carta.length){

            clearInterval(efecto);

        }

    },40);

}