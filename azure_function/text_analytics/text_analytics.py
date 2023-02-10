import os
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

AZURE_ANALYTICS_KEY = os.getenv('AZURE_ANALYTICS_KEY')
ENDPOINT = 'https://twittercognitiveservice.cognitiveservices.azure.com/'

def get_max_score_sentiment(probabilities) :
    """
    It takes a dictionary of probabilities and returns a dictionary with the highest probability and the
    sentiment associated with it
    
    :param probabilities: a dictionary of probabilities for each sentiment
    :return: A dictionary with the sentiment score and the sentiment.
    """
    max_probability = max(probabilities.values())
    for probability in probabilities.items() :
        if probability[1] == max_probability :
            return {
                'sentiment_socre' : probability[1], 
                'sentiment_type' : probability[0]
            }

def get_score_sentiment(id, text, lang):
    """
    It takes the text, language and id of the text and returns the sentiment score
    
    :param id: The id of the document
    :param text: The text to be analyzed
    :param lang: The language of the text
    :return: The sentiment score of the text. {sentiment_score : 88, sentiment_type : neutral}
    """
    documents = [{'id': id, "text": text, "language": lang}]
    text_analytics_client = TextAnalyticsClient(endpoint=ENDPOINT, credential=AzureKeyCredential(AZURE_ANALYTICS_KEY))
    result = text_analytics_client.analyze_sentiment(documents, show_opinion_mining=True)
    probabilities = result[0]['confidence_scores']
    return get_max_score_sentiment(probabilities)
    
