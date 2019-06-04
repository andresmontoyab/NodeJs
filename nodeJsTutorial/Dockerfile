FROM node:7

RUN mkdir /deploy
WORKDIR /deploy

ADD package.json /deploy/package.json
RUN npm install --quiet

COPY ./ /deploy
CMD node index.js