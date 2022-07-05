#!/bin/sh
cd ./laravel-api
./vendor/bin/sail build --no-cache
./vendor/bin/sail up -d
./vendor/bin/sail exec laravel php artisan key:generate
./vendor/bin/sail exec laravel php artisan migrate --seed
