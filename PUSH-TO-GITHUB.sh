#!/bin/bash
# GitHub'a push script'i
# Kullanım: ./PUSH-TO-GITHUB.sh

echo "GitHub repository URL'inizi girin (örn: https://github.com/username/acentigo-marketing.git):"
read GITHUB_URL

cd /home/acentigo/acentigo-marketing

# Git repository zaten initialize edilmiş
git add .
git commit -m "Initial commit - AcentiGo Marketing Site"
git branch -M main
git remote add origin $GITHUB_URL
git push -u origin main

echo "✅ Proje GitHub'a push edildi!"
echo "Şimdi Vercel Dashboard'a gidin ve repository'yi import edin."

