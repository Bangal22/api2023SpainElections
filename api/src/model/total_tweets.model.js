import { connection } from '../db/connection/connection.js'
import { STATUS_OK, STATUS_ERROR } from '../utils/index.js'

export async function modelTotalTweets() {
    try {
        const query = ` SELECT COUNT(*) as total_tweets 
                        FROM tweets_tab `
        const response = (await connection()).query(query)
        return { 'status': STATUS_OK, response }
    } catch (err) {
        console.log(err)
        return { 'status': STATUS_ERROR, 'response': [] }
    }
}