// Tutorial Sviluppo Web Moderno - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione
    initNavigation();
    initQuiz();
    initCodeHighlighting();
    
    console.log('🚀 Tutorial Sviluppo Web Moderno caricato!');
});

// Navigazione tra le sezioni
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Rimuovi classe active da tutti i bottoni e sezioni
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Aggiungi classe active al bottone cliccato e alla sezione corrispondente
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Scroll smooth alla sezione
            document.getElementById(targetSection).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Quiz interattivo
function initQuiz() {
    // Quiz rapido nelle sezioni
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            const feedback = this.parentElement.nextElementSibling;
            
            // Rimuovi classi precedenti
            this.parentElement.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('correct', 'incorrect');
            });
            
            // Aggiungi classe corretta
            this.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            // Mostra feedback
            feedback.style.display = 'block';
            feedback.textContent = isCorrect ? '✅ Corretto!' : '❌ Sbagliato!';
            feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            
            // Nascondi feedback dopo 3 secondi
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 3000);
        });
    });
    
    // Quiz finale
    const checkQuizBtn = document.getElementById('check-quiz');
    const quizResults = document.getElementById('quiz-results');
    
    if (checkQuizBtn) {
        checkQuizBtn.addEventListener('click', function() {
            const quizOptions = document.querySelectorAll('.quiz-option');
            let correctAnswers = 0;
            let totalQuestions = 0;
            
            // Raggruppa le opzioni per domanda
            const questions = [];
            let currentQuestion = null;
            
            quizOptions.forEach(option => {
                const questionContainer = option.closest('.quiz-question');
                if (!questions.includes(questionContainer)) {
                    questions.push(questionContainer);
                }
            });
            
            questions.forEach(question => {
                const options = question.querySelectorAll('.quiz-option');
                let answered = false;
                let correct = false;
                
                options.forEach(option => {
                    if (option.classList.contains('selected')) {
                        answered = true;
                        const isCorrect = option.getAttribute('data-correct') === 'true';
                        if (isCorrect) {
                            correct = true;
                        }
                        
                        // Aggiungi classe visiva
                        option.classList.add(isCorrect ? 'correct' : 'incorrect');
                    }
                });
                
                if (answered) {
                    totalQuestions++;
                    if (correct) {
                        correctAnswers++;
                    }
                }
            });
            
            // Mostra risultati
            const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
            
            quizResults.style.display = 'block';
            quizResults.innerHTML = `
                <h3>🎯 Risultati Quiz</h3>
                <p>Hai risposto correttamente a ${correctAnswers} domande su ${totalQuestions}</p>
                <p><strong>Punteggio: ${percentage}%</strong></p>
                <p>${getQuizMessage(percentage)}</p>
            `;
            
            // Scroll ai risultati
            quizResults.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Selezione opzioni quiz finale
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const questionContainer = this.closest('.quiz-question');
            const options = questionContainer.querySelectorAll('.quiz-option');
            
            // Rimuovi selezione precedente
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Seleziona questa opzione
            this.classList.add('selected');
        });
    });
}

// Messaggio personalizzato per il quiz
function getQuizMessage(percentage) {
    if (percentage === 100) {
        return '🎉 Perfetto! Sei pronto per il mondo del lavoro!';
    } else if (percentage >= 80) {
        return '👏 Ottimo lavoro! Hai una buona conoscenza!';
    } else if (percentage >= 60) {
        return '👍 Buono! Continua a studiare per migliorare!';
    } else if (percentage >= 40) {
        return '📚 Hai ancora da imparare, ma stai sulla buona strada!';
    } else {
        return '📖 Continua a studiare il tutorial per migliorare!';
    }
}

// Evidenziazione del codice
function initCodeHighlighting() {
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        // Aggiungi numerazione delle righe
        const lines = block.textContent.split('\n');
        const numberedLines = lines.map((line, index) => {
            return `<span class="line-number">${index + 1}</span>${line}`;
        }).join('\n');
        
        // Crea wrapper per numerazione
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';
        wrapper.innerHTML = numberedLines;
        
        // Sostituisci il contenuto
        block.innerHTML = wrapper.innerHTML;
    });
}

// Animazioni aggiuntive
function addAnimations() {
    // Animazione per le card al scroll
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Simulazione di funzionalità Pinia (state management)
class SimpleStore {
    constructor() {
        this.state = {
            user: null,
            isAuthenticated: false,
            theme: 'light'
        };
        this.listeners = [];
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
    
    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }
    
    login(userData) {
        this.setState({
            user: userData,
            isAuthenticated: true
        });
    }
    
    logout() {
        this.setState({
            user: null,
            isAuthenticated: false
        });
    }
}

// Simulazione di funzionalità Vue (reattività)
class ReactiveData {
    constructor(initialData) {
        this.data = initialData;
        this.dependents = new Map();
    }
    
    get(key) {
        return this.data[key];
    }
    
    set(key, value) {
        this.data[key] = value;
        this.notify(key);
    }
    
    watch(key, callback) {
        if (!this.dependents.has(key)) {
            this.dependents.set(key, []);
        }
        this.dependents.get(key).push(callback);
    }
    
    notify(key) {
        if (this.dependents.has(key)) {
            this.dependents.get(key).forEach(callback => callback(this.data[key]));
        }
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Esporta per uso globale (simulazione moduli)
window.TutorialApp = {
    store: new SimpleStore(),
    reactive: ReactiveData,
    utils: {
        debounce,
        throttle
    }
};

// Inizializza animazioni dopo il caricamento
window.addEventListener('load', function() {
    addAnimations();
    
    // Simula caricamento dati
    setTimeout(() => {
        console.log('📊 Dati tutorial caricati con successo!');
    }, 1000);
});

// Gestione errori globale
window.addEventListener('error', function(e) {
    console.error('❌ Errore nel tutorial:', e.error);
});

// Performance monitoring
const startTime = performance.now();
window.addEventListener('load', function() {
    const loadTime = performance.now() - startTime;
    console.log(`⚡ Tutorial caricato in ${loadTime.toFixed(2)}ms`);
}); 