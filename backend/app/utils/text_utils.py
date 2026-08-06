import re

def clean_text(text: str) -> str:
    """
    Nettoie le texte : minuscules, suppression des caractères spéciaux.
    """
    text = text.lower()
    text = re.sub(r"[^a-zA-ZÀ-ÿ\s]", "", text)
    return text.strip()

def normalize_score(value: float, min_val=0, max_val=100) -> float:
    """
    Normalise un score entre 0 et 100.
    """
    return max(min_val, min(max_val, round(value, 2)))
