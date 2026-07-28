import spacy
import whisper
from deepface import DeepFace
import nltk

#  Téléchargement automatique des ressources NLTK
try:
    nltk.data.find("tokenizers/punkt")
except LookupError:
    nltk.download("punkt")

try:
    nltk.data.find("tokenizers/punkt_tab")
except LookupError:
    nltk.download("punkt_tab")

# Chargement des modèles ML
nlp = spacy.load("fr_core_news_md")        # NLP français
whisper_model = whisper.load_model("base") # Transcription audio
# DeepFace sera appelé directement dans les services (pas besoin de préchargement)
