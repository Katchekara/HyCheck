import spacy
import nltk
from nltk.tokenize import word_tokenize
from backend.app.models.ml_models import nlp

#  Téléchargement automatique des ressources NLTK si elles ne sont pas déjà présentes
try:
    nltk.data.find("tokenizers/punkt")
except LookupError:
    nltk.download("punkt")

try:
    nltk.data.find("tokenizers/punkt_tab")
except LookupError:
    nltk.download("punkt_tab")

# Chargement du modèle SpaCy français
nlp = spacy.load("fr_core_news_md")

def analyze_text(content: str) -> dict:
    # Analyse SpaCy
    doc = nlp(content)
    entities = [(ent.text, ent.label_) for ent in doc.ents]

    # Tokenisation NLTK
    tokens = word_tokenize(content.lower())

    # Liste de mots suspects (à enrichir selon ton projet)
    keywords = [
        "complot", "fake", "infox", "mensonge",
        "vaccin", "puces", "puce", "virus", "covid", "arnaque"
    ]
    suspicious = [word for word in tokens if word in keywords]

    # Score de risque simple basé sur densité de mots suspects
    risk_score = round((len(suspicious) / max(1, len(tokens))) * 100, 2)

    return {
        "entities": entities,
        "suspicious_words": suspicious,
        "risk_score": risk_score
    }