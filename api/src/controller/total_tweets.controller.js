import { modelTotalTweets } from '../model/total_tweets.model.js'
import { HTTP_OK, HTTP_ERROR } from '../utils/index.js'

export async function controllerTotalTweets(req, res) {
    const { status, response } = await modelTotalTweets()
    const data = await response
    return status
        ? res.status(HTTP_OK).json(data.recordset[0])
        : res.status(HTTP_ERROR).json({ 'message': 'Internal server error when obtaining data', data })

} 