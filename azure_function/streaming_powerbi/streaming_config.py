import requests
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

STREAMING_KEY = os.getenv('STREAMING_KEY')
ENDPOINT = f'https://api.powerbi.com/beta/f885f0ed-d49b-47d8-a57b-46659c27da85/datasets/c40d40c1-ba5b-4534-bcd6-3016114cde58/rows?key={STREAMING_KEY}'
HEADER = { 'Content-Type' : 'application/json' }

def send_data(data) :
    """
    It takes a dataframe as input, converts it to a JSON object, and then sends it to the Power BI API
    endpoint
    
    :param data: The data you want to send to Power BI
    :return: The status code of the response.
    """

    response = requests.post(ENDPOINT, headers=HEADER, json=data)
    return response.status_code == 201
        