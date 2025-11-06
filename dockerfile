# Usa una imagen oficial de Node.js
FROM node:18

# Crea el directorio de la app
WORKDIR /usr/src/app

# Copia los archivos de configuración primero (para aprovechar la caché)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expón el puerto donde corre tu app (por ejemplo 3000)
EXPOSE 3000

# Comando para arrancar tu servidor
CMD ["npm", "start"]