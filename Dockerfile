# Etapa 1: Construção do React App
FROM node:18 as build
WORKDIR /app

# Copiar os arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Configuração do Nginx
FROM nginx:1.25
# Copiar os arquivos estáticos do build para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Substituir a configuração padrão do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
