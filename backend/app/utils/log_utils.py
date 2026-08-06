import datetime

def log_request(endpoint: str, user_ip: str, extra: dict = None):
    """
    Log simple pour suivre les requêtes.
    """
    timestamp = datetime.datetime.now().isoformat()
    log_entry = {
        "time": timestamp,
        "endpoint": endpoint,
        "ip": user_ip,
        "extra": extra or {}
    }
    print(log_entry)  # En prod, remplacer par un vrai logger
