import { modelRetweetSumBySentiment } from '../model/retweet_sum_sentiment.model.js'
import { HTTP_OK, HTTP_ERROR } from '../utils/index.js'

export async function controllerRetweetSumBySentiment(req, res) {
    const { status, response } = await modelRetweetSumBySentiment()
    const data = await response
    
    return status
        ? res.status(HTTP_OK).json(data.recordset)
        : res.status(HTTP_ERROR).json({ 'message': 'Internal server error when obtaining data', data })

} 