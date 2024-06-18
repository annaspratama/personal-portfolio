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

# Install virtual environment
RUN pip install virtualenv

# Create new working directory
RUN mkdir /portfolio-app

# Set working directory
WORKDIR /portfolio-app

# Install dependencies
COPY ./requirements.txt .

# Run virtual environment
RUN python -m venv python-env
RUN /bin/bash -c "source python-env/bin/activate"
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt
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

# Expose port
EXPOSE ${APP_PORT}