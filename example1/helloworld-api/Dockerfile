FROM ubuntu:20.04

COPY elastic-example-api /home/app/elastic-example-api
COPY package.json /home/app/package.json

SHELL ["/bin/bash", "-c"]
RUN apt update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install build-essential nodejs -y
WORKDIR /home/app
RUN npm install typescript -g
RUN npm install
WORKDIR /home/app/elastic-example-api
RUN tsc
CMD node app.js