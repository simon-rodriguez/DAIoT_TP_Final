# Starting point
FROM node:16.20.0-alpine3.18
# The tool needed for rebuild app once changes in code
RUN npm install nodemon -g
# Create the directory for app and dependencies
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# Set the workdir
WORKDIR /home/node/app
# Copy the package.json and package-lock.json if exists to the user folder
COPY package*.json ./
# Set the user properly
USER node
# Install packages marked in the package.json
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
# COPY --chown=node:node . .
# Set the port that will be exposed outside container
EXPOSE 8000

WORKDIR /src/backend

COPY package*.json ./

RUN npm install

EXPOSE 3000