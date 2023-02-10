import logging
import pyodbc
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

SQL_SERVER_PORT = os.getenv('SQL_SERVER_PORT')
SQL_SERVER_UID = os.getenv('SQL_SERVER_UID')
SQL_SERVER_PASSWORD = os.getenv('SQL_SERVER_PASSWORD')

def connection_to_db():
    """
    It creates a connection to the database using the pyodbc library
    :return: A connection object
    """
    connection_string = f'Driver={"ODBC Driver 17 for SQL Server"};Server=tcp:twitter-sql-server.database.windows.net,{SQL_SERVER_PORT};Database=tweets;Uid={SQL_SERVER_UID};Pwd={SQL_SERVER_PASSWORD};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
    return pyodbc.connect(connection_string)


def insert_data(data, cursor):
    """
    It takes a data and a cursor object as input, and inserts the row into the database
    
    :param data: a dictionary containing the data to be inserted
    :param cursor: the cursor object
    :return: True or False.
    """
    try :
        id, lang, text, created_at, like, rt, class_name, score, score_type = data.values()
        query = 'INSERT INTO tweets_tab (id, class, text, created_at, likes, retweet, language, sentiment_score, sentiment_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        cursor.execute(query, [id, class_name, text, created_at, like, rt, lang, score, score_type])
    except Exception as e: 
        logging.error('Cannot save the information into data base:\n{e}') 
        return False 
    return True

