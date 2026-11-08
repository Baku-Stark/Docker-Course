# --- Estágio 1: Build da aplicação ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# O resultado disso será a pasta 'dist' com os arquivos HTML/JS prontos

# --- Estágio 2: Servir com Nginx ---
FROM nginx:alpine
# Copia apenas os arquivos estáticos gerados no estágio anterior para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]