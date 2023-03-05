import { modelSumOfRetweets } from '../model/sum_of_retweets.model.js'
import { HTTP_OK, HTTP_ERROR } from '../utils/index.js'

export async function controllerSumOfRetweets(req, res) {
    const { status, response } = await modelSumOfRetweets()
    const data = await response
    return status
        ? res.status(HTTP_OK).json(data.recordset[0])
        : res.status(HTTP_ERROR).json({ 'message': 'Internal server error when obtaining data', data })

} 