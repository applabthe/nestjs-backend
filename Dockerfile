# Usa a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN yarn install

# Copia o restante do código para dentro do container
COPY . .

# Expõe a porta 3000 para a aplicação NestJS
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["yarn", "start:dev"]