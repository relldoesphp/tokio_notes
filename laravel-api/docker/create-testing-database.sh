#!/usr/bin/env bash

mysql --user=root --password="$MYSQL_ROOT_PASSWORD" <<-EOSQL
    CREATE DATABASE IF NOT EXISTS laravel_api;
    GRANT ALL PRIVILEGES ON \`laravel_api%\`.* TO '$MYSQL_USER'@'%';
EOSQL
