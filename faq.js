const playBtn = document.getElementById('play-btn');
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const trackListItems = document.querySelectorAll('.track-list li');
let currentIndex = 0;
const languageContent = {
    es: {
        AboutUs: "Sobre Nosotros",
        FaqContact: "FAQ/Contacto",
        demo: "Demostración",
        title1: "De qué se trata el juego?",
        title2: "¿Será gratis?",
        title3: "¿Qué incluye la versión gratuita?",
        title4: "¿Qué ventajas tiene la versión de pago?",
        par1: "Este juego RPG por turnos presenta un estilo visual retro en pixel art, transportando a los jugadores aun mundo de fantasía lleno de detalles coloridos y nostálgicos. El protagonista es un joven héroe o heroína que ha heredado los antiguos poderes del Sol y la Luna,capaces de manipular la luz y la oscuridad en perfecta armonía.",
        par2: "No, el juego no será completamente gratuito.Sin embargo, hemos diseñado una versión gratuita que permitirá a los jugadores experimentar una parte significativa del juego sin costo alguno.Esta versión gratuita incluirá acceso a las funciones básicas del juego, como los primeros mapas,algunos modos de juego y una selección limitada de personajes o elementos.",
        par3: "La idea detrás de ofrecer esta versión gratuita es que todos puedan probar el juego antes de decidir si quieren adquirir la versión completa. Queremos asegurarnos de que todos los jugadores puedan tener una experiencia gratificante y entender bien de qué se trata el juego antes de hacer cualquier inversión.",
        par4: "La versión gratuita del juego permitirá a los jugadores:",
        par5: "Aquellos que adquieran la versión de pago tendrán acceso a",
        par6: "Nuestro objetivo es ofrecer una experiencia equilibrada para ambos tipos de jugadores.Aunque la versión gratuita será más limitada, estamos convencidos de que será lo suficientemente completa como para dar una idea clara del potencial del juego. La versión completa, por su parte, está diseñada para quienes quieran sumergirse por completo en la aventura y disfrutar del juego en su totalidad sin limitaciones.",
        li1: "Explorar los primeros mapas i misiones, con una dificultad progresiva.",
        li2: "Probar algunos personajes y habilidades, aunque habrá opciones limitadas en comparación con la versión completa.",
        li3: "Experimentar el sistema de combate i observar el estilo visual.",
        li4: "Experimentar el núcleo del juego sin pagar, pero habrá limitaciones en el contenido del juego.",
        li5: "Todo el contenido disponible del juego: niveles avanzados, personajes adicionales",
        li6: "Actualizaciones y expansiones gratuitas a futuro.",
        li7: "Eliminación de todas las limitaciones en la version gratuita.",
        li8: "Acceso ilimitado a todas las funciones y mejoras que se vayan lanzando.",
        li9: "Soporte prioritario y beneficios exclusivos como objetos especiales.",
        footerDescription: "\"The X Quest\" es un emocionante videojuego RPG que te sumerge en un mundo...",
        contactFooter: "Contacto",
        otherPages: "Otras Paginas",
    },
    en: {
        AboutUs: "About Us",
        FaqContact: "FAQ/Contact",
        demo: "Demostration",
        title1: "What the game is about?",
        title2: "It will be Free?",
        title3: "Is there a free version?",
        title4: "What advantatges has the paid version?",
        par1: "This turn-based RPG features a retro pixel art visual style, transporting players to a fantasy world filled with colorful and nostalgic details. The protagonist is a young hero or heroine who has inherited the ancient powers of the Sun and Moon, capable of manipulating light and darkness in perfect harmony.",
        par2: "No, the game will not be completely free to play. However, we have designed a free-to-play version that will allow players to experience a significant portion of the game at no cost. This free version will include access to the game's core features, such as early maps, some game modes, and a limited selection of characters or items.",
        par3: "The idea behind offering this free version is to give everyone a chance to try out the game before deciding whether to purchase the full version. We want to make sure that all players can have a rewarding experience and fully understand what the game is all about before making any investment.",
        par4: "The free version of the game will allow players to:",
        par5: "Those who purchase the paid version will have access to",
        par6: "Our goal is to offer a balanced experience for both types of players. Although the free version will be more limited, we are convinced that it will be complete enough to give a clear idea of ​​the game's potential. The full version, on the other hand, is designed for those who want to fully immerse themselves in the adventure and enjoy the game in its entirety without limitations.",
        li1: "Explore the first maps and missions, with progressive difficulty.",
        li2: "Try out some characters and abilities, although there will be limited options compared to the full version.",
        li3: "Experience the combat system and observe the visual style.",
        li4: "Experience the core game without paying, but there will be limitations on the game content.",
        li5: "All available game content: advanced levels, additional characters",
        li6: "Free updates and expansions in the future.",
        li7: "All limitations removed from the free version.",
        li8: "Unlimited access to all newly released features and improvements.",
        li9: "Priority support and exclusive benefits such as special items.",
        footerDescription: "\"The X Quest\" is an exciting RPG video game that immerses you in a world...",
        contactFooter: "Contact",
        otherPages: "Other Pages",
    },
    cat: {
        AboutUs: "Sobre Nosaltres",
        FaqContact: "FAQ/Contacte",
        demo: "Demostració",
        title1: "De què tracta el joc?",
        title2: "Serà gratuït?",
        title3: "Hi ha una versió gratuïta?",
        title4: "Quins avantatges té la versió de pagament?",
        par1: "Aquest RPG per torns presenta un estil visual de píxel art retro, transportant els jugadors a un món de fantasia ple de detalls acolorits i nostàlgics. El protagonista és un jove heroi o heroïna que ha heretat els antics poders del Sol i la Lluna, capaç de manipular la llum i la foscor en perfecta harmonia.",
        par2: "No, el joc no serà completament gratuït. Tanmateix, hem dissenyat una versió gratuïta que permetrà als jugadors experimentar una part significativa del joc sense cap cost. Aquesta versió gratuïta inclourà accés a les funcions principals del joc, com els primers mapes, alguns modes de joc i una selecció limitada de personatges o articles.",
        par3: "La idea d'oferir aquesta versió gratuïta és donar a tothom l'oportunitat de provar el joc abans de decidir si volen comprar la versió completa. Volem assegurar-nos que tots els jugadors puguin tenir una experiència gratificant i comprendre plenament de què tracta el joc abans de fer cap inversió.",
        par4: "La versió gratuïta del joc permetrà als jugadors:",
        par5: "Aquells que comprin la versió de pagament tindran accés a:",
        par6: "El nostre objectiu és oferir una experiència equilibrada per a tots dos tipus de jugadors. Tot i que la versió gratuïta serà més limitada, estem convençuts que serà prou completa per donar una idea clara del potencial del joc. La versió completa, en canvi, està dissenyada per a aquells que volen submergir-se plenament en l'aventura i gaudir del joc en la seva totalitat sense limitacions.",
        li1: "Explorar els primers mapes i missions, amb dificultat progressiva.",
        li2: "Provar alguns personatges i habilitats, tot i que hi haurà opcions limitades en comparació amb la versió completa.",
        li3: "Experimentar el sistema de combat i observar l'estil visual.",
        li4: "Gaudir del joc bàsic sense pagar, però amb limitacions en el contingut del joc.",
        li5: "Tot el contingut disponible del joc: nivells avançats, personatges addicionals.",
        li6: "Actualitzacions i expansions gratuïtes en el futur.",
        li7: "Totes les limitacions eliminades de la versió gratuïta.",
        li8: "Accés il·limitat a totes les característiques i millores noves que es llancin.",
        li9: "Suport prioritari i beneficis exclusius com articles especials.",
        footerDescription: "\"The X Quest\" és un emocionant videojoc RPG que et submergeix en un món...",
        contactFooter: "Contacte",
        otherPages: "Altres Pàgines",
    },
    pl: {
        AboutUs: "O nas",
        FaqContact: "FAQ/Kontakt",
        demo: "Demostracja",
        demo: "Demostration",
        title1: "o co chodzi w grze?",
        title2: "będzie za darmo?",
        title3: "Jest Darmowa Wersja?",
        title4: "Jakie zalety ma wersja płatna?",
        par1: "Ta turowa gra RPG charakteryzuje się stylem retro pixel art, przenosząc graczy do świata fantasy pełnego kolorowych i nostalgicznych detali. Protagonistą jest młody bohater lub bohaterka, który odziedziczył starożytne moce Słońca i Księżyca, zdolny do manipulowania światłem i ciemnością w idealnej harmonii.",
        par2: "Nie, gra nie będzie całkowicie darmowa. Zaprojektowaliśmy jednak wersję darmową, która pozwoli graczom doświadczyć znacznej części gry bez żadnych kosztów. Ta darmowa wersja będzie zawierać dostęp do głównych funkcji gry, takich jak wczesne mapy, niektóre tryby gry i ograniczony wybór postaci lub przedmiotów.",
        par3: "Pomysłem stojącym za oferowaniem tej darmowej wersji jest danie każdemu szansy na wypróbowanie gry przed podjęciem decyzji o zakupie pełnej wersji. Chcemy mieć pewność, że wszyscy gracze będą mogli mieć satysfakcjonujące doświadczenie i w pełni zrozumieć, o co chodzi w grze, zanim dokonają jakiejkolwiek inwestycji.",
        par4: "Darmowa wersja gry pozwoli graczom na:",
        par5: "Osoby, które zakupią wersję płatną, będą miały dostęp do",
        par6: "Naszym celem jest zapewnienie zrównoważonego doświadczenia dla obu typów graczy. Chociaż darmowa wersja będzie bardziej ograniczona, jesteśmy przekonani, że będzie wystarczająco kompletna, aby dać jasny obraz potencjału gry. Pełna wersja jest natomiast przeznaczona dla tych, którzy chcą w pełni zanurzyć się w przygodzie i cieszyć się grą w całości bez ograniczeń.",
        li1: "Odkryj pierwsze mapy i misje o rosnącym poziomie trudności.",
        li2: "Wypróbuj niektóre postacie i umiejętności, chociaż liczba dostępnych opcji będzie ograniczona w porównaniu z pełną wersją.",
        li3: "Poznaj system walki i zwróć uwagę na styl wizualny.",
        li4: "Możesz cieszyć się podstawową wersją gry bez płacenia, ale będą obowiązywać ograniczenia dotyczące jej zawartości.",
        li5: "Cała dostępna zawartość gry: zaawansowane poziomy, dodatkowe postacie",
        li6: "Bezpłatne aktualizacje i rozszerzenia w przyszłości.",
        li7: "Usunięto wszystkie ograniczenia z wersji bezpłatnej.",
        li8: "Nieograniczony dostęp do wszystkich nowo wydanych funkcji i udoskonaleń.",
        li9: "Priorytetowe wsparcie i ekskluzywne korzyści, takie jak specjalne przedmioty.",
        footerDescription: "\"The X Quest\" to ekscytująca gra RPG, która zanurza cię w świat...",
        contactFooter: "Kontakt",
        otherPages: "Inne Strony",
    },
};

window.addEventListener('load', function() {
    // Idioma predeterminado es español
    changeLanguage('es');

    // Asegurar que el menú desplegable esté configurado
    document.querySelector('.languageDropdown').value = 'es';
});


function moveRight() {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveLeft() {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let isPlaying = false;

playBtn.addEventListener('click', function() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶'; 
    } else {
        audioPlayer.play();
        playBtn.textContent = '❚❚'; 
    }
    isPlaying = !isPlaying;
});

trackListItems.forEach(item => {
    item.addEventListener('click', function() {
        const newSrc = this.getAttribute('data-src');
        const newTitle = this.querySelector('.track-title').textContent;

        audioPlayer.src = newSrc;
        trackTitle.textContent = `Sea of Stars OST - Eric W. Brown - ${newTitle}`;
        audioPlayer.play();
        playBtn.textContent = '❚❚';
        isPlaying = true;
    });
});

document.getElementById('menu-btn').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden'); 
});


// Function to change the language
// Function to change the language
function changeLanguage(lang) {
    // Get all elements with the attribute data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Use innerHTML to allow HTML content like <br>
        element.innerHTML = languageContent[lang][key] || element.innerHTML; // Fallback to the original HTML if key not found
    });
}



