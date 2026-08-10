@echo off
title KlassenCloud
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js wurde nicht gefunden.
  echo Bitte installiere Node.js 18 oder neuer.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installiere Abhaengigkeiten...
  call npm install
)
echo.
echo KlassenCloud wird gestartet...
echo Browser: http://127.0.0.1:3000
echo Dieses Fenster offen lassen.
echo.
start "" http://127.0.0.1:3000
npm start
pause
