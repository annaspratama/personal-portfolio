# Generated by Django 3.2.8 on 2021-10-23 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0003_alter_portfolio_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='programminglanguage',
            name='framework',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]