from django.db import models

# Create your models here.


class Post (models.Model):
    name = models.CharField(max_length=200)
    post = models.CharField(max_length=400)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name
