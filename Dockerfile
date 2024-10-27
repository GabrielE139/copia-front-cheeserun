# Etapa 1: Construcción
FROM node:18 AS build

WORKDIR /app

# Copiar y preparar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente y compilar
COPY . .
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:1.23.1-alpine

# Copiar la aplicación compilada
COPY --from=build /app/dist/ng-tailwind /usr/share/nginx/html

EXPOSE 82
CMD ["nginx", "-g", "daemon off;"]

