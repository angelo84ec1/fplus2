# Generated by Django 4.0.1 on 2022-12-05 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marca', '0033_inversion_nombre_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categoria',
            name='iconofp',
            field=models.CharField(max_length=30, null=True, verbose_name='Icono de la Categoría'),
        ),
    ]
