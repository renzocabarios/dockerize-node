# dockerize-node

## LOCAL SETUP

- RUN `npm install`
- RUN `npm start`

## DOCKER BUILD SETUP

- RUN `docker build . -t renzothenoob/express-app` [docker build . -t <container-name>]
- RUN `docker run -p 3000:3000 -t renzothenoob/express-app` [docker run -p <local-port>:<container-port> -t <container-name>]


## DOCKER COMPOSE BUILD SETUP

- RUN `docker-compose -p docker-file up --build` [docker-compose -p <main-container-name> up --build]

## REFERENCE

- RUN `docker images` shows images in your docker
- RUN `docker kill <container-id>` kills running container