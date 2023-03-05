import { modelGetInfo } from '#model/get_info.model.js'
import { HTTP_OK, HTTP_ERROR } from '#utils/index.js'

export async function controllerGetInfo(req, res) {
    const { status, response } = await modelGetInfo()
    const data = await response
    const { recordset } = data

    return status
        ? res.status(HTTP_OK).json(recordset)
        : res.status(HTTP_ERROR).json({ 'message': 'Internal server error when obtaining data', data })
}