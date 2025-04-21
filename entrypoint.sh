#!/bin/bash
php-fpm &
cd /var/www/html/todo
npm run dev &
nginx -g "daemon off;"

