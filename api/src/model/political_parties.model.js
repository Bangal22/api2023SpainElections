import { connection } from '../db/connection/connection.js'
import { STATUS_OK, STATUS_ERROR } from '../utils/index.js'

export async function modelPoliticalParties() {
    try {
        const query = ` SELECT class as class_name, COUNT(*) as recount
                        FROM tweets_tab 
                        GROUP BY class 
                        ORDER BY recount DESC`
        const response = (await connection()).query(query)
        return { 'status': STATUS_OK, response }
    } catch (err) {
        return { 'status': STATUS_ERROR, 'response': [] }
    }

}