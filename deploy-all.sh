#!/bin/bash

# Deploy all React apps individually using gh-pages

echo "🚀 Starting deployment of all React apps..."

# Array of app directories
apps=("background-changer" "github-card" "para-generator" "Profile-Card-Component")

# Change to React directory
cd React

for app in "${apps[@]}"; do
    echo "📦 Deploying $app..."
    cd "$app"
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        echo "📥 Installing dependencies for $app..."
        npm install
    fi
    
    # Build and deploy
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully deployed $app"
    else
        echo "❌ Failed to deploy $app"
    fi
    
    cd ..
    echo ""
done

echo "🎉 Deployment process completed!"
