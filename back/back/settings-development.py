from .settings import * 

SECRET_KEY = '4$ki-cj6w)vr4fs$^nmqr-3x5os^g89c)8#r-gi(q%p9uj*r&m'
DEBUG = True
ALLOWED_HOSTS = ['localhost','api.cval.me']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8000",
    "https://localhost:8000",
    "http://localhost:4200",
    "http://www.cval.me",
    "http://cval.me",
]
