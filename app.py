from flask import Flask, request, jsonify
from ai_model import generate_code  # Import your code generation logic

app = Flask(__name__)

@app.route('/api/generate-code', methods=['POST'])
def generate_code_api():
    data = request.json
    requirements = data.get('requirements')
    generated_code = generate_code(requirements)  # Call your AI model's function
    return jsonify({'code': generated_code})

if __name__ == '__main__':
    app.run(debug=True)
