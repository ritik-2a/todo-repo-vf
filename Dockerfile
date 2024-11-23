# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json .

# RUN npm install vite@latest
# RUN npm install
# # RUN npm i bootstrap@5.3.3

# COPY . .

# # ENV 8080
# EXPOSE 5173

# CMD [ "npm", "run", "dev" ]

FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]