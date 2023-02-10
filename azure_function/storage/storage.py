import logging
import os
from azure.storage.blob import BlobServiceClient, ContainerClient
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

STORAGE_ACCOUNT_NAME = os.getenv('STORAGE_ACCOUNT_NAME')
STORAGE_ACCOUNT_KEY = os.getenv('STORAGE_ACCOUNT_KEY')

container_name = 'raw'
connection_string = f'DefaultEndpointsProtocol=https;AccountName={STORAGE_ACCOUNT_NAME};AccountKey={STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net'
container = ContainerClient.from_connection_string(conn_str=connection_string, container_name=container_name)
blob_service_client = BlobServiceClient.from_connection_string(conn_str=connection_string)
parent_folder_name = '2023Elections'
content_type = 'json'

def create_storage_connection () :
    """
    It creates a container if it doesn't exist
    :return: True
    """
    if not container.exists() :
        container.create_container()
    return True

def save_in_storage (id, class_name, data) :
    """
    It takes an id, a class name, and data, and then uploads the data to the storage account with the id
    and class name as the file name
    
    :param id: the id of the image
    :param class_name: The name of the class that the image belongs to
    :param data: the data to be saved in the storage
    :return: True if the data was saved in the storage, otherwise it returns False.
    """
    try :
        blob_name = f'{parent_folder_name}/{class_name}/{id}.{content_type}'
        blob = blob_service_client.get_blob_client(container = container_name, blob = blob_name)
        blob.upload_blob(data, overwrite = True)
    except Exception as e :
        logging.error(f'Cannot save the information into storage:\n {e}') 
        return False
    return True