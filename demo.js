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
        downloadButton: "Descarga",
        demoDesc: "Tener en cuenta de que es una demo, no el juego completo.",
        footerDescription: "The X Quest es un emocionante videojuego RPG",
        contactFooter: "Contacto",
        otherPages: "Otras Paginas",
    },
    en: {
        AboutUs: "About Us",
        FaqContact: "FAQ/Contact",
        demo: "Demostration",
        downloadButton: "Download",
        demoDesc: "Keep in mind that this is a demo, not the full game.",
        footerDescription: "The X Quest is an exciting RPG video game",
        contactFooter: "Contact",
        otherPages: "Other Pages",
    },
    cat: {
        AboutUs: "Sobre Nosaltres",
        FaqContact: "FAQ/Contacte",
        demo: "Demostració",
        downloadButton: "Descarrega",
        demoDesc: "Tingueu en compte que és una demo, no el joc complet.",
        footerDescription: "The X Quest és un emocionant videojoc de rol",
        contactFooter: "Contacte",
        otherPages: "Altres Pàgines",
    },
    pl: {
        AboutUs: "O nas",
        FaqContact: "FAQ/Kontakt",
        demo: "Demostracja",
        downloadButton: "pobierać",
        demoDesc: "Należy pamiętać, że jest to wersja demonstracyjna, a nie pełna gra.",
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



