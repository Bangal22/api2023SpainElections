import { modelRecountSentiment } from '../model/recount_sentiment.model.js'
import { HTTP_OK, HTTP_ERROR } from '../utils/index.js'

export async function controllerRecountSentiment(_, res) {
    const { status, response } = await modelRecountSentiment()
    const data = await response
    
    return status
        ? res.status(HTTP_OK).json(data.recordset)
        : res.status(HTTP_ERROR).json({ 'message': 'Internal error when obtaining data', data })
}


// export async function controllerRecountSentiment(_, res) {
//     const { status, response } = await modelRecountSentiment()
//     const { recordset } = await response
//     const data = recordset.reduce((acc, { sentiment_type, recount }) => {
//         acc[sentiment_type] = recount
//         return acc
//     }, {})
    
//     return status
//         ? res.status(HTTP_OK).json(data)
//         : res.status(HTTP_ERROR).json({ 'message': 'Internal error when obtaining data', data })
// }