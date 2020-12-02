from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication,SessionAuthentication, BasicAuthentication
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from .models import Comment, Forum
from .serializers import CommentSerializer, ForumSerializer


class CommentViewSet(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication,]
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Comment.objects.all()

    # def create(self, request):
    #     serializer = ChildSerializer(data=request.data)
    #     if serializer.is_valid():
    #         assignment = serializer.create(request)
    #         if assignment:
    #             return Response(status=HTTP_201_CREATED)
    #     return Response({"message": "error creating assignment"},status=HTTP_400_BAD_REQUEST)


class ForumViewSet(viewsets.ModelViewSet):
    authentication_classes = [ SessionAuthentication,]
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = ForumSerializer
    queryset = Forum.objects.all()

    # def get_queryset(self):
    #     queryset = Result.objects.all()
    #     username = self.request.query_params.get('username', None)
    #     if username is not None:
    #         queryset = queryset.filter(child__username=username)
    #     return queryset


