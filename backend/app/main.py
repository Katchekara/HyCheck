from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import text, audio, image

app = FastAPI(
    title="HyCheck API",
    description="API pour analyser texte, audio et image",
    version="1.0.0",
)

# Configuration CORS pour autoriser ton frontend Next.js (port 3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL du frontend Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusion des routes
app.include_router(text.router, prefix="/api/text", tags=["text"])
app.include_router(audio.router, prefix="/api/audio", tags=["audio"])
app.include_router(image.router, prefix="/api/image", tags=["image"])

# Route racine pour tester
@app.get("/")
def root():
    return {"message": "Bienvenue sur HyCheck API"}
