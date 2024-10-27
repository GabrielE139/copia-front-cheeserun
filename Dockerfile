# Etapa 1: Compilar la aplicación Angular
FROM node:18 AS build

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos de package y package-lock para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código de la aplicación Angular
COPY . .

# Compilar la aplicación en modo producción
RUN npm run build --prod

# Etapa 2: Configurar Nginx para servir la aplicación
FROM nginx:alpine

# Copiar los archivos de compilación desde la etapa anterior a la carpeta de Nginx
COPY --from=build /app/dist/front-cheeserun /usr/share/nginx/html

# Copiar el archivo de configuración de Nginx si tienes uno personalizado
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 82
EXPOSE 82

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
