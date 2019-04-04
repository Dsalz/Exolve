FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
RUN npm run build
CMD npm start
EXPOSE 4000