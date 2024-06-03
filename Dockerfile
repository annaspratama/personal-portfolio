# Import an image
FROM python:3.11-slim

# Set environment variables
ENV APP_PORT=8000
ENV MODE=local
ENV PYTHONUNBUFFERED 1

# Install supported components on Postgres SQL
# RUN apt update && \
#     apt install -y build-deps gcc python-dev musl-dev && \
#     apt install postgresql-dev
RUN apt-get update \
    && apt-get -y install libpq-dev gcc

# Upgrade pip
RUN pip install --upgrade pip

# Create new working directory
RUN mkdir /portfolio-app

# Set working directory
WORKDIR /portfolio-app
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# Create user
RUN groupadd -g 1000 portfoliogroup
RUN useradd -m -u 1000 -g portfoliogroup adminuser
RUN chown -R adminuser:portfoliogroup /portfolio-app

# Switch user
USER adminuser

# Set entrypoint
ENTRYPOINT ["python"] 

# Run python app
CMD ["manage.py", "runserver", "0.0.0.0:8000"]

# Expose port
EXPOSE ${APP_PORT}