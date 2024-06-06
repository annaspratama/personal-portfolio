#!/bin/sh

# Wait for database to be ready
echo "Waiting for PostgreSQL database..."
while ! nc -z portfolio_db 5432; do
  sleep 1
done
echo "The PostgreSQL database is ready!"

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Run the main container command
exec "$@"
