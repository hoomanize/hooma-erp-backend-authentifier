FROM httpd:2.4
LABEL authors="@hooma"

WORKDIR /usr/local/apache2

COPY docker/apache/conf ./conf
COPY docker/apache/index.html /data/www/

RUN mkdir cert

COPY ssl-certificates/hoomalocal.crt ./cert
COPY ssl-certificates/hoomalocal.key ./cert

RUN useradd -ms /bin/bash apache