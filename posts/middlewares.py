class PermissionsPolicyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Agregar la cabecera Permissions-Policy con las características permitidas
        response["Permissions-Policy"] = "ambient-light-sensor 'self'"

        return response
