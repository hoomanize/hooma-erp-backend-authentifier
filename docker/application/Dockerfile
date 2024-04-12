FROM node:20.11.0
LABEL authors="@hooma"

WORKDIR /srv/authentifier-service

COPY --link . ./

RUN npm install

CMD "npm" "run" "dev:run"