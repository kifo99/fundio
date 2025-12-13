# Use node 22 as my base image
FROM node:24

# Setting server as a working directory
WORKDIR /server

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Set port environment variable
ENV PORT=8080

# Exposing the port so computer can access it
EXPOSE 8080

# Run server
CMD [ "npm", "start" ]
