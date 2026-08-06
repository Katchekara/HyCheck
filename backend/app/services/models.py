import spacy
import nltk
from nltk.tokenize import word_tokenize
import whisper
from deepface import DeepFace

#  Téléchargement automatique des ressources NLTK
try:
    nltk.data.find("tokenizers/punkt")
except LookupError:
    nltk.download("punkt")

try:
    nltk.data.find("tokenizers/punkt_tab")
except LookupError:
    nltk.download("punkt_tab")

# Chargement des modèles
nlp = spacy.load("fr_core_news_md")   # NLP français
whisper_model = whisper.load_model("base")  # Transcription audio
# DeepFace n’a pas besoin de préchargement, il s’initialise à la volée

# -------------------------------
#  Analyse de texte
# -------------------------------
def analyze_text(content: str) -> dict:
    doc = nlp(content)
    entities = [(ent.text, ent.label_) for ent in doc.ents]

    tokens = word_tokenize(content.lower())
    keywords = [
        "complot", "fake", "infox", "mensonge",
        "vaccin", "puces", "puce", "virus", "covid", "arnaque"
    ]
    suspicious = [word for word in tokens if word in keywords]

    # Score de risque simple
    risk_score = round((len(suspicious) / max(1, len(tokens))) * 100, 2)

    return {
        "entities": entities,
        "suspicious_words": suspicious,
        "risk_score": risk_score
    }

# -------------------------------
#  Transcription audio
# -------------------------------
def transcribe_audio(file_path: str) -> dict:
    result = whisper_model.transcribe(file_path)
    return {"transcription": result["text"]}

# -------------------------------
#  Analyse image
# -------------------------------
def analyze_image(file_path: str) -> dict:
    result = DeepFace.analyze(file_path, actions=['emotion'], enforce_detection=False)
    return {"analysis": result}
