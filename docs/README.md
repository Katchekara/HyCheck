
# HyCheck 

HyCheck est une plateforme hybride de **détection multimodale** (texte, image, voix) qui combine **IA** et **fact-checking humain** pour lutter contre la désinformation.  
Développé dans le cadre d’un **Hackathon**, HyCheck démontre comment l’IA peut assister les vérificateurs humains pour repérer rapidement les infox et améliorer la fiabilité des contenus.

---

##  Fonctionnalités
- **Analyse de textes** : détection de mots-clés suspects, incohérences et sources douteuses (SpaCy, NLTK).  
- **Transcription audio → texte** : reconnaissance vocale locale avec Whisper.  
- **Détection d’images truquées** : analyse visuelle avec OpenCV et DeepFace.  
- **Dashboard interactif** : interface web (React/Vue.js) pour visualiser les alertes et scores de fiabilité.  
- **API REST** : backend en FastAPI pour exposer les services IA.  

---

##  Structure du projet
HyCheck/
│── backend/          # API et modules IA
│   ├── app/          # Code FastAPI
│   ├── services/     # NLP, Speech-to-Text, Vision
│   ├── models/       # Modèles ML locaux
│   └── requirements.txt
│
│── frontend/         # Interface utilisateur (React/Vue.js)
│   ├── src/          # Composants et pages
│   └── package.json
│
│── data/             # Données de test (audio, textes, images)
│── docs/             # Documentation (README, schémas, démo)
│── tests/            # Tests unitaires et intégration
└── .gitignore


---

##  Installation & Démo

### Lancer le backend & le frontend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

### cd frontend
npm install
npm run dev

## Lancer automatiquement (Windows)
double clique sur le fichier start.bat
