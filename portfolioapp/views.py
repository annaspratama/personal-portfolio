from django.shortcuts import render
from django.views.generic import ListView
from portfolioapp.models import Portfolio, ProgrammingLanguage

# Create your views here.
class PortfolioList(ListView):
    model = Portfolio

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['programming_language_list'] = ProgrammingLanguage.objects.all().order_by('created_date')
        return context