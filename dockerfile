
FROM node:14


WORKDIR app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Copie o resto dos arquivos
COPY . .

EXPOSE 3333

# Defina o comando de inicialização
CMD ["npm", "start"]
