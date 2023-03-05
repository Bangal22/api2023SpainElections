import type { InfoByPoliticalParties } from '@model/index'
import { variables } from 'src/variables'

export async function getInfoByPoliticalParties(): Promise<InfoByPoliticalParties[]> {
    const response = await fetch(`${variables.API}/get-info`)
    const data : InfoByPoliticalParties[] = await response.json()
    return data
}