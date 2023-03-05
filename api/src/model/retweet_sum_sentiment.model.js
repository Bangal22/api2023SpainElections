import { connection } from '../db/connection/connection.js'
import { STATUS_OK, STATUS_ERROR } from '../utils/index.js'

export async function modelRetweetSumBySentiment() {
    try {
        const query = ` SELECT sentiment_type, SUM(retweet) as recount 
                        FROM tweets_tab 
                        GROUP BY sentiment_type 
                        ORDER BY recount ASC `
        const response = (await connection()).query(query)
        return { 'status': STATUS_OK, response }
    } catch (err) {
        console.log(err)
        return { 'status': STATUS_ERROR, 'response': [] }
    }
}