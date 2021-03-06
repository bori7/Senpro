from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Child, Client, Result
from .serializers import ChildSerializer, ClientSerializer, ResultSerializer
from rest_framework.authentication import SessionAuthentication


class ChildViewSet(viewsets.ModelViewSet):
    serializer_class = ChildSerializer
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny, )
    queryset = Child.objects.all()

    # def create(self, request):
    #     serializer = ChildSerializer(data=request.data)
    #     if serializer.is_valid():
    #         assignment = serializer.create(request)
    #         if assignment:
    #             return Response(status=HTTP_201_CREATED)
    #     return Response({"message": "error creating assignment"},status=HTTP_400_BAD_REQUEST)


class ResultViewSet(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.AllowAny,  )
    serializer_class = ResultSerializer
    queryset = Result.objects.all()
    # def get_queryset(self):
    #     queryset = Result.objects.all()
    #     username = self.request.query_params.get('username', None)
    #     if username is not None:
    #         queryset = queryset.filter(child__username=username)
    #     return queryset


