# Usa una imagen base que contenga Node.js
FROM node:18.6-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app/frontent

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install


# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación cuando se inicia el contenedor
CMD ["npm", "run", "dev"]