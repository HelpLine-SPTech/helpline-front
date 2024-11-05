# Etapa 1: Construir o projeto
FROM node:18 AS build

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte para o contêiner
COPY . .

# Compile o projeto React
RUN npm run build

# Etapa 2: Servir a aplicação usando nginx
FROM nginx:stable-alpine

# Copie os arquivos de build da aplicação React para a pasta padrão do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie a configuração personalizada do nginx (opcional)
# Se você precisar de uma configuração customizada, crie um arquivo nginx.conf e descomente a linha abaixo:
# COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta que o Nginx usará
EXPOSE 80

# Inicia o Nginx quando o contêiner rodar
CMD ["nginx", "-g", "daemon off;"]
