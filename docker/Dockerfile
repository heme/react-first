FROM nginx:1.13.3-alpine

# configuration files
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/inc /etc/nginx/inc

# nginx default PID location doesn't exist - https://github.com/gliderlabs/docker-alpine/issues/185
RUN mkdir -p /run/nginx
RUN mkdir -p /var/run

# code
COPY ./public /app/public

EXPOSE 80 443 8080

CMD ["nginx", "-g", "daemon off;"]
