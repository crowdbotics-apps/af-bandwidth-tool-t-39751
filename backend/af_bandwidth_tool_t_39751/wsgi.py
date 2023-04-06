"""
WSGI config for af_bandwidth_tool_t_39751 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'af_bandwidth_tool_t_39751.settings')

application = get_wsgi_application()
