<template>
  <div class="tutorial-container">
    <!-- Header -->
    <header class="header">
      <h1>🎓 Tutorial Interattivo Sviluppo Web</h1>
      <p>Impara Vue 3, Pinia e Nuxt 3 passo dopo passo</p>
    </header>

    <!-- Navigation -->
    <nav class="navigation">
      <button 
        v-for="(step, index) in tutorialSteps" 
        :key="index"
        @click="currentStep = index"
        :class="{ active: currentStep === index }"
        class="nav-button"
      >
        {{ step.title }}
      </button>
    </nav>

    <!-- Tutorial Content -->
    <main class="main-content">
      <div class="step-content">
        <h2>{{ tutorialSteps[currentStep].title }}</h2>
        
        <!-- Vue 3 Step -->
        <div v-if="currentStep === 0" class="step-section">
          <div class="glossary">
            <h3>📚 Glossario</h3>
            <div class="glossary-item">
              <strong>Componente:</strong> Un blocco riutilizzabile di codice che rappresenta una parte dell'interfaccia
            </div>
            <div class="glossary-item">
              <strong>Reattività:</strong> La capacità di Vue di aggiornare automaticamente l'interfaccia quando i dati cambiano
            </div>
            <div class="glossary-item">
              <strong>Template:</strong> La parte HTML che definisce la struttura del componente
            </div>
          </div>

          <div class="analogy">
            <h3>🔍 Analogia</h3>
            <p>Pensa a Vue come a una <strong>casa intelligente</strong>:</p>
            <ul>
              <li>📱 <strong>Template</strong> = I muri e le stanze (struttura visibile)</li>
              <li>⚙️ <strong>Script</strong> = L'impianto elettrico e i controlli (logica)</li>
              <li>🎨 <strong>Style</strong> = L'arredamento e i colori (aspetto)</li>
            </ul>
          </div>

          <div class="interactive-demo">
            <h3>🎮 Demo Interattiva</h3>
            <div class="demo-container">
              <div class="counter-demo">
                <h4>Contatore Reattivo</h4>
                <p>Contatore: {{ counter }}</p>
                <button @click="counter++" class="demo-button">+1</button>
                <button @click="counter--" class="demo-button">-1</button>
                <button @click="counter = 0" class="demo-button">Reset</button>
              </div>
              
              <div class="input-demo">
                <h4>Input Reattivo</h4>
                <input v-model="userName" placeholder="Scrivi il tuo nome" class="demo-input">
                <p v-if="userName">Ciao, {{ userName }}! 👋</p>
              </div>
            </div>
          </div>

          <div class="quiz">
            <h3>❓ Quiz</h3>
            <div class="quiz-question">
              <p><strong>Domanda:</strong> Cosa succede quando clicchi il pulsante "+1"?</p>
              <div class="quiz-options">
                <label><input type="radio" v-model="quiz1" value="a"> A) Niente</label>
                <label><input type="radio" v-model="quiz1" value="b"> B) Il contatore aumenta di 1</label>
                <label><input type="radio" v-model="quiz1" value="c"> C) La pagina si ricarica</label>
              </div>
              <div v-if="quiz1 === 'b'" class="correct-answer">✅ Corretto! La reattività di Vue aggiorna automaticamente l'interfaccia.</div>
            </div>
          </div>

          <div class="exercise">
            <h3>💪 Esercizio</h3>
            <p>Crea un nuovo contatore che si incrementa di 2 invece di 1:</p>
            <div class="exercise-demo">
              <p>Contatore x2: {{ counter2 }}</p>
              <button @click="counter2 += 2" class="demo-button">+2</button>
              <button @click="counter2 = 0" class="demo-button">Reset</button>
            </div>
          </div>
        </div>

        <!-- Pinia Step -->
        <div v-if="currentStep === 1" class="step-section">
          <div class="glossary">
            <h3>📚 Glossario</h3>
            <div class="glossary-item">
              <strong>Store:</strong> Un contenitore centralizzato per gestire lo stato dell'applicazione
            </div>
            <div class="glossary-item">
              <strong>State:</strong> I dati che vengono gestiti dallo store
            </div>
            <div class="glossary-item">
              <strong>Actions:</strong> Metodi che modificano lo stato
            </div>
          </div>

          <div class="analogy">
            <h3>🔍 Analogia</h3>
            <p>Pensa a Pinia come a una <strong>banca centrale</strong>:</p>
            <ul>
              <li>💰 <strong>State</strong> = I soldi nelle casseforti (dati)</li>
              <li>🏦 <strong>Actions</strong> = Le operazioni bancarie (modifiche)</li>
              <li>📊 <strong>Getters</strong> = I conti correnti (accesso ai dati)</li>
            </ul>
          </div>

          <div class="interactive-demo">
            <h3>🎮 Demo Interattiva</h3>
            <div class="demo-container">
              <div class="user-store-demo">
                <h4>Gestione Utenti</h4>
                <div class="user-form">
                  <input v-model="newUser.name" placeholder="Nome utente" class="demo-input">
                  <input v-model="newUser.email" placeholder="Email" class="demo-input">
                  <button @click="addUser" class="demo-button">Aggiungi Utente</button>
                </div>
                
                <div class="users-list">
                  <h5>Utenti Registrati:</h5>
                  <div v-for="user in users" :key="user.id" class="user-item">
                    <span>{{ user.name }} ({{ user.email }})</span>
                    <button @click="removeUser(user.id)" class="demo-button small">❌</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quiz">
            <h3>❓ Quiz</h3>
            <div class="quiz-question">
              <p><strong>Domanda:</strong> Dove vengono memorizzati i dati degli utenti?</p>
              <div class="quiz-options">
                <label><input type="radio" v-model="quiz2" value="a"> A) Nel database</label>
                <label><input type="radio" v-model="quiz2" value="b"> B) Nello store Pinia</label>
                <label><input type="radio" v-model="quiz2" value="c"> C) Nei cookies</label>
              </div>
              <div v-if="quiz2 === 'b'" class="correct-answer">✅ Corretto! I dati sono gestiti dallo store Pinia.</div>
            </div>
          </div>
        </div>

        <!-- Nuxt 3 Step -->
        <div v-if="currentStep === 2" class="step-section">
          <div class="glossary">
            <h3>📚 Glossario</h3>
            <div class="glossary-item">
              <strong>SSR:</strong> Server-Side Rendering - il rendering avviene sul server
            </div>
            <div class="glossary-item">
              <strong>SPA:</strong> Single Page Application - applicazione a pagina singola
            </div>
            <div class="glossary-item">
              <strong>Auto-imports:</strong> Importazione automatica di componenti e composables
            </div>
          </div>

          <div class="analogy">
            <h3>🔍 Analogia</h3>
            <p>Pensa a Nuxt come a un <strong>ristorante completo</strong>:</p>
            <ul>
              <li>🍽️ <strong>Pages</strong> = I piatti del menu (pagine)</li>
              <li>👨‍🍳 <strong>Server</strong> = La cucina (backend)</li>
              <li>🚚 <strong>Routing</strong> = I camerieri (navigazione)</li>
            </ul>
          </div>

          <div class="interactive-demo">
            <h3>🎮 Demo Interattiva</h3>
            <div class="demo-container">
              <div class="nuxt-features">
                <h4>Caratteristiche Nuxt 3</h4>
                <div class="feature-item">
                  <span>✅ Auto-imports attivi</span>
                </div>
                <div class="feature-item">
                  <span>✅ File-based routing</span>
                </div>
                <div class="feature-item">
                  <span>✅ Server-side rendering</span>
                </div>
                <div class="feature-item">
                  <span>✅ Hot module replacement</span>
                </div>
              </div>
            </div>
          </div>

          <div class="quiz">
            <h3>❓ Quiz</h3>
            <div class="quiz-question">
              <p><strong>Domanda:</strong> Cosa significa SSR in Nuxt?</p>
              <div class="quiz-options">
                <label><input type="radio" v-model="quiz3" value="a"> A) Single Server Response</label>
                <label><input type="radio" v-model="quiz3" value="b"> B) Server-Side Rendering</label>
                <label><input type="radio" v-model="quiz3" value="c"> C) Static Site Rendering</label>
              </div>
              <div v-if="quiz3 === 'b'" class="correct-answer">✅ Corretto! SSR significa Server-Side Rendering.</div>
            </div>
          </div>
        </div>

        <!-- Integration Step -->
        <div v-if="currentStep === 3" class="step-section">
          <div class="integration-overview">
            <h3>🔗 Come Tutto Funziona Insieme</h3>
            <div class="integration-diagram">
              <div class="layer">
                <h4>🎨 Frontend (Vue 3 + Nuxt 3)</h4>
                <p>Interfaccia utente reattiva e moderna</p>
              </div>
              <div class="layer">
                <h4>📦 State Management (Pinia)</h4>
                <p>Gestione centralizzata dello stato</p>
              </div>
              <div class="layer">
                <h4>🌐 API Layer (Nuxt Server)</h4>
                <p>Comunicazione con il server tramite API routes</p>
              </div>
            </div>
          </div>

          <div class="final-quiz">
            <h3>🎯 Quiz Finale</h3>
            <div class="quiz-question">
              <p><strong>Domanda:</strong> Quale tecnologia gestisce lo stato dell'applicazione?</p>
              <div class="quiz-options">
                <label><input type="radio" v-model="finalQuiz" value="a"> A) Vue 3</label>
                <label><input type="radio" v-model="finalQuiz" value="b"> B) Pinia</label>
                <label><input type="radio" v-model="finalQuiz" value="c"> C) Nuxt 3</label>
              </div>
              <div v-if="finalQuiz === 'b'" class="correct-answer">✅ Perfetto! Pinia gestisce lo stato globale dell'applicazione.</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>🎓 Tutorial creato con ❤️ per imparare lo sviluppo web moderno</p>
      <p>📚 Disponibile su <a href="https://github.com/Alesx99/TutorialSviluppo" target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script setup>
