from fastapi import APIRouter
from pydantic import BaseModel
from app.services.nlp_service import analyze_text
from app.utils.text_utils import clean_text

router = APIRouter()

class TextRequest(BaseModel):
    content: str

@router.post("/analyze")
def analyze_text_route(request: TextRequest):
    # Nettoyage du texte avant analyse
    cleaned = clean_text(request.content)
    result = analyze_text(cleaned)
    return {"text": request.content, "analysis": result}
