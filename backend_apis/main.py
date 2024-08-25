from flask import Flask, jsonify
from langchain.chains import GraphCypherQAChain
from langchain_community.graphs import Neo4jGraph
from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

enhanced_graph = Neo4jGraph(
    url=os.getenv("URL"),
    username=os.getenv("USERNAME"),
    password=os.getenv("PASSWORD"),
    enhanced_schema=True,
)
chain = GraphCypherQAChain.from_llm(
    ChatGoogleGenerativeAI(temperature=0.8, model="gemini-1.5-flash"), graph=enhanced_graph, verbose=True
)

@app.route("/api/chat/<user_input>", methods=["GET"])
def get_chat_response(user_input):
    
    # Generate AI response for user input
    ans = chain.invoke({"query": user_input})
    ai_response = ans['result']

    # Add the Access-Control-Allow-Origin header
    response = jsonify(ai_response)
    response.headers["Access-Control-Allow-Origin"] = (
        "*"  # Allow requests from any origin
    )
    return response


if __name__ == "__main__":
    app.run(debug=True)
