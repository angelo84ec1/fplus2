# Generated by Django 4.0.1 on 2022-11-07 20:54

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('marca', '0023_detalle_marca_color_texto_detalle_marca'),
    ]

    operations = [
        migrations.AddField(
            model_name='detalle_marca',
            name='color_texto_cuerpo_promesa_valor',
            field=colorfield.fields.ColorField(default='#FFFFFF', image_field=None, max_length=18, samples=None),
        ),
        migrations.AddField(
            model_name='detalle_marca',
            name='color_texto_titulo_promesa_valor',
            field=colorfield.fields.ColorField(default='#FFFFFF', image_field=None, max_length=18, samples=None),
        ),
    ]
