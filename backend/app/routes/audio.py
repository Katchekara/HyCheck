from fastapi import APIRouter, UploadFile, File, HTTPException
from backend.app.services.audio_service import transcribe_audio
from backend.app.utils.file_utils import validate_file_extension, validate_file_size, save_temp_file

router = APIRouter()

@router.post("/transcribe")
async def transcribe_audio_route(file: UploadFile = File(...)):
    # Vérification extension
    if not validate_file_extension(file.filename, [".mp3", ".wav"]):
        raise HTTPException(status_code=400, detail="Format audio non supporté")

    # Vérification taille
    if not validate_file_size(file.file, max_size_mb=10):
        raise HTTPException(status_code=400, detail="Fichier trop volumineux (>10MB)")

    # Sauvegarde temporaire
    audio_path = save_temp_file(file.file, prefix="temp_")

    # Transcription + analyse
    result = transcribe_audio(audio_path)
    return result
