import type { RetweetSumPoliticalParties } from '@model/index'
import { variables } from 'src/variables'
export async function getRetweetSumPoliticalParties() : Promise<RetweetSumPoliticalParties[]> {
    const response = await fetch(`${variables.API}/retweet-sum-political-parties`)
    const data: RetweetSumPoliticalParties[] = await response.json()
    return data
}