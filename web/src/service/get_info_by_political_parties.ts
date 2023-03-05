import type { InfoByPoliticalParties } from '@model/index'
import { variables } from 'src/variables'

export async function getInfoByPoliticalParties(name: string): Promise<InfoByPoliticalParties> {
    const response = await fetch(`${variables.API}/get-info?name=${name}`)
    const data : InfoByPoliticalParties = await response.json()
    return data
}