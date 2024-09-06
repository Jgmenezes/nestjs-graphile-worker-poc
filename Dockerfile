FROM node:20.10.0-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]

EXPOSE 9090