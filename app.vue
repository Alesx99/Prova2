<template>
  <div class="container">
    <!-- Header Tutorial -->
    <header class="card tutorial-header">
      <h1>🚀 Tutorial Interattivo: Stack Moderno</h1>
      <p>Impara Vue 3, Pinia, GraphQL, Nuxt 3, Prisma e SQLite passo dopo passo</p>
      
      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
        <span class="progress-text">{{ currentStep }}/{{ totalSteps }} - {{ progressPercentage }}%</span>
      </div>
    </header>

    <!-- Tutorial Steps -->
    <div class="tutorial-content">
      <!-- Step 1: Vue 3 Introduction -->
      <div v-if="currentStep === 1" class="card tutorial-step">
        <div class="step-header">
          <h2>📚 Step 1: Vue 3 - Il Tuo Primo Framework</h2>
          <span class="step-badge">Vue 3</span>
        </div>
        
        <div class="step-content">
          <!-- Glossario Base -->
          <div class="glossary-box">
            <h3>📖 Glossario Base</h3>
            <div class="glossary-item">
              <strong>Framework:</strong> Come un set di mattoncini LEGO per costruire siti web
            </div>
            <div class="glossary-item">
              <strong>Componente:</strong> Un pezzo riutilizzabile dell'interfaccia (come un pulsante)
            </div>
            <div class="glossary-item">
              <strong>Reattività:</strong> Quando i dati cambiano, la pagina si aggiorna automaticamente
            </div>
          </div>

          <div class="explanation-section">
            <h3>🤔 Cos'è Vue 3?</h3>
            <p>Immagina di voler costruire una casa. Hai bisogno di mattoni, cemento, e un piano. Vue 3 è come avere tutti i mattoni già pronti per costruire siti web!</p>
            
            <div class="analogy-box">
              <h4>🏠 Analogia: La Casa</h4>
              <p><strong>Vue 3</strong> = Il set di mattoncini LEGO<br>
              <strong>Componenti</strong> = Le stanze della casa<br>
              <strong>Reattività</strong> = Le luci che si accendono quando premi l'interruttore</p>
            </div>
          </div>

          <div class="concept-explanation">
            <h3>🎯 Concetti Chiave di Vue 3</h3>
            
            <div class="concept-item">
              <h4>1. Composition API</h4>
              <p>È come organizzare i tuoi giocattoli in scatole separate invece di metterli tutti insieme.</p>
              <div class="code-example">
                <h5>Esempio Semplice:</h5>
                <pre><code>// Prima (disordinato)
const tutto = { count: 0, name: '', loading: false }

// Dopo (organizzato)
const count = ref(0)        // Contatori
const name = ref('')        // Testi
const loading = ref(false)  // Stati</code></pre>
              </div>
            </div>

            <div class="concept-item">
              <h4>2. Reattività</h4>
              <p>Quando cambi un valore, tutto si aggiorna automaticamente, come un orologio che si sincronizza.</p>
            </div>
          </div>
          
          <div class="interactive-demo">
            <h3>🎮 Prova Tu Stesso!</h3>
            <div class="demo-instructions">
              <p><strong>Istruzioni:</strong> Cambia il numero qui sotto e guarda cosa succede!</p>
            </div>
            
            <div class="demo-container">
              <div class="demo-step">
                <label>📝 Passo 1: Inserisci un numero</label>
                <input 
                  v-model="vueDemo.count" 
                  type="number" 
                  placeholder="Scrivi un numero..." 
                  class="demo-input"
                />
              </div>
              
              <div class="demo-step">
                <label>👀 Passo 2: Guarda il risultato</label>
                <div class="result-display">
                  <p>Numero inserito: <strong>{{ vueDemo.count }}</strong></p>
                  <p>Il suo doppio: <strong>{{ vueDemo.doubleCount }}</strong></p>
                </div>
              </div>
              
              <div class="demo-step">
                <label>🎯 Passo 3: Prova i pulsanti</label>
                <div class="button-group">
                  <button @click="vueDemo.count++" class="btn btn-demo">➕ Incrementa</button>
                  <button @click="vueDemo.count--" class="btn btn-demo">➖ Decrementa</button>
                  <button @click="vueDemo.count = 0" class="btn btn-demo">🔄 Reset</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Quiz Interattivo -->
          <div class="quiz-section">
            <h3>🧠 Quiz di Verifica</h3>
            <div class="quiz-question">
              <p><strong>Domanda:</strong> Quale funzione di Vue 3 crea una variabile che si aggiorna automaticamente?</p>
              <div class="quiz-options">
                <label class="quiz-option">
                  <input type="radio" v-model="vueDemo.quizAnswer" value="useState" />
                  <span>useState</span>
                </label>
                <label class="quiz-option">
                  <input type="radio" v-model="vueDemo.quizAnswer" value="ref" />
                  <span>ref</span>
                </label>
                <label class="quiz-option">
                  <input type="radio" v-model="vueDemo.quizAnswer" value="store" />
                  <span>store</span>
                </label>
              </div>
              <button @click="checkQuizAnswer" class="btn btn-quiz">✅ Controlla Risposta</button>
              <div v-if="vueDemo.quizResult" class="quiz-result" :class="vueDemo.quizResult">
                {{ vueDemo.quizResult === 'correct' ? '🎉 Corretto! ref() è la funzione giusta!' : '❌ Sbagliato! Prova di nuovo.' }}
              </div>
            </div>
          </div>

          <!-- Esercizio Pratico -->
          <div class="exercise-section">
            <h3>✏️ Esercizio Pratico</h3>
            <p><strong>Sfida:</strong> Crea una variabile che mostri il quadrato del numero inserito!</p>
            <div class="exercise-hint">
              <p><strong>Suggerimento:</strong> Usa <code>computed()</code> per calcolare il quadrato</p>
            </div>
            <div class="exercise-demo">
              <input v-model="vueDemo.exerciseNumber" type="number" placeholder="Inserisci un numero per l'esercizio" />
              <p>Numero: {{ vueDemo.exerciseNumber }}</p>
              <p>Quadrato: {{ vueDemo.squareNumber }}</p>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="nextStep" class="btn btn-primary">🎓 Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 2: Pinia State Management -->
      <div v-if="currentStep === 2" class="card tutorial-step">
        <div class="step-header">
          <h2>🏪 Step 2: Pinia - State Management</h2>
          <span class="step-badge">Pinia</span>
        </div>
        
        <div class="step-content">
          <!-- 🎯 Obiettivo -->
          <div class="learning-objective">
            <h3>🎯 Obiettivo di Apprendimento</h3>
            <p>Imparerai a gestire lo stato globale dell'applicazione con Pinia, creando store reattivi e condivisi tra i componenti.</p>
          </div>

          <!-- 📚 Glossario -->
          <div class="glossary-section">
            <h3>📚 Glossario Pinia</h3>
            <div class="glossary-grid">
              <div class="glossary-item">
                <strong>Store:</strong> Un contenitore che gestisce lo stato dell'applicazione
              </div>
              <div class="glossary-item">
                <strong>State:</strong> I dati reattivi memorizzati nello store
              </div>
              <div class="glossary-item">
                <strong>Getters:</strong> Funzioni che calcolano valori derivati dallo state
              </div>
              <div class="glossary-item">
                <strong>Actions:</strong> Metodi che modificano lo state dello store
              </div>
              <div class="glossary-item">
                <strong>Reattività:</strong> Aggiornamento automatico dell'UI quando i dati cambiano
              </div>
            </div>
          </div>

          <!-- 🏫 Spiegazione Didattica -->
          <div class="explanation-section">
            <h3>🏫 Cos'è Pinia?</h3>
            <p><strong>Pinia</strong> è come un <em>magazzino centrale</em> per i tuoi dati. Immagina di avere un negozio con diversi reparti:</p>
            
            <div class="analogy">
              <h4>🏪 Analogia: Il Negozio Pinia</h4>
              <ul>
                <li><strong>Store = Negozio:</strong> Il luogo dove conservi tutto</li>
                <li><strong>State = Merce:</strong> I prodotti (dati) nel negozio</li>
                <li><strong>Getters = Cassieri:</strong> Ti dicono quanti prodotti hai</li>
                <li><strong>Actions = Magazzinieri:</strong> Aggiungono o rimuovono prodotti</li>
              </ul>
            </div>

            <div class="why-pinia">
              <h4>🤔 Perché Pinia invece di Vuex?</h4>
              <ul>
                <li>✅ <strong>Più semplice:</strong> Meno boilerplate code</li>
                <li>✅ <strong>TypeScript:</strong> Supporto nativo per i tipi</li>
                <li>✅ <strong>DevTools:</strong> Migliore integrazione con Vue DevTools</li>
                <li>✅ <strong>Composables:</strong> Funziona perfettamente con Composition API</li>
              </ul>
            </div>
          </div>

          <!-- 💻 Esempio di Codice -->
          <div class="code-example">
            <h4>💻 Struttura Base di uno Store Pinia:</h4>
            <pre><code>import { defineStore } from 'pinia'

