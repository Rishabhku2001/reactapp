from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message='Hello from Python!')





@app.route('/api/data', methods=['POST'])
def receive_data():
    print("hellow")
    data = request.json  # Assuming the data is sent in JSON format
    # Process the data in Python
    # ...

    # Respond with data (optional)
    response_data = {'result': 'Data received successfully'}
    print(data)
    data = data+"kumar"
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)



# 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    
