from django.urls import path
from .import views

urlpatterns = [
    path("notes/", views.notes, name="notes"),
    path("notes/<slug:slug>", views.notes_detail, name="note-detail")
]