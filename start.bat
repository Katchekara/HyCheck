@echo off
echo  Lancement du backend FastAPI...
start cmd /k "cd backend && uvicorn app.main:app --reload"

echo  Lancement du frontend Next.js...
start cmd /k "cd hycheck-web && npm run dev"

echo  Les deux serveurs sont lancés !
pause