// Reactive data
const currentStep = ref(0)
const counter = ref(0)
const counter2 = ref(0)
const userName = ref('')
const quiz1 = ref('')
const quiz2 = ref('')
const quiz3 = ref('')
const finalQuiz = ref('')

// User management
const newUser = ref({ name: '', email: '' })
const users = ref([
  { id: 1, name: 'Mario Rossi', email: 'mario@example.com' },
  { id: 2, name: 'Giulia Bianchi', email: 'giulia@example.com' }
])

const addUser = () => {
  if (newUser.value.name && newUser.value.email) {
    users.value.push({
      id: users.value.length + 1,
      name: newUser.value.name,
      email: newUser.value.email
    })
    newUser.value = { name: '', email: '' }
  }
}

const removeUser = (id) => {
  users.value = users.value.filter(user => user.id !== id)
}

// Tutorial steps
const tutorialSteps = [
  { title: 'Vue 3 - Fondamenti' },
  { title: 'Pinia - State Management' },
  { title: 'Nuxt 3 - Framework' },
  { title: 'Integrazione Completa' }
]
</script>

<style scoped>
.tutorial-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  text-align: center;
  padding: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  flex-wrap: wrap;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.nav-button.active {
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.step-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
}

.step-content h2 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 1rem;
}

.step-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.glossary, .analogy, .interactive-demo, .quiz, .exercise {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 5px solid #667eea;
}

