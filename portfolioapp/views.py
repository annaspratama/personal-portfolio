from django.shortcuts import render
from django.views.generic import ListView
from portfolioapp.models import Portfolio, ProgrammingLanguage

# Create your views here.
class PortfolioList(ListView):
    model = Portfolio

    # all_models_dict = {
    #     'template_name': 'contacts/index.html',
    #     # 'queryset': Portfolio.objects.all(),
    #     'extra_context': {
    #         'programming_language_list' : ProgrammingLanguage.objects.all()
    #     }
    # }

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['programming_language_list'] = ProgrammingLanguage.objects.all()

        return context