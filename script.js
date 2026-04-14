document.addEventListener('DOMContentLoaded', () => {

    const flashcardsData = [
        { question: "¿Qué simboliza 'la vaca' en la historia?", answer: "Simboliza todo aquello que te mantiene atado a la mediocridad, como excusas, pensamientos irracionales, falsas creencias o justificaciones." },
        { question: "¿Cuál fue la reacción inicial de la familia ante la muerte de su vaca?", answer: "Su primera reacción fue de desesperación y angustia, ya que había sido su única fuente de sustento por mucho tiempo." },
        { question: "¿Qué son realmente las \"vacas\" más comunes?", answer: "Son formas cómodas de eludir nuestras responsabilidades y justificar la mediocridad buscando culpables externos." },
        { question: "¿Por qué la mediocridad es peor que el fracaso total?", answer: "Porque el fracaso total te obliga a tomar acción y evaluar otras opciones, mientras que la mediocridad es 'aguantable' y perpetúa el conformismo." },
        { question: "¿Cuál es el primer paso para 'matar' a tus vacas?", answer: "Identificar tu vaca, lo cual requiere observar tus comportamientos para detectar la aparición de cualquier excusa o justificación." },
        { question: "\"Quisiera leer más, pero no tengo tiempo.\"", answer: "Es una vaca de la categoría: <strong>Excusa</strong>." }
    ];

    const container = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('prev-card');
    const nextBtn = document.getElementById('next-card');
    const counter = document.getElementById('card-counter');
    
    let currentIndex = 0;

    // Renderizar todas las flashcards
    flashcardsData.forEach((cardData, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('flashcard-container');
        
        // Asignar clase active solo a la primera carta
        if (index === 0) {
            cardContainer.classList.add('active');
        }

        const cardInner = document.createElement('div');
        cardInner.classList.add('flashcard-inner');

        cardInner.innerHTML = `
            <div class="flashcard-face flashcard-front">
                <h2>${cardData.question}</h2>
            </div>
            <div class="flashcard-face flashcard-back">
                <p>${cardData.answer}</p>
            </div>
        `;
        
        cardContainer.appendChild(cardInner);

        // Voltear carta al hacer click
        cardContainer.addEventListener('click', () => {
            cardContainer.classList.toggle('is-flipped');
        });

        container.appendChild(cardContainer);
    });

    const cards = document.querySelectorAll('.flashcard-container');

    // Función para actualizar la vista del carrusel
    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.classList.remove('is-flipped'); // Quitar el flip al pasar a la siguiente
            
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        // Actualizar el texto del contador (ahora mostrará "X / 6")
        counter.textContent = `${currentIndex + 1} / ${cards.length}`;
    }

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Inicializar el carrusel
    updateCarousel();
});
