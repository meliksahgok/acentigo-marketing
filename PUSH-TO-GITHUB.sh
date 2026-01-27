#!/bin/bash
# GitHub'a push script'i
# Kullanım: Bu script'i çalıştırıp GitHub kullanıcı adı ve token'ınızı girin

echo "GitHub kullanıcı adınızı girin:"
read GITHUB_USER

echo "GitHub Personal Access Token'ınızı girin:"
read GITHUB_TOKEN

cd /home/acentigo/acentigo-marketing

git remote set-url origin https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/meliksahgok/acentigo-marketing.git

git push -u origin main

echo "✅ Push tamamlandı!"

