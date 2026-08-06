from pydantic import BaseModel

class TextRequest(BaseModel):
    content: str

class AudioRequest(BaseModel):
    filename: str

class ImageRequest(BaseModel):
    filename: str
