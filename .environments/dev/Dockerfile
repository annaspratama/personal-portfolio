# Import an image
FROM python:3.11-slim

# Set environment variables
ENV APP_PORT=8000
ENV MODE=local
ENV PYTHONUNBUFFERED 1

# Install supported components on Postgres SQL
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && apt-get install -y netcat-openbsd

# Upgrade pip
RUN pip install --upgrade pip

# Create new working directory
RUN mkdir /portfolio-app

# Set working directory
WORKDIR /portfolio-app

# Install dependencies
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Create user
RUN groupadd -g 1000 portfoliogroup
RUN useradd -m -u 1000 -g portfoliogroup adminuser
RUN chown -R adminuser:portfoliogroup /portfolio-app

# Set entrypoint
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Switch user
USER adminuser

ENTRYPOINT ["/entrypoint.sh"]


# Run python app
# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "portfolioproject.wsgi:application"]

# Expose port
EXPOSE ${APP_PORT}