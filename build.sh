#!/bin/sh
cd ./laravel-api
./vendor/bin/sail up -d
./vendor/bin/sail exec laravel php artisan migrate
