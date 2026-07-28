import csv

def load_text_dataset(path="data/datasets/text_dataset.csv"):
    dataset = []
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            dataset.append({"id": row["id"], "text": row["text"], "label": row["label"]})
    return dataset
