from django.contrib import admin

from .models import Client, Child, Result

admin.site.register(Client)
admin.site.register(Child)
admin.site.register(Result)

