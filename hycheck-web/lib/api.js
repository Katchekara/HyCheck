export async function analyzeText(text) {
  const res = await fetch("http://127.0.0.1:8000/api/text/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Erreur API");
  }

  return res.json();
}
