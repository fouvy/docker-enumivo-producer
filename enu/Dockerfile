FROM ubuntu:18.04
LABEL Maintainer="William Fouvy <fouvey@gmail.com>"

COPY ./enunode /usr/local/bin/
COPY ./config/* /enu/

STOPSIGNAL SIGINT

RUN apt update -y \
  && apt install -y openssl

CMD ["enunode", "--config-dir","/enu","--data-dir","/data"]

EXPOSE 9000 9001
