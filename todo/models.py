from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    title = models.CharField(max_length=150)
    completed = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)
    person = models.CharField(max_length=10)

    def __str__(self):
        return self.title
