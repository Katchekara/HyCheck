import os

def save_temp_file(file, prefix="temp_"):
    """
    Sauvegarde un fichier uploadé dans un chemin temporaire.
    """
    path = f"{prefix}{file.filename}"
    with open(path, "wb") as f:
        f.write(file)
    return path

def validate_file_extension(filename, allowed_extensions):
    """
    Vérifie que l'extension du fichier est autorisée.
    """
    ext = os.path.splitext(filename)[1].lower()
    return ext in allowed_extensions

def validate_file_size(file, max_size_mb=10):
    """
    Vérifie que la taille du fichier ne dépasse pas la limite.
    """
    file.seek(0, os.SEEK_END)
    size_mb = file.tell() / (1024 * 1024)
    file.seek(0)
    return size_mb <= max_size_mb
