from django.contrib import admin
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date', 'completed')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title')
    list_editable = ('completed',)
    list_filter = ('completed', 'person')


admin.site.register(Todo, TodoAdmin)
