# Generated by Django 4.0.1 on 2022-11-02 20:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('marca', '0016_alter_detalle_marca_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detalle_marca',
            name='alt_imagen_banner',
        ),
        migrations.RemoveField(
            model_name='detalle_marca',
            name='title_imagen_banner',
        ),
    ]
