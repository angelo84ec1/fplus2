# Generated by Django 4.0.1 on 2022-10-11 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marca', '0014_alter_detalle_marca_cuerpo_promesa_valor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detalle_marca',
            name='cuerpo_promesa_valor',
            field=models.TextField(help_text='Máximo 600 caracteres', max_length=600, verbose_name='Cuerpo promesa de valor'),
        ),
    ]
