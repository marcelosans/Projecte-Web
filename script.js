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
        titleTrailer: "Trailer del Juego",
        title_personajes: "Personajes",
        character1Title: "Personaje 1",
        character1Description: "Frog comenzó su vida como Glenn, el escudero de Cyrus...",
        footerDescription: "The X Quest es un emocionante videojuego RPG que te sumerge en un mundo lleno de aventuras épicas, personajes únicos y misiones desafiantes.<br> Con un sistema de combate estratégico y una narrativa envolvente,<br> cada decisión que tomes afectará el curso de tu historia.Embárcate en esta misión legendaria y descubre los secretos que esconde The X Quest. ¿Estás listo para el desafío?",
        contactFooter: "Contacto",
        otherPages: "Otras Paginas",
    },
    en: {
        AboutUs: "About Us",
        FaqContact: "FAQ/Contact",
        demo: "Demostration",
        titleTrailer: "Game Trailer",
        title_personajes: "Characters",
        character1Title: "Character 1",
        character1Description: "Frog began his life as Glenn, the squire to Cyrus...",
        footerDescription: "The X Quest is an exciting RPG video game that immerses you in a worldfull of epic adventures, unique characters and challenging quests.<br>  With a strategic combat system and an immersive narrative,<br> every decision you make will affect the course of your story.<br> Embark on this legendary quest and discover the secrets hidden within The X Quest.<br>  Are you ready for the challenge?",
        contactFooter: "Contact",
        otherPages: "Other Pages",
    },
    cat: {
        AboutUs: "Sobre Nosaltres",
        FaqContact: "FAQ/Contacte",
        demo: "Demostració",
        titleTrailer: "Trailer del Joc",
        title_personajes: "Personatges",
        character1Title: "Personatge 1",
        character1Description: "Frog va començar la seva vida com Glenn, l'escuder de Cyrus...",
        footerDescription: "The X Quest és un emocionant videojoc RPG que et submergeix en un món ple d'aventures èpiques, personatges únics i missions desafiadores.<br> Amb un sistema de combat estratègic i una narrativa envoltant,<br> cada decisió que prenguis afectarà el curs de la teva història.<br> Embarca't en aquesta missió llegendària i descobreix els secrets que amaga The X Quest.<br>  Estàs llest per al desafiament?",
        contactFooter: "Contacte",
        otherPages: "Altres Pàgines",
    },
    pl: {
        AboutUs: "O nas",
        FaqContact: "FAQ/Kontakt",
        demo: "Demostracja",
        titleTrailer: "Zwiastun Gry",
        title_personajes: "Postacie",
        character1Title: "Postać 1",
        character1Description: "Frog zaczął swoje życie jako Glenn, giermek Cyrusa...",
        footerDescription: "The X Quest” to ekscytująca gra wideo RPG, która zanurzy Cię w świecie Pełna epickich przygód, wyjątkowych postaci i trudnych misji.<br> Dzięki strategicznemu systemowi walki i wciągającej narracji,Każda decyzja,<br>  którą podejmiesz, będzie miała wpływ na przebieg Twojej historii.<br> Wyrusz na tę legendarną misję i odkryj sekrety który kryje w sobie „The X Quest”. <br> Czy jesteś gotowy na wyzwanie?",
        contactFooter: "Kontakt",
        otherPages: "Inne Strony",
    },
};

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



