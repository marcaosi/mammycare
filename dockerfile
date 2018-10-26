FROM php:7.2-apache
COPY ./server /var/www/html
RUN docker-php-ext-install mysqli