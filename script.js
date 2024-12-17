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
        character1Title: "Subaru",
        personaje1Descripción: "Subaru es una niña que puede usar magia...",
        character2Title: "Higan",
        Character2Description: "Higan usa a su amiga águila para atacar a los enemigos y usa su fuerza pura para luchar...",
        character3Title: "Manto",
        personaje3Descripción: "Manto es un humano que hace años se convirtió en rana peleando con una bruja...",
        footerDescription: "The X Quest es un emocionante videojuego RPG",
        contactFooter: "Contacto",
        otherPages: "Otras Paginas",
    },
    en: {
        AboutUs: "About Us",
        FaqContact: "FAQ/Contact",
        demo: "Demostration",
        titleTrailer: "Game Trailer",
        title_personajes: "Characters",
        character1Title: "Subaru",
        character1Description: "Subaru is a little girl that can use magic...",
        character2Title: "Higan",
        character2Description: "Higan usues his eagle friend to atack enemies, and usues his pure strength to fight...",
        character3Title: "Manto",
        character3Description: "Manto is a human that years ago got converted to a frog fighting to a witch...",
        footerDescription: "The X Quest is an exciting RPG video game",
        contactFooter: "Contact",
        otherPages: "Other Pages",
    },
    cat: {
        AboutUs: "Sobre Nosaltres",
        FaqContact: "FAQ/Contacte",
        demo: "Demostració",
        titleTrailer: "Trailer del Joc",
        title_personajes: "Personatges",
        character1Title: "Manto",
        character1Title: "Subaru",
        character1Description: "Subaru és una nena que pot utilitzar la màgia...",
        character2Title: "Higan",
        character2Description: "Higan utilitza el seu amic àguila per atacar els enemics, i utilitza la seva força pura per lluitar...",
        character3Title: "Manto",
        character3Description: "Manto és un humà que fa anys es va convertir en una granota lluitant contra una bruixa...",
        footerDescription: "The X Quest és un emocionant videojoc de rol",
        contactFooter: "Contacte",
        otherPages: "Altres Pàgines",
    },
    pl: {
        AboutUs: "O nas",
        FaqContact: "FAQ/Kontakt",
        demo: "Demostracja",
        titleTrailer: "Zwiastun Gry",
        title_personajes: "Postacie",
        character1Title: "Subaru",
        character1Description: "Subaru to dziewczyna, która potrafi posługiwać się magią...",
        character2Title: "Higan",
        character2Description: "Higan używa swojego przyjaciela-orła do atakowania wrogów i używa swojej czystej siły do ​​walki...",
        character3Title: "Manto",
        character3Description: "Manto to człowiek, który wiele lat temu zamienił się w żabę walcząc z wiedźmą...",
        footerDescription: "X Quest to ekscytująca gra RPG",
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



