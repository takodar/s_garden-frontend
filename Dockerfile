FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
ADD ./s_garden /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 3110
CMD [ "npm", "run", "start-react-prod" ]