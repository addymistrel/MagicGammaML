import joblib
import os
# from tensorflow.keras.models import load_model

class Predict:
    def __init__(self,inp):
        self.input = inp

    def predictUsingRandomForest(self):
        print("Current Working Directory:", os.getcwd())
        modelPath = "modelTraining/randomForest.joblib"
        randomForest = joblib.load(modelPath)
        y_pred = randomForest.predict([self.input])
        out = ""
        print("output class",y_pred)
        if y_pred[0]==0:
            out="Hadron"
        else:
            out="Gamma"
        return out
