@echo off
setlocal
cd /d "%~dp0"

echo [1/3] Checking environment...
if exist "node_modules" goto skip_install
echo [INFO] node_modules not found. Installing dependencies...
call npm install
:skip_install

if exist ".next" goto skip_build
echo [INFO] Build folder (.next) not found. Building project...
call npm run build
:skip_build

echo [2/3] Cleaning up old processes...
taskkill /F /IM node.exe /T 2>nul

echo [3/3] Starting open-lovable...
echo Access the app at http://localhost:3000
npm run start

pause