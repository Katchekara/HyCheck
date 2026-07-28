from deepface import DeepFace

def analyze_image(file_path: str) -> dict:
    """
    Analyse une image avec DeepFace pour détecter les émotions.
    Retourne les émotions dominantes et un score de risque simple.
    """
    try:
        # Analyse des émotions
        result = DeepFace.analyze(
            img_path=file_path,
            actions=['emotion'],
            enforce_detection=False
        )

        # Récupérer l’émotion dominante
        dominant_emotion = result[0]['dominant_emotion']
        emotions = result[0]['emotion']

        # Exemple de logique de risque :
        # Si l’émotion dominante est "fear" ou "angry", on considère un risque plus élevé
        risk_map = {
            "fear": 70,
            "angry": 60,
            "sad": 40,
            "disgust": 50,
            "surprise": 30,
            "neutral": 10,
            "happy": 5
        }
        risk_score = risk_map.get(dominant_emotion, 20)

        return {
            "dominant_emotion": dominant_emotion,
            "emotions": emotions,
            "risk_score": risk_score
        }

    except Exception as e:
        return {"error": str(e)}
