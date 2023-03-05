import type { PoliticalPartiesTweets } from '@model/index'
import { variables } from 'src/variables'
export async function getRecountPoliticalPartiesTweets(): Promise<PoliticalPartiesTweets[]> {
    const response = await fetch(`${variables.API}/recount-political-parties`)
    const data: PoliticalPartiesTweets[] = await response.json()
    return data
}