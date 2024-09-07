# unit testing:

# flask api 
# -graph creation method (Neo4jGraph())
# --check for correct input of parameters
# --check whether the provided parameters are implemented


import pytest
from flask import Flask, json
from unittest.mock import patch
import os

os.environ["URL"] = "bolt://98.81.104.176:7687"
os.environ["NEO4J_URI"] = "bolt://98.81.104.176:7687"
os.environ["NEO4J_USERNAME"] = "neo4j"
os.environ["NEO4J_PASSWORD"] = "splitter-altimeters-runner"
os.environ["USERNAME"] = "neo4j"
os.environ["PASSWORD"] = "splitter-altimeters-runner"

os.environ["GOOGLE_API_KEY"] = "AIzaSyD-8Z2JQbZ1ZJY1v6Zzr3Q7b7J9Y1v6Zzr3Q7b7J9Y"

from main import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_api_chat_valid_input(client):
    user_input = "List out the actors in top gun"
    expected_response = {"response": "Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards, Tom Skerritt, Michael Ironside, John Stockwell, Barry Tubb, Rick Rossovich, Tim Robbins, Clarence Gilyard Jr., Whip Hubley, James Tolkan, Meg Ryan, Adrian Pasdar, Randall Brady, Duke Stroud, Linda Rae Jurgens, Brian Sheehan, Ron Clark, Frank Pesce, Pete Pettigrew, Troy Hunter, and Debi Fares."}
    
    user_input2="Make a poem on the actors in top gun"
    expected_response2 = {"response": "In the skies where eagles dare to soar,Tom Cruise as Maverick, forever more.With Kelly McGillis, Charlie’s grace,Their love story, a thrilling chase.Val Kilmer, the Iceman, cool and grand,Anthony Edwards, Goose, a loyal hand.Tom Skerritt as Viper, wisdom’s guide,Michael Ironside, Jester, with pride.Tim Robbins, Merlin, sharp and keen,Meg Ryan, Carole, in a touching scene.Rick Rossovich, Slider, strong and true,Barry Tubb, Wolfman, part of the crew.Each actor brought their heart and soul,To make “Top Gun” a timeless goal.In jets they flew, in hearts they stay,Legends of the silver screen, come what may."} 

    with patch('your_module.chain.invoke', return_value={'result': expected_response}):
        response = client.get(f'/api/chat/{user_input}')
        assert json.loads(response.data) == expected_response
        assert response.status_code == 200
        assert response.headers["Access-Control-Allow-Origin"] == "*"
    
    with patch('your_module.chain.invoke', return_value={'result': expected_response2}):
        response = client.get(f'/api/chat/{user_input2}')
        assert json.loads(response.data) == expected_response2
        assert response.status_code == 200
        assert response.headers["Access-Control-Allow-Origin"] == "*"



# Inputs
# 	user_input: A string input from the user, passed as a URL parameter.
# Flow
# 	The route /api/chat/<user_input> is accessed via a GET request.
# 	The user_input is passed to the AI chain to generate a response.
# 	The AI response is extracted from the chain's output.
# 	The response is converted to JSON and CORS headers are added.
# 	The JSON response is returned to the client.
# Outputs
# 	A JSON object containing the AI-generated response to the user's input.



def test_api_chat_empty_input(client):
    user_input = ""
    expected_response = {"response": "Invalid input."}
    with patch('your_module.chain.invoke', return_value={'result': expected_response}):
        response = client.get(f'/api/chat/{user_input}')
        assert json.loads(response.data) == expected_response 
        assert response.status_code == 200
        assert response.headers["Access-Control-Allow-Origin"] == "*"


if __name__ == "__main__":
    pytest.main()


# -get_chat_response(user_input)
# --check whether it takes blank input
# --it should provide correct response
# --should handle empty response


