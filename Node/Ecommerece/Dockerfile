#use official Node.js image
FROM node:22

#Create app directory
WORKDIR /app

#copy pacakge files
COPY pacakge*.json ./

#Install dependencies
RUN npm Install

#Copy project files
COPY . .

#Expose port
EXPOSE 3000

#Start application
CMD["node", "server.js"]