// 1. Definiamo lo store
export const useCounterStore = defineStore('counter', {
  // 2. State: i dati reattivi
  state: () => ({ 
    count: 0,
    name: 'Contatore'
  }),
  
  // 3. Getters: calcoli derivati
  getters: { 
    double: (state) => state.count * 2,
    greeting: (state) => `Ciao ${state.name}!`
  },
  
  // 4. Actions: metodi che modificano lo state
  actions: { 
    increment() { 
      this.count++ 
    },
    reset() {
      this.count = 0
    }
  }
})</code></pre>
          </div>

          <!-- 🎮 Demo Interattiva -->
          <div class="interactive-demo">
            <h4>🎮 Demo Interattiva - Store Pinia:</h4>
            <div class="demo-container">
              <div class="demo-info">
                <p><strong>Valore attuale:</strong> {{ piniaDemo.count }}</p>
                <p><strong>Doppio valore:</strong> {{ piniaDemo.double }}</p>
                <p><strong>Saluto:</strong> {{ piniaDemo.greeting }}</p>
              </div>
              
              <div class="demo-controls">
                <button @click="piniaDemo.increment" class="btn btn-demo">
                  ➕ Incrementa
                </button>
                <button @click="piniaDemo.decrement" class="btn btn-demo">
                  ➖ Decrementa
                </button>
                <button @click="piniaDemo.reset" class="btn btn-secondary">
                  🔄 Reset
                </button>
              </div>

              <div class="demo-explanation">
                <p><small>💡 <strong>Come funziona:</strong> Ogni click aggiorna lo state globale. Tutti i componenti che usano questo store vedranno i cambiamenti!</small></p>
              </div>
            </div>
          </div>

          <!-- ❓ Quiz -->
          <div class="quiz-section">
            <h4>❓ Quiz: Pinia Basics</h4>
            <p><strong>Domanda:</strong> Cosa succede quando chiami un'action in Pinia?</p>
            
            <div class="quiz-options">
              <label class="quiz-option">
                <input type="radio" v-model="piniaQuiz.answer" value="a" />
                A) Viene aggiornata solo la variabile locale
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="piniaQuiz.answer" value="b" />
                B) Viene aggiornato lo state globale e tutti i componenti si aggiornano
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="piniaQuiz.answer" value="c" />
                C) Viene aggiornato solo il database
              </label>
            </div>
            
            <button @click="checkPiniaQuiz" class="btn-quiz">Verifica Risposta</button>
            
            <div v-if="piniaQuiz.showResult" :class="['quiz-result', piniaQuiz.isCorrect ? 'correct' : 'incorrect']">
              {{ piniaQuiz.result }}
            </div>
          </div>

          <!-- 🛠️ Esercizio Pratico -->
          <div class="exercise-section">
            <h4>🛠️ Esercizio: Crea il tuo Store</h4>
            <p><strong>Obiettivo:</strong> Crea uno store per gestire una lista di attività (todo list)</p>
            
            <div class="exercise-hint">
              <h5>💡 Suggerimenti:</h5>
              <ul>
                <li>Usa <code>state</code> per memorizzare la lista di attività</li>
                <li>Crea <code>getters</code> per contare le attività completate</li>
                <li>Aggiungi <code>actions</code> per aggiungere/rimuovere attività</li>
              </ul>
            </div>

            <div class="exercise-demo">
              <h5>🎯 Il tuo Todo Store:</h5>
              <div class="form-group">
                <input v-model="todoExercise.newTodo" placeholder="Nuova attività..." />
                <button @click="addTodoExercise" class="btn">Aggiungi</button>
              </div>
              
              <div v-if="todoExercise.todos.length > 0">
                <h6>Le tue attività:</h6>
                <ul>
                  <li v-for="(todo, index) in todoExercise.todos" :key="index">
                    <input type="checkbox" v-model="todo.completed" />
                    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                    <button @click="removeTodoExercise(index)" class="btn-small">❌</button>
                  </li>
                </ul>
                <p><strong>Completate:</strong> {{ completedTodosCount }} / {{ todoExercise.todos.length }}</p>
              </div>
            </div>
          </div>

          <!-- 🔗 Integrazione con Vue 3 -->
          <div class="integration-section">
            <h4>🔗 Come Pinia si integra con Vue 3</h4>
            <div class="integration-flow">
              <div class="flow-step">
                <h5>1. Componente Vue</h5>
                <p>Usa lo store con <code>useStore()</code></p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>2. Pinia Store</h5>
                <p>Gestisce lo state globale</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>3. UI Reattiva</h5>
                <p>Si aggiorna automaticamente</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="nextStep" class="btn btn-primary">Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 3: Nuxt 3 Framework -->
      <div v-if="currentStep === 3" class="card tutorial-step">
        <div class="step-header">
          <h2>⚡ Step 3: Nuxt 3 - Framework Full-Stack</h2>
          <span class="step-badge">Nuxt 3</span>
        </div>
        
        <div class="step-content">
          <!-- 🎯 Obiettivo -->
          <div class="learning-objective">
            <h3>🎯 Obiettivo di Apprendimento</h3>
            <p>Imparerai a utilizzare Nuxt 3 come framework full-stack, comprendendo il routing automatico, le API routes e le funzionalità avanzate.</p>
          </div>

          <!-- 📚 Glossario -->
          <div class="glossary-section">
            <h3>📚 Glossario Nuxt 3</h3>
            <div class="glossary-grid">
              <div class="glossary-item">
                <strong>Framework Full-Stack:</strong> Strumento che gestisce sia frontend che backend
              </div>
              <div class="glossary-item">
                <strong>SSR (Server-Side Rendering):</strong> Rendering delle pagine sul server per migliori performance
              </div>
              <div class="glossary-item">
                <strong>File-based Routing:</strong> Creazione automatica delle route basata sui file
              </div>
              <div class="glossary-item">
                <strong>Auto-imports:</strong> Import automatico di componenti e funzioni
              </div>
              <div class="glossary-item">
                <strong>API Routes:</strong> Endpoint API creati automaticamente dai file nella cartella server/
              </div>
            </div>
          </div>

          <!-- 🏫 Spiegazione Didattica -->
          <div class="explanation-section">
            <h3>🏫 Cos'è Nuxt 3?</h3>
            <p><strong>Nuxt 3</strong> è come un <em>assistente intelligente</em> che organizza tutto il tuo progetto Vue.js. Immagina di avere un maggiordomo che:</p>
            
            <div class="analogy">
              <h4>🏠 Analogia: La Casa Nuxt 3</h4>
              <ul>
                <li><strong>File-based Routing = Mappa della casa:</strong> Ogni file è una stanza accessibile</li>
                <li><strong>Auto-imports = Mobili automatici:</strong> I componenti si posizionano da soli</li>
                <li><strong>API Routes = Cucina:</strong> Dove prepari i dati per il frontend</li>
                <li><strong>SSR = Servizio a domicilio:</strong> Le pagine arrivano già pronte</li>
              </ul>
            </div>

            <div class="why-nuxt">
              <h4>🤔 Perché Nuxt 3 invece di Vue.js puro?</h4>
              <ul>
                <li>✅ <strong>Convenzione over Configuration:</strong> Meno configurazione, più sviluppo</li>
                <li>✅ <strong>Performance:</strong> SSR per SEO e velocità di caricamento</li>
                <li>✅ <strong>Developer Experience:</strong> Hot reload e auto-imports</li>
                <li>✅ <strong>Full-Stack:</strong> Frontend e backend nello stesso progetto</li>
              </ul>
            </div>
          </div>

          <!-- 💻 Esempio di Codice -->
          <div class="code-example">
            <h4>💻 Struttura di un Progetto Nuxt 3:</h4>
            <pre><code>nuxt-demo/
