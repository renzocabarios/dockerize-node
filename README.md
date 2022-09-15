# dockerize-node

## LOCAL SETUP

- RUN `npm install`
- RUN `npm start`

## DOCKER BUILD SETUP

- RUN `docker build . -t renzothenoob/express-app` [docker build . -t <container-name>]
- RUN `docker run -p 3000:3000 -t renzothenoob/express-app` [docker run -p <local-port>:<container-port> -t <container-name>]