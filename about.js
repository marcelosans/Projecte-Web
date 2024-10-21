const playBtn = document.getElementById('play-btn');
const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const trackListItems = document.querySelectorAll('.track-list li');


// Language content object
const languageContent = {
    es: {
        titleTrailer: "Trailer del Juego",
        title_personajes: "Personajes",
        character1Title: "Personaje 1",
        character1Description: "Frog comenzó su vida como Glenn, el escudero de Cyrus...",
        footerDescription: "\"The X Quest\" es un emocionante videojuego RPG que te sumerge en un mundo...",
        contact: "Contacto",
        otherPages: "Otras Paginas",
    },
    en: {
        titleTrailer: "Game Trailer",
        title_personajes: "Characters",
        character1Title: "Character 1",
        character1Description: "Frog began his life as Glenn, the squire to Cyrus...",
        footerDescription: "\"The X Quest\" is an exciting RPG video game that immerses you in a world...",
        contact: "Contact",
        otherPages: "Other Pages",
    },
    cat: {
        titleTrailer: "Trailer del Joc",
        title_personajes: "Personatges",
        character1Title: "Personatge 1",
        character1Description: "Frog va començar la seva vida com Glenn, l'escuder de Cyrus...",
        footerDescription: "\"The X Quest\" és un emocionant videojoc RPG que et submergeix en un món...",
        contact: "Contacte",
        otherPages: "Altres Pàgines",
    },
    pl: {
        titleTrailer: "Zwiastun Gry",
        title_personajes: "Postacie",
        character1Title: "Postać 1",
        character1Description: "Frog zaczął swoje życie jako Glenn, giermek Cyrusa...",
        footerDescription: "\"The X Quest\" to ekscytująca gra RPG, która zanurza cię w świat...",
        contact: "Kontakt",
        otherPages: "Inne Strony",
    },
};

// Function to change the language
function changeLanguage(lang) {
    // Get all elements with the attribute data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = languageContent[lang][key] || element.textContent; // Use languageContent here
    });
}
