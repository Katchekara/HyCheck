from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.vision_service import analyze_image
from app.utils.file_utils import validate_file_extension, validate_file_size, save_temp_file

router = APIRouter()

@router.post("/analyze")
async def analyze_image_route(file: UploadFile = File(...)):
    # Vérification extension
    if not validate_file_extension(file.filename, [".jpg", ".jpeg", ".png"]):
        raise HTTPException(status_code=400, detail="Format image non supporté")

    # Vérification taille
    if not validate_file_size(file.file, max_size_mb=5):
        raise HTTPException(status_code=400, detail="Image trop volumineuse (>5MB)")

    # Sauvegarde temporaire
    image_path = save_temp_file(file.file, prefix="temp_")

    # Analyse
    result = analyze_image(image_path)
    return {"filename": file.filename, "analysis": result}
