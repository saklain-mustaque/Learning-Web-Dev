@echo off
echo 🚀 Starting deployment of all React apps...

cd React

echo 📦 Deploying background-changer...
cd background-changer
if not exist node_modules (
    echo 📥 Installing dependencies for background-changer...
    npm install
)
npm run deploy
if %errorlevel% equ 0 (
    echo ✅ Successfully deployed background-changer
) else (
    echo ❌ Failed to deploy background-changer
)
cd ..

echo.
echo 📦 Deploying github-card...
cd github-card
if not exist node_modules (
    echo 📥 Installing dependencies for github-card...
    npm install
)
npm run deploy
if %errorlevel% equ 0 (
    echo ✅ Successfully deployed github-card
) else (
    echo ❌ Failed to deploy github-card
)
cd ..

echo.
echo 📦 Deploying para-generator...
cd para-generator
if not exist node_modules (
    echo 📥 Installing dependencies for para-generator...
    npm install
)
npm run deploy
if %errorlevel% equ 0 (
    echo ✅ Successfully deployed para-generator
) else (
    echo ❌ Failed to deploy para-generator
)
cd ..

echo.
echo 📦 Deploying Profile-Card-Component...
cd Profile-Card-Component
if not exist node_modules (
    echo 📥 Installing dependencies for Profile-Card-Component...
    npm install
)
npm run deploy
if %errorlevel% equ 0 (
    echo ✅ Successfully deployed Profile-Card-Component
) else (
    echo ❌ Failed to deploy Profile-Card-Component
)
cd ..

echo.
echo 🎉 Deployment process completed!
pause
