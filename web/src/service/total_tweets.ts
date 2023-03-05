import type { TotalTweets } from '@model/index'
import { variables } from 'src/variables'

export async function getTotalTweets() : Promise<TotalTweets> {
    const response = await fetch(`${variables.API}/total-tweets`);
    const data: TotalTweets = await response.json()
    return data
}