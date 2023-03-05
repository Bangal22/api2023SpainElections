import type { SumRetweetsSentiment } from '@model/index'
import { variables } from 'src/variables'

export async function getSumRetweetsSentiment(): Promise<SumRetweetsSentiment[]> {
    const response = await fetch(`${variables.API}/retweet-sum-sentiment`)
    const data: SumRetweetsSentiment[] = await response.json()
    return data
}