.glossary h3, .analogy h3, .interactive-demo h3, .quiz h3, .exercise h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.glossary-item {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  border-left: 3px solid #28a745;
}

.analogy ul {
  list-style: none;
  padding: 0;
}

.analogy li {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  border-left: 3px solid #ffc107;
}

.demo-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.counter-demo, .input-demo, .user-store-demo, .nuxt-features {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.demo-button {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.demo-button:hover {
  background: #5a6fd8;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.demo-button.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.demo-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.demo-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.user-form {
  margin-bottom: 1.5rem;
}

.users-list {
  max-height: 200px;
  overflow-y: auto;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.feature-item {
  padding: 0.5rem;
  background: #e8f5e8;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border-left: 3px solid #28a745;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.quiz-options label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quiz-options label:hover {
  background: #e9ecef;
}

.correct-answer {
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  border-left: 5px solid #28a745;
  margin-top: 1rem;
  font-weight: 500;
}

.integration-overview {
  text-align: center;
  margin-bottom: 2rem;
}

.integration-diagram {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.layer {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.layer h4 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.footer {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  color: white;
}

.footer a {
  color: #ffd700;
  text-decoration: none;
  font-weight: 500;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .navigation {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 300px;
  }
  
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .step-content {
    padding: 1rem;
  }
}
</style>

