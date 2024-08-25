from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/chat/<user_input>', methods=['GET'])
def get_chat_response(user_input):
    # Replace with your actual chatbot logic
    dummy_response = "This is a dummy response from the Flask API."

    # Add the Access-Control-Allow-Origin header
    response = jsonify(dummy_response)
    response.headers['Access-Control-Allow-Origin'] = '*'  # Allow requests from any origin
    return response

if __name__ == '__main__':
    app.run(debug=True)