├── pages/           # 🗂️ Routing automatico
│   ├── index.vue    # → / (homepage)
│   ├── about.vue    # → /about
│   └── users/
│       └── [id].vue # → /users/123 (dinamico)
├── components/      # 🧩 Auto-imports
│   ├── Header.vue   # → import automatico
│   └── Footer.vue   # → import automatico
├── server/          # 🔌 API Routes
│   └── api/
│       └── users.ts # → /api/users
└── nuxt.config.ts   # ⚙️ Configurazione</code></pre>
          </div>

          <!-- 🎮 Demo Interattiva -->
          <div class="interactive-demo">
            <h4>🎮 Demo Interattiva - Funzionalità Nuxt 3:</h4>
            <div class="demo-container">
              <div class="demo-info">
                <p><strong>🔄 Auto-imports:</strong> I componenti sono disponibili ovunque</p>
                <p><strong>🌐 SSR:</strong> Questa pagina è renderizzata sul server</p>
                <p><strong>⚡ Hot Reload:</strong> I cambiamenti si vedono istantaneamente</p>
              </div>
              
              <div class="demo-controls">
                <button @click="testNuxtFeature" class="btn btn-demo">
                  🚀 Test Feature Nuxt
                </button>
                <button @click="showNuxtInfo" class="btn btn-demo">
                  ℹ️ Info Progetto
                </button>
                <button @click="testAutoImports" class="btn btn-demo">
                  🔄 Test Auto-imports
                </button>
              </div>

              <div v-if="nuxtDemo.showInfo" class="demo-explanation">
                <h5>📊 Informazioni Progetto Nuxt 3:</h5>
                <ul>
                  <li><strong>Versione:</strong> {{ nuxtDemo.version }}</li>
                  <li><strong>Modalità:</strong> {{ nuxtDemo.mode }}</li>
                  <li><strong>Porta:</strong> {{ nuxtDemo.port }}</li>
                  <li><strong>DevTools:</strong> Disponibili con Shift + Alt + D</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ❓ Quiz -->
          <div class="quiz-section">
            <h4>❓ Quiz: Nuxt 3 Basics</h4>
            <p><strong>Domanda:</strong> Come si crea una nuova pagina in Nuxt 3?</p>
            
            <div class="quiz-options">
              <label class="quiz-option">
                <input type="radio" v-model="nuxtQuiz.answer" value="a" />
                A) Configurando manualmente le route nel router
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="nuxtQuiz.answer" value="b" />
                B) Creando un file nella cartella pages/ (file-based routing)
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="nuxtQuiz.answer" value="c" />
                C) Usando solo JavaScript puro
              </label>
            </div>
            
            <button @click="checkNuxtQuiz" class="btn-quiz">Verifica Risposta</button>
            
            <div v-if="nuxtQuiz.showResult" :class="['quiz-result', nuxtQuiz.isCorrect ? 'correct' : 'incorrect']">
              {{ nuxtQuiz.result }}
            </div>
          </div>

          <!-- 🛠️ Esercizio Pratico -->
          <div class="exercise-section">
            <h4>🛠️ Esercizio: Crea una Pagina Dinamica</h4>
            <p><strong>Obiettivo:</strong> Simula la creazione di pagine dinamiche con Nuxt 3</p>
            
            <div class="exercise-hint">
              <h5>💡 Suggerimenti:</h5>
              <ul>
                <li>Usa <code>[id].vue</code> per pagine dinamiche</li>
                <li>Accedi ai parametri con <code>$route.params</code></li>
                <li>Usa <code>useRoute()</code> per i parametri reattivi</li>
              </ul>
            </div>

            <div class="exercise-demo">
              <h5>🎯 Simulatore di Pagine Dinamiche:</h5>
              <div class="form-group">
                <input v-model="nuxtExercise.pageId" placeholder="ID della pagina (es: 123)" />
                <button @click="createDynamicPage" class="btn">Crea Pagina</button>
              </div>
              
              <div v-if="nuxtExercise.pages.length > 0">
                <h6>Pagine create:</h6>
                <div class="dynamic-pages">
                  <div v-for="page in nuxtExercise.pages" :key="page.id" class="page-item">
                    <span><strong>ID:</strong> {{ page.id }}</span>
                    <span><strong>URL:</strong> /pages/{{ page.id }}</span>
                    <span><strong>Creato:</strong> {{ page.createdAt }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🔗 Integrazione con Vue 3 e Pinia -->
          <div class="integration-section">
            <h4>🔗 Come Nuxt 3 si integra con Vue 3 e Pinia</h4>
            <div class="integration-flow">
              <div class="flow-step">
                <h5>1. Vue 3</h5>
                <p>Componenti reattivi</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>2. Nuxt 3</h5>
                <p>Framework full-stack</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>3. Pinia</h5>
                <p>State management</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="nextStep" class="btn btn-primary">Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 4: Prisma ORM -->
      <div v-if="currentStep === 4" class="card tutorial-step">
        <div class="step-header">
          <h2>🗄️ Step 4: Prisma - ORM Moderno</h2>
          <span class="step-badge">Prisma</span>
        </div>
        
        <div class="step-content">
          <!-- 🎯 Obiettivo -->
          <div class="learning-objective">
            <h3>🎯 Obiettivo di Apprendimento</h3>
            <p>Imparerai a utilizzare Prisma come ORM moderno per gestire il database in modo type-safe e intuitivo.</p>
          </div>

          <!-- 📚 Glossario -->
          <div class="glossary-section">
            <h3>📚 Glossario Prisma</h3>
            <div class="glossary-grid">
              <div class="glossary-item">
                <strong>ORM (Object-Relational Mapping):</strong> Traduce oggetti JavaScript in tabelle del database
              </div>
              <div class="glossary-item">
                <strong>Schema:</strong> Definizione della struttura del database in codice
              </div>
              <div class="glossary-item">
                <strong>Model:</strong> Rappresenta una tabella del database
              </div>
              <div class="glossary-item">
                <strong>Client:</strong> Interfaccia per interagire con il database
              </div>
              <div class="glossary-item">
                <strong>Migration:</strong> Cambiamenti alla struttura del database
              </div>
            </div>
          </div>

          <!-- 🏫 Spiegazione Didattica -->
          <div class="explanation-section">
            <h3>🏫 Cos'è Prisma?</h3>
            <p><strong>Prisma</strong> è come un <em>traduttore intelligente</em> tra il tuo codice JavaScript e il database. Immagina di avere un interprete che:</p>
            
            <div class="analogy">
              <h4>🌍 Analogia: Il Traduttore Prisma</h4>
              <ul>
                <li><strong>Schema = Dizionario:</strong> Definisce come tradurre le parole</li>
                <li><strong>Model = Frase:</strong> Una struttura di dati completa</li>
                <li><strong>Client = Interprete:</strong> Esegue le traduzioni</li>
                <li><strong>Migration = Aggiornamento:</strong> Modifica il dizionario</li>
              </ul>
            </div>

            <div class="why-prisma">
              <h4>🤔 Perché Prisma invece di SQL puro?</h4>
              <ul>
                <li>✅ <strong>Type Safety:</strong> TypeScript ti avverte degli errori</li>
                <li>✅ <strong>Auto-completion:</strong> L'editor ti suggerisce le opzioni</li>
                <li>✅ <strong>Migrations:</strong> Gestione automatica dei cambiamenti</li>
                <li>✅ <strong>Studio:</strong> Interfaccia grafica per il database</li>
              </ul>
            </div>
          </div>

          <!-- 💻 Esempio di Codice -->
          <div class="code-example">
            <h4>💻 Schema Prisma Completo:</h4>
            <pre><code>// 1. Configurazione del database
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

// 2. Generazione del client
generator client {
  provider = "prisma-client-js"
}

// 3. Definizione dei modelli
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relazioni
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}</code></pre>
          </div>

          <!-- 🎮 Demo Interattiva -->
          <div class="interactive-demo">
            <h4>🎮 Demo Interattiva - Operazioni Database:</h4>
            <div class="demo-container">
              <div class="demo-info">
                <p><strong>🗄️ Database:</strong> SQLite (file locale)</p>
                <p><strong>📊 Utenti totali:</strong> {{ prismaDemo.users.length }}</p>
                <p><strong>🔧 Prisma Client:</strong> Generato automaticamente</p>
              </div>
              
              <div class="demo-controls">
                <div class="form-group">
                  <input v-model="prismaDemo.email" placeholder="Email utente" />
                  <input v-model="prismaDemo.name" placeholder="Nome utente" />
                  <button @click="createUserWithPrisma" class="btn btn-demo">
                    ➕ Crea Utente
                  </button>
                </div>
                
                <div class="form-group">
                  <button @click="fetchAllUsers" class="btn btn-demo">
                    📋 Carica Utenti
                  </button>
                  <button @click="clearUsers" class="btn btn-secondary">
                    🗑️ Pulisci Lista
                  </button>
                </div>
              </div>

              <div v-if="prismaDemo.users.length > 0" class="demo-results">
                <h5>👥 Utenti nel Database:</h5>
                <div class="user-list">
                  <div v-for="user in prismaDemo.users" :key="user.id" class="user-item">
                    <div class="user-info">
                      <span class="user-email">{{ user.email }}</span>
                      <span class="user-name">{{ user.name || 'Senza nome' }}</span>
                    </div>
                    <div class="user-actions">
                      <button @click="deleteUser(user.id)" class="btn-small">❌</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ❓ Quiz -->
          <div class="quiz-section">
            <h4>❓ Quiz: Prisma Basics</h4>
            <p><strong>Domanda:</strong> Cosa significa ORM in Prisma?</p>
            
            <div class="quiz-options">
              <label class="quiz-option">
                <input type="radio" v-model="prismaQuiz.answer" value="a" />
                A) Object-Relational Mapping - traduce oggetti JavaScript in tabelle database
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="prismaQuiz.answer" value="b" />
                B) Online Resource Manager - gestisce risorse online
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="prismaQuiz.answer" value="c" />
                C) Object Request Model - modello di richiesta oggetti
              </label>
            </div>
            
            <button @click="checkPrismaQuiz" class="btn-quiz">Verifica Risposta</button>
            
            <div v-if="prismaQuiz.showResult" :class="['quiz-result', prismaQuiz.isCorrect ? 'correct' : 'incorrect']">
              {{ prismaQuiz.result }}
            </div>
          </div>

          <!-- 🛠️ Esercizio Pratico -->
          <div class="exercise-section">
            <h4>🛠️ Esercizio: Crea il tuo Schema</h4>
            <p><strong>Obiettivo:</strong> Progetta uno schema per un blog con utenti e articoli</p>
            
            <div class="exercise-hint">
              <h5>💡 Suggerimenti:</h5>
              <ul>
                <li>Usa <code>@id</code> per chiavi primarie</li>
                <li>Usa <code>@relation</code> per collegamenti tra tabelle</li>
                <li>Usa <code>@default</code> per valori predefiniti</li>
              </ul>
            </div>

            <div class="exercise-demo">
              <h5>🎯 Schema Builder Interattivo:</h5>
              <div class="schema-builder">
                <div class="model-creator">
                  <h6>Crea un nuovo modello:</h6>
                  <div class="form-group">
                    <input v-model="prismaExercise.modelName" placeholder="Nome modello (es: Post)" />
                    <button @click="addModel" class="btn">Aggiungi Modello</button>
                  </div>
                </div>
                
                <div v-if="prismaExercise.models.length > 0">
                  <h6>Modelli creati:</h6>
                  <div class="models-list">
                    <div v-for="model in prismaExercise.models" :key="model.name" class="model-item">
                      <span><strong>model {{ model.name }}</strong></span>
                      <span>ID: @id @default(autoincrement())</span>
                      <span>Creato: {{ model.createdAt }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🔗 Integrazione con Nuxt 3 -->
          <div class="integration-section">
            <h4>🔗 Come Prisma si integra con Nuxt 3</h4>
            <div class="integration-flow">
              <div class="flow-step">
                <h5>1. Nuxt 3</h5>
                <p>API Routes</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>2. Prisma Client</h5>
                <p>Query Database</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>3. SQLite</h5>
                <p>Database File</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="nextStep" class="btn btn-primary">Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 5: GraphQL API -->
      <div v-if="currentStep === 5" class="card tutorial-step">
        <div class="step-header">
          <h2>🔍 Step 5: GraphQL - Query Language</h2>
          <span class="step-badge">GraphQL</span>
        </div>
        
        <div class="step-content">
          <!-- 🎯 Obiettivo -->
          <div class="learning-objective">
            <h3>🎯 Obiettivo di Apprendimento</h3>
            <p>Imparerai a utilizzare GraphQL come linguaggio di query per API, comprendendo come richiedere esattamente i dati necessari.</p>
          </div>

          <!-- 📚 Glossario -->
          <div class="glossary-section">
            <h3>📚 Glossario GraphQL</h3>
            <div class="glossary-grid">
              <div class="glossary-item">
                <strong>Query:</strong> Richiesta di dati dal server (operazione di lettura)
              </div>
              <div class="glossary-item">
                <strong>Mutation:</strong> Operazione che modifica i dati (creare, aggiornare, eliminare)
              </div>
              <div class="glossary-item">
                <strong>Schema:</strong> Definizione dei tipi di dati e operazioni disponibili
              </div>
              <div class="glossary-item">
                <strong>Resolver:</strong> Funzione che determina come ottenere i dati per un campo
              </div>
              <div class="glossary-item">
                <strong>Type:</strong> Definizione della struttura di un oggetto dati
              </div>
            </div>
          </div>

          <!-- 🏫 Spiegazione Didattica -->
          <div class="explanation-section">
            <h3>🏫 Cos'è GraphQL?</h3>
            <p><strong>GraphQL</strong> è come un <em>menu a la carte</em> per i dati. Invece di ricevere piatti già preparati (come con REST), puoi ordinare esattamente quello che vuoi:</p>
            
            <div class="analogy">
              <h4>🍽️ Analogia: Il Ristorante GraphQL</h4>
              <ul>
                <li><strong>REST = Menu fisso:</strong> Ricevi sempre lo stesso piatto completo</li>
                <li><strong>GraphQL = Menu a la carte:</strong> Ordini solo gli ingredienti che vuoi</li>
                <li><strong>Query = Ordinare:</strong> Chiedi esattamente quello che ti serve</li>
                <li><strong>Mutation = Cucinare:</strong> Modifichi i piatti nel menu</li>
              </ul>
            </div>

            <div class="why-graphql">
              <h4>🤔 Perché GraphQL invece di REST?</h4>
              <ul>
                <li>✅ <strong>Over-fetching:</strong> Eviti di scaricare dati inutili</li>
                <li>✅ <strong>Under-fetching:</strong> Ottieni tutti i dati in una sola richiesta</li>
                <li>✅ <strong>Type Safety:</strong> Schema forte e documentazione automatica</li>
                <li>✅ <strong>Versioning:</strong> Non serve versionare le API</li>
              </ul>
            </div>
          </div>

          <!-- 💻 Esempio di Codice -->
          <div class="code-example">
            <h4>💻 Schema GraphQL Completo:</h4>
            <pre><code># 1. Definizione dei tipi
type User {
  id: ID!
  email: String!
  name: String
  createdAt: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User!
  published: Boolean!
}

# 2. Query disponibili
type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
}

