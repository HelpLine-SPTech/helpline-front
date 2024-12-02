#!/bin/bash

# Variáveis
DOCKER_USERNAME="guiscarabelli"
DOCKER_PASSWORD="guIgui659"
DOCKER_IMAGE_NAME="guiscarabelli/react-app2"
DOCKER_TAG="latest" # ou use outro tag, como $(date +%Y%m%d%H%M%S) para algo dinâmico
BUILD_DIR="build"

# Passo 1: Login no Docker Hub
echo "Fazendo login no Docker Hub..."
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
if [ $? -ne 0 ]; then
    echo "Erro ao fazer login no Docker Hub."
    exit 1
fi

# Passo 2: Build do projeto React
echo "Construindo o projeto React..."
npm install && npm run build
if [ $? -ne 0 ]; then
    echo "Erro ao construir o projeto React."
    exit 1
fi

# Passo 3: Build da imagem Docker
echo "Construindo a imagem Docker..."
docker build -t "$DOCKER_IMAGE_NAME:$DOCKER_TAG" -f ./Dockerfile .
if [ $? -ne 0 ]; then
    echo "Erro ao construir a imagem Docker."
    exit 1
fi

# Passo 4: Enviar imagem para o Docker Hub
echo "Enviando imagem para o Docker Hub..."
docker push "$DOCKER_IMAGE_NAME:$DOCKER_TAG"
if [ $? -ne 0 ]; then
    echo "Erro ao enviar a imagem para o Docker Hub."
    exit 1
fi

echo "Deploy concluído com sucesso!"
