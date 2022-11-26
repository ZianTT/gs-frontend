FROM nginx
COPY ./build-finished /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN command