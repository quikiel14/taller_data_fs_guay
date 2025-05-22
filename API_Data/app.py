import pandas as pd
from flask import Flask, jsonify,request
from flask_cors import CORS
import os 

app = Flask(__name__)
cors = CORS(app)

os.chdir("C:\\Users\\Aggelos\\BootcampDataScience\\AngelosTheBridge\\Taller")

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the housing API chavales!'})



# Cargar la base de datos en un DataFrame
model = pd.read_pickle('model.pkl')
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    surface = int(data['surface'])
    bedrooms = int(data['bedrooms'])
    restrooms = int(data['restrooms'])

    input_data = [[surface, bedrooms, restrooms]]
    prediction = model.predict(input_data)

    return jsonify({'prediction': float(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")