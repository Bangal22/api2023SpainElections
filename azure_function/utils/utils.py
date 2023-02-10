import re 

POLITICAL_PARTIES = ['psoe', 'pp', 'vox', 'unidas podemos']

def get_tweet_text_class (text) :
    """
    It takes a tweet text as input and returns the political party name if it is present in the tweet
    text. If not, it returns 'No political party'
    
    :param text: The text of the tweet
    :return: The political party that is mentioned in the tweet.
    """
    text = text.lower()
    for parties in POLITICAL_PARTIES :
        if parties in text :
            return parties
    return 'other'


def transform_data (data) : 
    """
    It takes a row of data and returns a dictionary with the columns we want
    :param data: the dictionary that contains the data
    """
    data = dict(sorted(data.items()))
    class_name, created_at, _, id, lang, public_metrics, text = data.values()
    return {
        'id' : id, 
        'lang' : lang, 
        'text' : text, 
        'created_at' : created_at, 
        'like' : public_metrics['like_count'], 
        'rt' : public_metrics['retweet_count'], 
        'class' : class_name, 
    }

def clean_text (text) : 
    return re.sub('(RT @\w+:\s)', '', text)