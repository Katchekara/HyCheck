import whisper
import asyncio
import os
from backend.app.models.ml_models import whisper_model
from backend.app.services.nlp_service import analyze_text

model = whisper.load_model("base")

async def transcribe_audio(file_path: str) -> dict:
    """
    Transcrit un fichier audio avec Whisper et analyse le texte transcrit.
    """
    # Étape 1 : Transcription avec Whisper
    result = whisper_model.transcribe(file_path)
    transcription = result["text"]

    # Étape 2 : Analyse NLP du texte transcrit
    text_analysis = analyze_text(transcription)

    # Étape 3 : Retourner un JSON complet
    return {
        "transcription": transcription,
        "analysis": text_analysis
    }
