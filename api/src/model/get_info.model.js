import { connection } from '../db/connection/connection.js'
import { STATUS_OK, STATUS_ERROR } from '../utils/index.js'

export async function modelGetInfo () {
    try {
        const query = ` SELECT  class as class_name,
                                COUNT(text) as total_tweets, 
                                SUM(retweet) as total_retweets, 
                                COUNT(CASE WHEN "sentiment_type" = 'positive' THEN 1 END) AS "positive_tweets",
                                COUNT(CASE WHEN "sentiment_type" = 'negative' THEN 1 END) AS "negative_tweets",
                                COUNT(CASE WHEN "sentiment_type" = 'neutral' THEN 1 END) AS "neutral_tweets"
                        FROM tweets_tab 
                        GROUP BY class `
        const response = (await connection()).query(query)
        return { 'status': STATUS_OK, response }
    } catch (err) {
        return { 'status': STATUS_ERROR, 'response': [] }
    }
}

