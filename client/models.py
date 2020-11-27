from django.contrib.auth import get_user_model
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

User = get_user_model()

class Client(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
  

    def __str__(self):
        return self.user.username


class Child(models.Model):
    parent = models.ForeignKey(
        Client, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length = 254)
    phone = models.IntegerField(null=False, blank=False, unique=True)
    # phone = PhoneNumberField(null=False, blank=False, unique=True)
    D_O_B = models.DateField(null=False, blank=False, unique=False)

    
    def __str__(self):
        return self.name


class Result(models.Model):
    child = models.ForeignKey(
        Child, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.child.name


# class Chat(models.Model):
#     participants = models.ManyToManyField(
#         Contact, related_name='chats', blank=True)
#     messages = models.ManyToManyField(Message, blank=True)

#     def __str__(self):
#         return "{}".format(self.pk)