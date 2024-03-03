FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm install
RUN npm install -g json-server

EXPOSE 5173

CMD ["npm", "run", "dev"];
