FROM node:21

WORKDIR /usr/src/app

COPY . .
RUN npm i --production
RUN npm run build
CMD ["npm", "run"]