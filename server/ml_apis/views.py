from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
from . import predict

# Create your views here.
@api_view(['GET'])
def getData(request):
    return Response("my name is Aditya")

@api_view(['POST'])
def predictOutput(request):
    gotDataDic = json.loads(request.body.decode("utf-8"))
    print(gotDataDic,type(gotDataDic))
    input = []
    for k in gotDataDic:
        input.append(float(gotDataDic[k]))
    output = predict.Predict(input).predictUsingRandomForest()
    return Response(output)