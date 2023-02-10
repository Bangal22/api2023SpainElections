#azure imports
import azure.functions as func

# py imports 
import logging
import json

# my functions
from text_analytics import text_analytics as analytic
from model import sql
from storage import storage
from utils import utils
from streaming_powerbi import streaming_config

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    storage.create_storage_connection()
    logging.info('Storage connection successful!')
    connection_db = sql.connection_to_db()
    logging.info('DB connection successful!')

    data = req.get_json() 
    data['class'] = utils.get_tweet_text_class(data['text']).lower()

    saved_in_storage = storage.save_in_storage(data['id'], data['class'] ,json.dumps(data, indent=4))
    if saved_in_storage:
        logging.info('Inset into storage successful!')
    
    data = utils.transform_data(data)
    data['text'] = utils.clean_text(data['text'])
    
    sentiment_score, sentiment_type = analytic.get_score_sentiment(data['id'], data['text'], lang='es').values()
    data['sentiment_score'] = sentiment_score
    data['sentiment_type'] = sentiment_type

    inserted = sql.insert_data(data, connection_db.cursor())
    connection_db.commit()

    if inserted :
        logging.info('Inset into db successful!')

    connection_db.close()
    
    streaming_config.send_data(data)
    return func.HttpResponse("This HTTP triggered function executed successfully.", status_code=200)        
         