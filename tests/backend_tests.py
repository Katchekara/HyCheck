import unittest
import json
import csv
from backend.app.services.nlp_service import analyze_text
from backend.app.services.audio_service import transcribe_audio
from backend.app.services.vision_service import analyze_image


class HyCheckTests(unittest.TestCase):

    def test_text_dataset(self):
        with open("data/datasets/text_dataset.csv", newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                result = analyze_text(row["text"])
                print(f"Text: {row['text']} | Label: {row['label']} | Risk: {result['risk_score']}")
                # Vérification simple : si label = douteux, risque > 20
                if row["label"] == "douteux":
                    self.assertGreater(result["risk_score"], 20)
                else:
                    self.assertLessEqual(result["risk_score"], 20)

    def test_audio_dataset(self):
        with open("data/datasets/audio_dataset/transcripts.json", encoding="utf-8") as f:
            dataset = json.load(f)
            for row in dataset:
                # Ici on ne relance pas Whisper (coûteux), on compare transcription connue
                result = analyze_text(row["transcription"])
                print(f"Audio: {row['filename']} | Label: {row['label']} | Risk: {result['risk_score']}")
                if row["label"] == "douteux":
                    self.assertGreater(result["risk_score"], 20)
                else:
                    self.assertLessEqual(result["risk_score"], 20)

    def test_image_dataset(self):
        with open("data/datasets/image_dataset/emotions_labels.csv", newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                 result = analyze_image(f"data/datasets/image_dataset/faces/{row['filename']}")
                 print("Image result:", result)  # debug
                 emotion = result.get("dominant_emotion") or result.get("emotion")
            self.assertIsNotNone(emotion, "Pas d'émotion détectée")


if __name__ == "__main__":
    unittest.main()
