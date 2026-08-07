from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import List
import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ton site Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Modèles ---
class TextRequest(BaseModel):
    content: str

class AnalyseResult(BaseModel):
    id: str
    titre: str
    resume: str
    consigne: str
    indices: List[str]
    chaine: List[dict]

# --- Routes ---
@app.post("/api/text/analyze", response_model=AnalyseResult)
async def analyze_text(req: TextRequest):
    now = datetime.datetime.now().strftime("%H:%M")
    return AnalyseResult(
        id="HY-2026-00482",
        titre="Analyse de texte",
        resume="Le texte soumis contient des éléments suspects.",
        consigne="Attention au contenu suspect.",
        indices=["Mot clé détecté", "Structure inhabituelle"],
        chaine=[
            {"heure": now, "label": "Texte soumis", "texte": req.content},
            {"heure": now, "label": "Analyse NLP", "texte": "Détection de mots clés"},
            {"heure": now, "label": "Résultat généré", "texte": "Blocage recommandé"}
        ]
    )

@app.post("/api/audio/transcribe", response_model=AnalyseResult)
async def transcribe_audio(file: UploadFile = File(...)):
    now = datetime.datetime.now().strftime("%H:%M")
    return AnalyseResult(
        id="HY-2026-00483",
        titre="Analyse audio",
        resume="Le fichier audio contient des phrases suspectes.",
        consigne="Blocage recommandé.",
        indices=["Ton de voix suspect", "Mot clé détecté"],
        chaine=[
            {"heure": now, "label": "Audio soumis", "texte": file.filename},
            {"heure": now, "label": "Transcription", "texte": "Texte transcrit"},
            {"heure": now, "label": "Résultat généré", "texte": "Blocage recommandé"}
        ]
    )

@app.post("/api/image/analyze-image", response_model=AnalyseResult)
async def analyze_image(file: UploadFile = File(...)):
    now = datetime.datetime.now().strftime("%H:%M")
    return AnalyseResult(
        id="HY-2026-00484",
        titre="Analyse image",
        resume="L'image contient des éléments suspects.",
        consigne="Blocage recommandé.",
        indices=["Objet suspect détecté", "Contexte inhabituel"],
        chaine=[
            {"heure": now, "label": "Image soumise", "texte": file.filename},
            {"heure": now, "label": "Analyse vision", "texte": "Objet détecté"},
            {"heure": now, "label": "Résultat généré", "texte": "Blocage recommandé"}
        ]
    )
