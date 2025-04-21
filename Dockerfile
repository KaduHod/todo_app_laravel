FROM php:8.3.3-fpm
RUN apt-get update && apt-get install -y \
    nginx \
    libpq-dev \
    libssl-dev \
    openssl \
    nodejs \
    npm \
    && docker-php-ext-install pdo_pgsql
COPY infra/nginx.conf /etc/nginx/sites-available/default
WORKDIR /var/www/html
RUN mkdir -p todo
RUN mkdir -p /var/www/html && chown -R www-data:www-data /var/www/html
COPY . todo
RUN chmod -R 775 todo/storage todo/bootstrap/cache \
    && chown -R www-data:www-data todo/storage todo/bootstrap/cache todo/storage/logs
EXPOSE 80
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"]
