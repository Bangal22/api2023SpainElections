import type { RecountSentiment } from '@model/index'
import { variables } from 'src/variables'
export async function getRecountSentiment(): Promise<RecountSentiment[]> {
    const response = await fetch(`${variables.API}/recount-sentiment`)
    const data: RecountSentiment[] = await response.json()
    return data
}