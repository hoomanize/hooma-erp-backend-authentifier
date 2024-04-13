FROM httpd:2.4
LABEL authors="@hooma"

WORKDIR /usr/local/apache2

COPY docker/development/apache/conf ./conf
COPY docker/development/apache/index.html /data/www/

RUN mkdir cert

COPY common/ssl-certificates/hoomalocal.crt ./cert
COPY common/ssl-certificates/hoomalocal.key ./cert

RUN useradd -ms /bin/bash apache