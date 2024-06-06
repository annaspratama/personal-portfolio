#!/bin/sh

# Wait for database to be ready
echo "Waiting for PostgreSQL database..."
while ! nc -z portfolio_db 5432; do
  sleep 1
done
echo "The PostgreSQL database is up."

# Run migrations
echo "Running collect static files..."
python manage.py collectstatic --no-input
echo "Static files has collected."

echo "Running migrations..."
python manage.py makemigrations
python manage.py migrate
echo "Migrations has completed."

# Run the main container command
exec "$@"
