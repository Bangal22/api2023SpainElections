import { modelPoliticalParties } from '../model/political_parties.model.js'
import { HTTP_OK, HTTP_ERROR } from '../utils/index.js'

export async function controllerPoliticalParties(req, res) {
    const { status, response } = await modelPoliticalParties()
    const data = await response
    const { recordset } = data

    return status
        ? res.status(HTTP_OK).json(recordset)
        : res.status(HTTP_ERROR).json({ 'message': 'Internal server error when obtaining data', data })
}