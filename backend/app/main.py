from fastapi import FastAPI
from app.routes import text, audio, image

app = FastAPI(title="HyCheck API ")

app.include_router(text.router, prefix="/text", tags=["Text"])
app.include_router(audio.router, prefix="/audio", tags=["Audio"])
app.include_router(image.router, prefix="/image", tags=["Image"])

@app.get("/")
def root():
    return {"message": "Bienvenue sur HyCheck API 🚀"}
