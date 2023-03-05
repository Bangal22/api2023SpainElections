import { connection } from '../db/connection/connection.js'
import { STATUS_OK, STATUS_ERROR } from '../utils/index.js'

export async function modelRecountSentiment() {
    try {
        const query = ` SELECT sentiment_type, COUNT(*) as recount 
                        FROM tweets_tab 
                        GROUP BY sentiment_type `
        const response = (await connection()).query(query)
        return { 'status': STATUS_OK, response }
    } catch (err) {
        console.log(err)
        return { 'status': STATUS_ERROR, 'response': [] }
    }

}