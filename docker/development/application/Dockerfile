FROM node:18-alpine
LABEL authors="@hooma"

WORKDIR /srv/authentifier-service

COPY --link ./package.json ./
COPY --link ./tsconfig.json ./
COPY --link ./common ./common

RUN npm install pnpm -g

RUN pnpm install

CMD "pnpm" "dev"