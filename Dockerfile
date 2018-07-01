FROM node:10.4-slim

LABEL vendor="Codate express and mongoose" \
      mantainer="Charles Viegas <charles.viegas@codate.com.br>"

RUN apt-get update \
    && apt-get install -y git \
    && git clone https://github.com/eficode/wait-for.git

COPY . /app/
WORKDIR /app

RUN npm install \
    && cp /wait-for/wait-for . \
    && apt-get remove -y git \
    && rm -rf /wait-for

ENV HOST=0.0.0.0 \
    NODE_ENV=production \
    PORT=8083 \
    URL=mongodb://localhost/exam

EXPOSE 8083

CMD ["npm", "start"]
