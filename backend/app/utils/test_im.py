import csv

def load_image_dataset(path="data/datasets/image_dataset/emotions_labels.csv"):
    dataset = []
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            dataset.append({
                "id": row["id"],
                "filename": row["filename"],
                "dominant_emotion": row["dominant_emotion"],
                "label": row["label"]
            })
    return dataset