# 3. Mutations disponibili
type Mutation {
  createUser(email: String!, name: String): User!
  updateUser(id: ID!, email: String, name: String): User!
  deleteUser(id: ID!): Boolean!
}</code></pre>
          </div>

          <!-- 🎮 Demo Interattiva -->
          <div class="interactive-demo">
            <h4>🎮 Demo Interattiva - GraphQL Playground:</h4>
            <div class="demo-container">
              <div class="demo-info">
                <p><strong>🔍 Endpoint:</strong> /api/graphql</p>
                <p><strong>📊 Dati disponibili:</strong> Users, Posts, Comments</p>
                <p><strong>⚡ Query in tempo reale:</strong> Risultati istantanei</p>
              </div>
              
              <div class="graphql-playground">
                <div class="query-section">
                  <h5>📝 Query GraphQL:</h5>
                  <div class="query-templates">
                    <button @click="loadQueryTemplate('users')" class="btn-template">👥 Tutti gli utenti</button>
                    <button @click="loadQueryTemplate('user')" class="btn-template">👤 Singolo utente</button>
                    <button @click="loadQueryTemplate('create')" class="btn-template">➕ Crea utente</button>
                  </div>
                  <textarea v-model="graphqlDemo.query" placeholder="Inserisci la tua query GraphQL..." class="query-editor"></textarea>
                  <div class="query-controls">
                    <button @click="executeGraphQLQuery" class="btn btn-demo">
                      🚀 Esegui Query
                    </button>
                    <button @click="clearQuery" class="btn btn-secondary">
                      🗑️ Pulisci
                    </button>
                  </div>
                </div>
                <div class="result-section">
                  <h5>📊 Risultato:</h5>
                  <div class="result-container">
                    <pre v-if="graphqlDemo.result" class="result-json">{{ graphqlDemo.result }}</pre>
                    <div v-else class="result-placeholder">
                      <p>👆 Esegui una query per vedere i risultati</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ❓ Quiz -->
          <div class="quiz-section">
            <h4>❓ Quiz: GraphQL Basics</h4>
            <p><strong>Domanda:</strong> Qual è la differenza principale tra GraphQL e REST?</p>
            
            <div class="quiz-options">
              <label class="quiz-option">
                <input type="radio" v-model="graphqlQuiz.answer" value="a" />
                A) GraphQL permette di richiedere esattamente i dati necessari, REST no
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="graphqlQuiz.answer" value="b" />
                B) GraphQL è più veloce di REST
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="graphqlQuiz.answer" value="c" />
                C) GraphQL usa solo JSON, REST usa XML
              </label>
            </div>
            
            <button @click="checkGraphQLQuiz" class="btn-quiz">Verifica Risposta</button>
            
            <div v-if="graphqlQuiz.showResult" :class="['quiz-result', graphqlQuiz.isCorrect ? 'correct' : 'incorrect']">
              {{ graphqlQuiz.result }}
            </div>
          </div>

          <!-- 🛠️ Esercizio Pratico -->
          <div class="exercise-section">
            <h4>🛠️ Esercizio: Crea la tua Query</h4>
            <p><strong>Obiettivo:</strong> Scrivi query GraphQL per ottenere dati specifici</p>
            
            <div class="exercise-hint">
              <h5>💡 Suggerimenti:</h5>
              <ul>
                <li>Usa <code>query</code> per leggere dati</li>
                <li>Usa <code>mutation</code> per modificare dati</li>
                <li>Specifica solo i campi che ti servono</li>
                <li>Usa <code>!</code> per campi obbligatori</li>
              </ul>
            </div>

            <div class="exercise-demo">
              <h5>🎯 Query Builder Interattivo:</h5>
              <div class="query-builder">
                <div class="query-type-selector">
                  <h6>Scegli il tipo di operazione:</h6>
                  <div class="query-types">
                    <button @click="selectQueryType('query')" :class="['btn-type', { active: graphqlExercise.type === 'query' }]">
                      🔍 Query
                    </button>
                    <button @click="selectQueryType('mutation')" :class="['btn-type', { active: graphqlExercise.type === 'mutation' }]">
                      ✏️ Mutation
                    </button>
                  </div>
                </div>
                
                <div class="field-selector">
                  <h6>Seleziona i campi per {{ graphqlExercise.selectedObject }}:</h6>
                  <div class="field-options">
                    <label v-for="field in graphqlExercise.availableFields" :key="field" class="field-option">
                      <input type="checkbox" v-model="graphqlExercise.selectedFields" :value="field" />
                      {{ field }}
                    </label>
                  </div>
                </div>
                
                <button @click="generateQuery" class="btn">Genera Query</button>
                
                <div v-if="graphqlExercise.generatedQuery" class="generated-query">
                  <h6>Query generata:</h6>
                  <pre>{{ graphqlExercise.generatedQuery }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- 🔗 Integrazione con Prisma -->
          <div class="integration-section">
            <h4>🔗 Come GraphQL si integra con Prisma</h4>
            <div class="integration-flow">
              <div class="flow-step">
                <h5>1. GraphQL Query</h5>
                <p>Richiesta dati dal client</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>2. GraphQL Resolver</h5>
                <p>Elabora la richiesta</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>3. Prisma Client</h5>
                <p>Interroga il database</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="nextStep" class="btn btn-primary">Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 6: SQLite Database -->
      <div v-if="currentStep === 6" class="card tutorial-step">
        <div class="step-header">
          <h2>💾 Step 6: SQLite - Database Leggero</h2>
          <span class="step-badge">SQLite</span>
        </div>
        
        <div class="step-content">
          <!-- 🎯 Obiettivo -->
          <div class="learning-objective">
            <h3>🎯 Obiettivo di Apprendimento</h3>
            <p>Imparerai a utilizzare SQLite come database leggero e portabile, comprendendo i suoi vantaggi e l'integrazione con Prisma.</p>
          </div>

          <!-- 📚 Glossario -->
          <div class="glossary-section">
            <h3>📚 Glossario SQLite</h3>
            <div class="glossary-grid">
              <div class="glossary-item">
                <strong>Database File:</strong> Un singolo file che contiene tutti i dati
              </div>
              <div class="glossary-item">
                <strong>Serverless:</strong> Non richiede un server separato per funzionare
              </div>
              <div class="glossary-item">
                <strong>ACID:</strong> Atomicità, Consistenza, Isolamento, Durabilità
              </div>
              <div class="glossary-item">
                <strong>Portabile:</strong> Può essere spostato facilmente tra sistemi
              </div>
              <div class="glossary-item">
                <strong>Embedded:</strong> Integrato direttamente nell'applicazione
              </div>
            </div>
          </div>

          <!-- 🏫 Spiegazione Didattica -->
          <div class="explanation-section">
            <h3>🏫 Cos'è SQLite?</h3>
            <p><strong>SQLite</strong> è come un <em>libro di conti digitale</em> che puoi portare ovunque. Immagina di avere un quaderno che contiene tutti i tuoi dati:</p>
            
            <div class="analogy">
              <h4>📚 Analogia: Il Libro di Conti SQLite</h4>
              <ul>
                <li><strong>Database File = Libro:</strong> Un singolo file con tutte le informazioni</li>
                <li><strong>Serverless = Portatile:</strong> Non serve un ufficio separato</li>
                <li><strong>ACID = Sicuro:</strong> Come un libro con pagine numerate e indice</li>
                <li><strong>Embedded = Integrato:</strong> Come un quaderno nella tua borsa</li>
              </ul>
            </div>

            <div class="why-sqlite">
              <h4>🤔 Perché SQLite invece di MySQL/PostgreSQL?</h4>
              <ul>
                <li>✅ <strong>Semplicità:</strong> Nessuna configurazione server</li>
                <li>✅ <strong>Portabilità:</strong> Un solo file da copiare</li>
                <li>✅ <strong>Performance:</strong> Velocissimo per applicazioni locali</li>
                <li>✅ <strong>Affidabilità:</strong> Usato da miliardi di dispositivi</li>
              </ul>
            </div>
          </div>

          <!-- 💻 Esempio di Codice -->
          <div class="code-example">
            <h4>💻 Configurazione SQLite con Prisma:</h4>
            <pre><code>// 1. Configurazione del database
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

// 2. Generazione del client
generator client {
  provider = "prisma-client-js"
}

// 3. Schema del database
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// 4. Comandi per gestire il database
// npx prisma migrate dev    # Crea le tabelle
// npx prisma studio         # Interfaccia grafica
// npx prisma generate       # Genera il client</code></pre>
          </div>

          <!-- 🎮 Demo Interattiva -->
          <div class="interactive-demo">
            <h4>🎮 Demo Interattiva - Gestione Database:</h4>
            <div class="demo-container">
              <div class="demo-info">
                <p><strong>🗄️ Database:</strong> SQLite (prisma/dev.db)</p>
                <p><strong>📊 Dimensione file:</strong> {{ sqliteDemo.fileSize }}</p>
                <p><strong>🔧 Stato:</strong> {{ sqliteDemo.status }}</p>
              </div>
              
              <div class="database-stats">
                <h5>📈 Statistiche Database:</h5>
                <div class="stats-grid">
                  <div class="stat-item">
                    <span class="stat-number">{{ userStore.users.length }}</span>
                    <span class="stat-label">Utenti Totali</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">{{ userStore.usersWithNames }}</span>
                    <span class="stat-label">Con Nome</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">{{ userStore.usersWithoutNames }}</span>
                    <span class="stat-label">Senza Nome</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">{{ sqliteDemo.tableCount }}</span>
                    <span class="stat-label">Tabelle</span>
                  </div>
                </div>
              </div>
              
              <div class="demo-controls">
                <button @click="openPrismaStudio" class="btn btn-demo">
                  🖥️ Apri Prisma Studio
                </button>
                <button @click="backupDatabase" class="btn btn-demo">
                  💾 Backup Database
                </button>
                <button @click="resetDatabase" class="btn btn-secondary">
                  🔄 Reset Database
                </button>
              </div>

              <div v-if="sqliteDemo.showInfo" class="demo-explanation">
                <h5>📋 Informazioni Database:</h5>
                <ul>
                  <li><strong>Percorso:</strong> prisma/dev.db</li>
                  <li><strong>Tipo:</strong> SQLite 3</li>
                  <li><strong>Encoding:</strong> UTF-8</li>
                  <li><strong>Versioning:</strong> WAL (Write-Ahead Logging)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ❓ Quiz -->
          <div class="quiz-section">
            <h4>❓ Quiz: SQLite Basics</h4>
            <p><strong>Domanda:</strong> Qual è il vantaggio principale di SQLite?</p>
            
            <div class="quiz-options">
              <label class="quiz-option">
                <input type="radio" v-model="sqliteQuiz.answer" value="a" />
                A) È un database serverless che non richiede configurazione server
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="sqliteQuiz.answer" value="b" />
                B) È più veloce di tutti gli altri database
              </label>
              <label class="quiz-option">
                <input type="radio" v-model="sqliteQuiz.answer" value="c" />
                C) Supporta più utenti contemporaneamente
              </label>
            </div>
            
            <button @click="checkSQLiteQuiz" class="btn-quiz">Verifica Risposta</button>
            
            <div v-if="sqliteQuiz.showResult" :class="['quiz-result', sqliteQuiz.isCorrect ? 'correct' : 'incorrect']">
              {{ sqliteQuiz.result }}
            </div>
          </div>

          <!-- 🛠️ Esercizio Pratico -->
          <div class="exercise-section">
            <h4>🛠️ Esercizio: Gestisci il Database</h4>
            <p><strong>Obiettivo:</strong> Impara a gestire il database SQLite con comandi pratici</p>
            
            <div class="exercise-hint">
              <h5>💡 Suggerimenti:</h5>
              <ul>
                <li>Usa <code>npx prisma studio</code> per l'interfaccia grafica</li>
                <li>Usa <code>npx prisma migrate</code> per aggiornare lo schema</li>
                <li>Usa <code>npx prisma generate</code> per aggiornare il client</li>
              </ul>
            </div>

            <div class="exercise-demo">
              <h5>🎯 Simulatore Comandi Database:</h5>
              <div class="command-simulator">
                <div class="command-input">
                  <h6>Esegui comando:</h6>
                  <div class="command-buttons">
                    <button @click="executeCommand('studio')" class="btn-command">🖥️ npx prisma studio</button>
                    <button @click="executeCommand('migrate')" class="btn-command">🔄 npx prisma migrate dev</button>
                    <button @click="executeCommand('generate')" class="btn-command">⚙️ npx prisma generate</button>
                    <button @click="executeCommand('reset')" class="btn-command">🗑️ npx prisma migrate reset</button>
                  </div>
                </div>
                
                <div v-if="sqliteExercise.lastCommand" class="command-output">
                  <h6>Output del comando:</h6>
                  <pre>{{ sqliteExercise.lastCommand }}</pre>
                  <p class="command-result">{{ sqliteExercise.result }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 🔗 Integrazione con Prisma -->
          <div class="integration-section">
            <h4>🔗 Come SQLite si integra con Prisma</h4>
            <div class="integration-flow">
              <div class="flow-step">
                <h5>1. Prisma Schema</h5>
                <p>Definisce la struttura</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>2. SQLite File</h5>
                <p>Memorizza i dati</p>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-step">
                <h5>3. Prisma Client</h5>
                <p>Accede ai dati</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="nextStep" class="btn btn-primary">Prossimo Step →</button>
        </div>
      </div>

      <!-- Step 7: Integration Demo -->
      <div v-if="currentStep === 7" class="card tutorial-step">
        <div class="step-header">
          <h2>🎯 Step 7: Integrazione Completa</h2>
          <span class="step-badge">Tutte le Tecnologie</span>
        </div>
        
        <div class="step-content">
          <h3>Come Tutto Funziona Insieme</h3>
          <p>Ora vediamo come tutte le tecnologie lavorano insieme in un'applicazione reale.</p>
          
          <div class="integration-flow">
            <div class="flow-step">
              <h4>1. Vue 3 Component</h4>
              <p>L'utente interagisce con l'interfaccia Vue 3</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <h4>2. Pinia Store</h4>
              <p>Pinia gestisce lo stato dell'applicazione</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <h4>3. Nuxt 3 API</h4>
              <p>Nuxt gestisce le chiamate API</p>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <h4>4. Prisma ORM</h4>
              <p>Prisma interroga il database SQLite</p>
            </div>
          </div>
          
          <div class="interactive-demo">
            <h4>Demo Finale - App Completa:</h4>
            <div class="demo-container">
              <div class="final-app">
                <div class="form-section">
                  <h5>Crea Nuovo Utente:</h5>
                  <input v-model="finalDemo.email" placeholder="Email" />
                  <input v-model="finalDemo.name" placeholder="Nome" />
                  <button @click="createUserFinal" class="btn">Crea</button>
                </div>
                <div class="list-section">
                  <h5>Utenti nel Sistema:</h5>
                  <div v-for="user in userStore.users" :key="user.id" class="user-item">
                    <span>{{ user.email }}</span>
                    <span>{{ user.name || 'Senza nome' }}</span>
                    <button @click="deleteUser(user.id)" class="btn btn-danger">Elimina</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="prevStep" class="btn btn-secondary">← Precedente</button>
          <button @click="completeTutorial" class="btn btn-success">🎉 Completa Tutorial</button>
        </div>
      </div>

      <!-- Completion Step -->
      <div v-if="currentStep === 8" class="card tutorial-step">
        <div class="step-header">
          <h2>🎉 Tutorial Completato!</h2>
          <span class="step-badge">Successo</span>
        </div>
        
        <div class="step-content">
          <div class="completion-celebration">
            <h3>Congratulazioni! 🎊</h3>
            <p>Hai completato con successo il tutorial su tutte le tecnologie moderne!</p>
            
            <div class="technologies-learned">
              <h4>Tecnologie Apprese:</h4>
              <div class="tech-grid">
                <div class="tech-item">✅ Vue 3</div>
                <div class="tech-item">✅ Pinia</div>
                <div class="tech-item">✅ GraphQL</div>
                <div class="tech-item">✅ Nuxt 3</div>
                <div class="tech-item">✅ Prisma</div>
                <div class="tech-item">✅ SQLite</div>
              </div>
            </div>
            
            <div class="next-steps">
              <h4>Prossimi Passi:</h4>
              <ul>
                <li>📚 Leggi la documentazione ufficiale</li>
                <li>🛠️ Crea un progetto personale</li>
                <li>🌐 Esplora la community</li>
                <li>📖 Studia best practices</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="step-actions">
          <button @click="restartTutorial" class="btn btn-primary">🔄 Ricomincia Tutorial</button>
          <button @click="openDevTools" class="btn btn-secondary">🛠️ Apri DevTools</button>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="tutorial-navigation">
      <button @click="prevStep" :disabled="currentStep === 1" class="btn btn-secondary">
        ← Precedente
      </button>
      <span class="step-indicator">{{ currentStep }} di {{ totalSteps }}</span>
      <button @click="nextStep" :disabled="currentStep === totalSteps" class="btn btn-primary">
        Prossimo →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '~/stores/users'

const userStore = useUserStore()

// Tutorial state
const currentStep = ref(1)
const totalSteps = 8
const progressPercentage = computed(() => Math.round((currentStep.value / totalSteps) * 100))

// Demo states
const vueDemo = ref({
  count: 0,
  get doubleCount() { return this.count * 2 },
  quizAnswer: '',
  quizResult: '',
  exerciseNumber: 0,
  get squareNumber() { return this.exerciseNumber * this.exerciseNumber }
})

const piniaDemo = ref({
  count: 0,
  name: 'Contatore',
  get double() { return this.count * 2 },
  get greeting() { return `Ciao ${this.name}!` },
  increment() { this.count++ },
  decrement() { this.count-- },
  reset() { this.count = 0 }
})

const piniaQuiz = ref({
  answer: '',
  showResult: false,
  isCorrect: false,
  result: ''
})

const todoExercise = ref({
  newTodo: '',
  todos: [] as Array<{ text: string; completed: boolean }>
})

const nuxtDemo = ref({
  showInfo: false,
  version: '3.17.6',
  mode: 'Development',
  port: '3000'
})

const nuxtQuiz = ref({
  answer: '',
  showResult: false,
  isCorrect: false,
  result: ''
})

const nuxtExercise = ref({
  pageId: '',
  pages: [] as Array<{ id: string; createdAt: string }>
})

const prismaQuiz = ref({
  answer: '',
  showResult: false,
  isCorrect: false,
  result: ''
})

const prismaExercise = ref({
  modelName: '',
  models: [] as Array<{ name: string; createdAt: string }>
})

const graphqlQuiz = ref({
  answer: '',
  showResult: false,
  isCorrect: false,
  result: ''
})

const graphqlExercise = ref({
  type: 'query',
  selectedObject: 'User',
  availableFields: ['id', 'email', 'name', 'createdAt', 'posts'],
  selectedFields: ['id', 'email'],
  generatedQuery: ''
})

const sqliteDemo = ref({
  fileSize: '2.5 KB',
  status: 'Attivo',
  tableCount: 1,
  showInfo: false
})

const sqliteQuiz = ref({
  answer: '',
  showResult: false,
  isCorrect: false,
  result: ''
})

const sqliteExercise = ref({
  lastCommand: '',
  result: ''
})

const prismaDemo = ref({
  email: '',
  name: '',
  users: [] as Array<{ id: number; email: string; name?: string; createdAt: string; updatedAt: string }>
})

const graphqlDemo = ref({
  query: `query GetUsers {
  users {
    id
    email
    name
  }
}`,
  result: ''
})

const finalDemo = ref({
  email: '',
  name: ''
})

// Navigation methods
const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const restartTutorial = () => {
  currentStep.value = 1
}

// Demo methods
const testNuxtFeature = () => {
  alert('Feature Nuxt 3 testata! 🚀')
}

const checkQuizAnswer = () => {
  vueDemo.value.quizResult = vueDemo.value.quizAnswer === 'ref' ? 'correct' : 'incorrect'
}

const checkPiniaQuiz = () => {
  piniaQuiz.value.showResult = true
  piniaQuiz.value.isCorrect = piniaQuiz.value.answer === 'b'
  piniaQuiz.value.result = piniaQuiz.value.isCorrect 
    ? '✅ Corretto! Le actions aggiornano lo state globale e tutti i componenti si aggiornano automaticamente.' 
    : '❌ Sbagliato! Le actions in Pinia aggiornano lo state globale, non solo variabili locali.'
}

const addTodoExercise = () => {
  if (todoExercise.value.newTodo.trim()) {
    todoExercise.value.todos.push({
      text: todoExercise.value.newTodo,
      completed: false
    })
    todoExercise.value.newTodo = ''
  }
}

const removeTodoExercise = (index: number) => {
  todoExercise.value.todos.splice(index, 1)
}

const completedTodosCount = computed(() => {
  return todoExercise.value.todos.filter(todo => todo.completed).length
})

const showNuxtInfo = () => {
  nuxtDemo.value.showInfo = !nuxtDemo.value.showInfo
}

const testAutoImports = () => {
  alert('✅ Auto-imports funzionano! I componenti sono disponibili automaticamente.')
}

const checkNuxtQuiz = () => {
  nuxtQuiz.value.showResult = true
  nuxtQuiz.value.isCorrect = nuxtQuiz.value.answer === 'b'
  nuxtQuiz.value.result = nuxtQuiz.value.isCorrect 
    ? '✅ Corretto! In Nuxt 3, il file-based routing crea automaticamente le route basate sui file nella cartella pages/.' 
    : '❌ Sbagliato! Nuxt 3 usa il file-based routing, non la configurazione manuale del router.'
}

const createDynamicPage = () => {
  if (nuxtExercise.value.pageId.trim()) {
    nuxtExercise.value.pages.push({
      id: nuxtExercise.value.pageId,
      createdAt: new Date().toLocaleTimeString()
    })
    nuxtExercise.value.pageId = ''
  }
}

const fetchAllUsers = async () => {
  try {
    await userStore.fetchUsers()
    prismaDemo.value.users = userStore.users
  } catch (error) {
    console.error('Errore caricamento utenti:', error)
  }
}

const clearUsers = () => {
  prismaDemo.value.users = []
}

const checkPrismaQuiz = () => {
  prismaQuiz.value.showResult = true
  prismaQuiz.value.isCorrect = prismaQuiz.value.answer === 'a'
  prismaQuiz.value.result = prismaQuiz.value.isCorrect 
    ? '✅ Corretto! ORM significa Object-Relational Mapping e traduce oggetti JavaScript in tabelle database.' 
    : '❌ Sbagliato! ORM significa Object-Relational Mapping, non Online Resource Manager.'
}

const addModel = () => {
  if (prismaExercise.value.modelName.trim()) {
    prismaExercise.value.models.push({
      name: prismaExercise.value.modelName,
      createdAt: new Date().toLocaleTimeString()
    })
    prismaExercise.value.modelName = ''
  }
}

const loadQueryTemplate = (type: string) => {
  const templates = {
    users: `query GetUsers {
  users {
    id
    email
    name
    createdAt
  }
}`,
    user: `query GetUser($id: ID!) {
  user(id: $id) {
    id
    email
    name
    createdAt
  }
}`,
    create: `mutation CreateUser($email: String!, $name: String) {
  createUser(email: $email, name: $name) {
    id
    email
    name
    createdAt
  }
}`
  }
  graphqlDemo.value.query = templates[type as keyof typeof templates] || ''
}

const clearQuery = () => {
  graphqlDemo.value.query = ''
  graphqlDemo.value.result = ''
}

const checkGraphQLQuiz = () => {
  graphqlQuiz.value.showResult = true
  graphqlQuiz.value.isCorrect = graphqlQuiz.value.answer === 'a'
  graphqlQuiz.value.result = graphqlQuiz.value.isCorrect 
    ? '✅ Corretto! GraphQL permette di richiedere esattamente i dati necessari, evitando over-fetching e under-fetching.' 
    : '❌ Sbagliato! La differenza principale è che GraphQL permette di richiedere esattamente i dati necessari.'
}

const selectQueryType = (type: string) => {
  graphqlExercise.value.type = type
  graphqlExercise.value.selectedObject = type === 'query' ? 'User' : 'createUser'
  graphqlExercise.value.availableFields = type === 'query' 
    ? ['id', 'email', 'name', 'createdAt', 'posts'] 
    : ['id', 'email', 'name', 'createdAt']
  graphqlExercise.value.selectedFields = ['id', 'email']
}

const generateQuery = () => {
  const fields = graphqlExercise.value.selectedFields.join('\n    ')
  const operationName = graphqlExercise.value.type === 'query' ? 'GetUsers' : 'CreateUser'
  const operationType = graphqlExercise.value.type
  
  if (graphqlExercise.value.type === 'query') {
    graphqlExercise.value.generatedQuery = `${operationType} ${operationName} {
  users {
    ${fields}
  }
}`
  } else {
    graphqlExercise.value.generatedQuery = `${operationType} ${operationName}($email: String!, $name: String) {
  createUser(email: $email, name: $name) {
    ${fields}
  }
}`
  }
}

const backupDatabase = () => {
  alert('💾 Backup del database creato! Il file dev.db è stato copiato in dev_backup.db')
}

const resetDatabase = () => {
  if (confirm('⚠️ Sei sicuro di voler resettare il database? Tutti i dati verranno eliminati.')) {
    alert('🔄 Database resettato! Tutti i dati sono stati eliminati.')
    userStore.users = []
  }
}

const checkSQLiteQuiz = () => {
  sqliteQuiz.value.showResult = true
  sqliteQuiz.value.isCorrect = sqliteQuiz.value.answer === 'a'
  sqliteQuiz.value.result = sqliteQuiz.value.isCorrect 
    ? '✅ Corretto! SQLite è un database serverless che non richiede configurazione server, rendendolo perfetto per sviluppo e applicazioni semplici.' 
    : '❌ Sbagliato! Il vantaggio principale di SQLite è che è serverless e non richiede configurazione server.'
}

const executeCommand = (command: string) => {
  const commands = {
    studio: 'npx prisma studio',
    migrate: 'npx prisma migrate dev',
    generate: 'npx prisma generate',
    reset: 'npx prisma migrate reset'
  }
  
  const results = {
    studio: 'Prisma Studio avviato su http://localhost:5555',
    migrate: 'Migration completata con successo!',
    generate: 'Prisma Client generato con successo!',
    reset: 'Database resettato e migrazioni applicate!'
  }
  
  sqliteExercise.value.lastCommand = commands[command as keyof typeof commands] || ''
  sqliteExercise.value.result = results[command as keyof typeof results] || 'Comando eseguito!'
}

const createUserWithPrisma = async () => {
  try {
    const newUser = await userStore.createUser({
      email: prismaDemo.value.email,
      name: prismaDemo.value.name || undefined
    })
    if (newUser) {
      prismaDemo.value.users.push(newUser as any)
    }
    prismaDemo.value.email = ''
    prismaDemo.value.name = ''
  } catch (error) {
    console.error('Errore creazione utente:', error)
  }
}

const executeGraphQLQuery = async () => {
  try {
    // Simulate GraphQL query
    const response = await userStore.fetchUsers()
    graphqlDemo.value.result = JSON.stringify(response, null, 2)
  } catch (error) {
    graphqlDemo.value.result = `Errore: ${error.message}`
  }
}

const openPrismaStudio = () => {
  window.open('http://localhost:3001/__nuxt_devtools__/', '_blank')
}

const createUserFinal = async () => {
  try {
    await userStore.createUser({
      email: finalDemo.value.email,
      name: finalDemo.value.name || undefined
    })
    finalDemo.value.email = ''
    finalDemo.value.name = ''
  } catch (error) {
    console.error('Errore creazione utente:', error)
  }
}

const deleteUser = async (id: number) => {
  if (confirm('Sei sicuro di voler eliminare questo utente?')) {
    try {
      await userStore.deleteUser(id)
    } catch (error) {
      console.error('Errore eliminazione utente:', error)
    }
  }
}

const completeTutorial = () => {
  currentStep.value = 8
}

const openDevTools = () => {
  window.open('http://localhost:3001/__nuxt_devtools__/', '_blank')
}

onMounted(() => {
  userStore.fetchUsers()
})
</script>

<style scoped>
.tutorial-header {
  text-align: center;
  margin-bottom: 2rem;
}

.progress-container {
  position: relative;
  background: #f0f0f0;
  border-radius: 10px;
  height: 20px;
  margin: 1rem 0;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  height: 100%;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  font-weight: bold;
  color: #333;
}

.tutorial-step {
  margin-bottom: 2rem;
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.step-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.step-content {
  margin-bottom: 2rem;
}

.glossary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.glossary-item {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.explanation-section {
  margin-bottom: 2rem;
}

.analogy-box {
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}

.concept-explanation {
  margin-bottom: 2rem;
}

.concept-item {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.demo-instructions {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.demo-step {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.demo-step label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.demo-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.demo-input:focus {
  outline: none;
  border-color: #667eea;
}

.result-display {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-demo {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s;
}

.btn-demo:hover {
  transform: translateY(-2px);
}

.quiz-section {
  background: #fff3e0;
  border: 1px solid #ff9800;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.quiz-option {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: white;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.quiz-option:hover {
  border-color: #667eea;
}

.quiz-option input[type="radio"] {
  margin-right: 0.5rem;
}

.btn-quiz {
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin: 1rem 0;
}

.quiz-result {
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: bold;
}

.quiz-result.correct {
  background: #e8f5e8;
  color: #2e7d32;
  border: 1px solid #4caf50;
}

.quiz-result.incorrect {
  background: #ffebee;
  color: #c62828;
  border: 1px solid #f44336;
}

.exercise-section {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.exercise-hint {
  background: rgba(156, 39, 176, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.exercise-hint code {
  background: #333;
  color: #fff;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.exercise-demo {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.code-example {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.interactive-demo {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #e9ecef;
}

.demo-container {
  margin-top: 1rem;
}

.form-group {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.form-group input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.graphql-playground {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.query-section textarea {
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
}

.result-section pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 4px;
  height: 150px;
  overflow-y: auto;
  font-size: 0.8rem;
}

.integration-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.flow-step {
  text-align: center;
  flex: 1;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #667eea;
  margin: 0 1rem;
}

.final-app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;
}

.completion-celebration {
  text-align: center;
  padding: 2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tech-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.next-steps ul {
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.next-steps li {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
}

.step-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.tutorial-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 2rem;
}

.step-indicator {
  font-weight: bold;
  color: #667eea;
}

.btn-success {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.stat-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.9;
}

/* New styles for enhanced Pinia section */
.learning-objective {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.glossary-section {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.glossary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.glossary-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.analogy {
  background: #fff3e0;
  border: 1px solid #ff9800;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.analogy ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.analogy li {
  margin: 0.5rem 0;
}

.why-pinia {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.why-pinia ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.why-pinia li {
  margin: 0.5rem 0;
}

.demo-info {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.demo-controls {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.demo-explanation {
  background: rgba(102, 126, 234, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.integration-section {
  background: #f3e5f5;
  border: 1px solid #9c27b0;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.btn-small {
  background: #f44336;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

/* Additional styles for Nuxt 3 section */
.why-nuxt {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.why-nuxt ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.why-nuxt li {
  margin: 0.5rem 0;
}

.dynamic-pages {
  margin-top: 1rem;
}

.page-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.page-item span {
  font-size: 0.9rem;
}

/* Additional styles for Prisma section */
.why-prisma {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.why-prisma ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.why-prisma li {
  margin: 0.5rem 0;
}

.demo-results {
  margin-top: 1rem;
}

.user-list {
  max-height: 300px;
  overflow-y: auto;
}

.user-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.user-email {
  font-weight: bold;
  color: #333;
}

.user-name {
  font-size: 0.9rem;
  color: #666;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

.schema-builder {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.model-creator {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.models-list {
  margin-top: 1rem;
}

.model-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.model-item span {
  font-size: 0.9rem;
}

/* Additional styles for GraphQL section */
.why-graphql {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.why-graphql ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.why-graphql li {
  margin: 0.5rem 0;
}

.query-templates {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.btn-template {
  background: #f0f0f0;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-template:hover {
  background: #e0e0e0;
  border-color: #2196f3;
}

.query-editor {
  width: 100%;
  height: 150px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  resize: vertical;
  background: #f8f9fa;
}

.query-controls {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.result-container {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 8px;
  height: 200px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.result-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  font-style: italic;
}

.query-builder {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.query-type-selector {
  margin-bottom: 1.5rem;
}

.query-types {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-type {
  background: #f0f0f0;
  border: 2px solid #ddd;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-type.active {
  background: #2196f3;
  color: white;
  border-color: #2196f3;
}

.field-selector {
  margin-bottom: 1.5rem;
}

.field-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.field-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.field-option:hover {
  background: #e9ecef;
}

.generated-query {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.generated-query pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
}

/* Additional styles for SQLite section */
.why-sqlite {
  background: #e8f5e8;
  border: 1px solid #4caf50;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
}

.why-sqlite ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.why-sqlite li {
  margin: 0.5rem 0;
}

.command-simulator {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.command-input {
  margin-bottom: 1.5rem;
}

.command-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.btn-command {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.2s;
}

.btn-command:hover {
  background: #e9ecef;
  border-color: #4caf50;
}

.command-output {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-top: 1rem;
}

.command-output pre {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.command-result {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 0.5rem;
  font-weight: 500;
}
</style>
